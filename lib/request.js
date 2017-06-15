var TableStore = require('./core');
var inherit = TableStore.util.inherit;

function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  var self = this;
  var state = self.states[self.currentState];
  state.fn.call(bindObject || self, inputError, function (err) {
    if (err) {
      if (bindObject.logger) bindObject.logger.log(self.currentState, '->', state.fail, err);
      if (state.fail) self.currentState = state.fail;
      else return done ? done(err) : null;
    } else {
      if (bindObject.logger) bindObject.logger.log(self.currentState, '->', state.accept);
      if (state.accept) self.currentState = state.accept;
      else return done ? done() : null;
    }
    if (self.currentState === finalState) return done ? done(err) : null;

    self.runTo(finalState, done, bindObject, err);
  });
};

AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
  if (typeof acceptState === 'function') {
    fn = acceptState; acceptState = null; failState = null;
  } else if (typeof failState === 'function') {
    fn = failState; failState = null;
  }

  if (!this.currentState) this.currentState = name;
  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
  return this;
};

var fsm = new AcceptorStateMachine();
fsm.setupStates = function () {
  var hardErrorStates = ['success', 'error', 'complete'];
  var transition = function transition(err, done) {
    try {
      var self = this;
      var origError = self.response.error;
      self.emit(self._asm.currentState, function () {
        if (self.response.error && origError != self.response.error) {
          if (hardErrorStates.indexOf(this._asm.currentState) >= 0) {
            this._hardError = true;
          }
        }
        done(self.response.error);
      });

    } catch (e) {
      this.response.error = e;
      if (hardErrorStates.indexOf(this._asm.currentState) >= 0) {
        this._hardError = true;
      }
      done(e);
    }
  };

  this.addState('restart', 'build', 'error', function (err, done) {
    err = this.response.error;
    if (!err) return done();
    if (!err.retryable) return done(err);

    if (this.response.retryCount < this.service.config.maxRetries) {
      this.response.retryCount++;
      done();
    } else {
      done(err);
    }
  });
  this.addState('build', 'afterBuild', 'restart', transition);
  this.addState('afterBuild', 'sign', 'restart', transition);
  this.addState('sign', 'send', 'retry', transition);
  this.addState('retry', 'afterRetry', 'afterRetry', transition);
  this.addState('afterRetry', 'sign', 'error', transition);
  this.addState('send', 'validateResponse', 'retry', transition);
  this.addState('validateResponse', 'extractData', 'extractError', transition);
  this.addState('extractError', 'extractData', 'retry', transition);
  this.addState('extractData', 'success', 'retry', transition);
  this.addState('success', 'complete', 'complete', transition);
  this.addState('error', 'complete', 'complete', transition);
  this.addState('complete', null, 'uncaughtException', transition);
  this.addState('uncaughtException', function (err, done) {
    try {
      TableStore.SequentialExecutor.prototype.unhandledErrorCallback.call(this, err);
    } catch (e) {
      if (this._hardError) throw err;
    }
    done(err);
  });
};
fsm.setupStates();

TableStore.Request = inherit({

  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param service [TableStore.Service] the service to perform the operation on
   * @param operation [String] the operation to perform on the service
   * @param params [Object] parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor: function Request(config, operation, params) {
    var endpoint = new TableStore.Endpoint(config.endpoint);
    var region = config.region;
    this.config = config;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new TableStore.HttpRequest(endpoint, region);
    this.startTime = TableStore.util.date.getDate();

    this.response = new TableStore.Response(this);
    this.restartCount = 0;
    this._asm = new AcceptorStateMachine(fsm.states, 'build');

    TableStore.SequentialExecutor.call(this);
    this.emit = this.emitEvent;
  },

  /**
   * @!group Sending a Request
   */

  /**
   * @overload send(callback = null)
   *   Sends the request object.
   *
   *   @callback callback function(err, data)
   *     If a callback is supplied, it is called when a response is returned
   *     from the service.
   *     @param err [Error] the error object returned from the request.
   *       Set to `null` if the request is successful.
   *     @param data [Object] the de-serialized data returned from
   *       the request. Set to `null` if a request error occurs.
   *   @example Sending a request with a callback
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.send(function(err, data) { console.log(err, data); });
   *   @example Sending a request with no callback (using event handlers)
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.on('complete', function(response) { ... }); // register a callback
   *     request.send();
   */
  send: function send(callback) {
    if (callback) {
      this.on('complete', function (resp) {
        try {
          callback.call(resp, resp.error, resp.data);
        } catch (e) {
          resp.request._hardError = true;
          throw e;
        }
      });
    }
    this.runTo();

    return this.response;
  },

  build: function build(callback) {
    this._hardError = callback ? false : true;
    return this.runTo('send', callback);
  },

  runTo: function runTo(state, done) {
    this._asm.runTo(state, done, this);
    return this;
  },

  /**
   * Aborts a request, emitting the error and complete events.
   *
   * @!macro nobrowser
   * @example Aborting a request after sending
   *   var params = {
   *     Bucket: 'bucket', Key: 'key',
   *     Body: new Buffer(1024 * 1024 * 5) // 5MB payload
   *   };
   *   var request = s3.putObject(params);
   *   request.send(function (err, data) {
   *     if (err) console.log("Error:", err.code, err.message);
   *     else console.log(data);
   *   });
   *
   *   // abort request in 1 second
   *   setTimeout(request.abort.bind(request), 1000);
   *
   *   // prints "Error: RequestAbortedError Request aborted by user"
   * @return [TableStore.Request] the same request object, for chaining.
   * @since v1.4.0
   */
  abort: function abort() {
    this.removeAllListeners('validateResponse');
    this.removeAllListeners('extractError');
    this.on('validateResponse', function addAbortedError(resp) {
      resp.error = TableStore.util.error(new Error('Request aborted by user'), {
        code: 'RequestAbortedError', retryable: false
      });
    });

    if (this.httpRequest.stream) { // abort HTTP stream
      this.httpRequest.stream.abort();
      this.httpRequest._abortCallback();
    }

    return this;
  },

  /**
   * Converts the request object into a readable stream that
   * can be read from or piped into a writable stream.
   *
   * @note The data read from a readable stream contains only
   *   the raw HTTP body contents.
   * @example Manually reading from a stream
   *   request.createReadStream().on('data', function(data) {
   *     console.log("Got data:", data.toString());
   *   });
   * @example Piping a request body into a file
   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
   *   s3.service.getObject(params).createReadStream().pipe(out);
   * @return [Stream] the readable stream object that can be piped
   *   or read from (by registering 'data' event listeners).
   */
  createReadStream: function createReadStream() {
    var streams = require('stream');
    var req = this;
    var stream = null;
    var legacyStreams = false;

    if (TableStore.HttpClient.streamsApiVersion === 2) {
      stream = new streams.Readable();
      stream._read = function () { stream.push(''); };
    } else {
      stream = new streams.Stream();
      stream.readable = true;
    }

    stream.sent = false;
    stream.on('newListener', function (event) {
      if (!stream.sent && (event === 'data' || event === 'readable')) {
        if (event === 'data') legacyStreams = true;
        stream.sent = true;
        process.nextTick(function () { req.send(function () { }); });
      }
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        this.httpRequest._streaming = true;

        req.removeListener('httpData', TableStore.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', TableStore.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error, resp) {
          resp.error = error;
          resp.error.retryable = false;
        });

        var httpStream = resp.httpResponse.stream;
        stream.response = resp;
        stream._read = function () {
          var data;
          /*jshint boss:true*/
          while (data = httpStream.read()) {
            stream.push(data);
          }
          stream.push('');
        };

        var events = ['end', 'error', (legacyStreams ? 'data' : 'readable')];
        TableStore.util.arrayEach(events, function (event) {
          httpStream.on(event, function (arg) {
            stream.emit(event, arg);
          });
        });
      }
    });

    this.on('error', function (err) {
      stream.emit('error', err);
    });

    return stream;
  },

  /**
   * @param [Array,Response] args This should be the response object,
   *   or an array of args to send to the event.
   * @api private
   */
  emitEvent: function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = this.unhandledErrorCallback;
    if (!args) args = this.eventParameters(eventName, this.response);

    var origEmit = TableStore.SequentialExecutor.prototype.emit;
    origEmit.call(this, eventName, args, function (err) {
      if (err) this.response.error = err;
      done.call(this, err);
    });
  },

  /**
   * @api private
   */
  eventParameters: function eventParameters(eventName) {
    switch (eventName) {
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterBuild':
        return [this];
      case 'error':
        return [this.response.error, this.response];
      default:
        return [this.response];
    }
  }
});

TableStore.util.mixin(TableStore.Request, TableStore.SequentialExecutor);

TableStore.Response = inherit({

  /**
   * @api private
   */
  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new TableStore.HttpResponse();
  }

});
