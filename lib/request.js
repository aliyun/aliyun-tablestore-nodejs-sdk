var TableStore = require('./core');
var inherit = TableStore.util.inherit;

var hardErrorStates = { success: 1, error: 1, complete: 1 };

function isTerminalState(machine) {
  return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
}

function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = async function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  try {
    var self = this;
    var state = self.states[self.currentState];
    await state.fn.call(bindObject || self, inputError, async (err) => {
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

      await self.runTo(finalState, done, bindObject, err);
    });
  } catch (err) {
    if (done) done(err);
  }
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
  var transition = async function transition(_, done) {
    var self = this;
    var origError = self.response.error;
    try {
      await self.emit(self._asm.currentState, async (err) => {
        if (err) {
          if (isTerminalState(self)) {
            throw err;
          } else {
            self.response.error = err;
            done(err);
          }
        } else {
          done(self.response.error);
        }
      });
    } catch (err) {
      if (isTerminalState(self)) {
        throw err;
      } else {
        self.response.error = err;
        done(err);
      }
    }
  };

  this.addState('restart', 'build', 'error', async function (err, done) {
    err = this.response.error;
    if (!err) return done();
    err.retryable = TableStore.DefaultRetryPolicy.shouldRetry(this.response.retryCount, this.response.error, this.response.request.operation);
    if (!err.retryable) return done(err);

    if (this.response.retryCount < TableStore.DefaultRetryPolicy.maxRetryTimes) {
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
  this.addState('complete', null, null, transition);
};
fsm.setupStates();

TableStore.Request = inherit({

  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param config [TableStore.Config] the config to perform the operation on
   * @param operation [String] the operation to perform on the service
   * @param params [Object] parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor: function Request(config, operation, params) {
    var endpoint = new TableStore.Endpoint(config.endpoint);
    var region = config.region;
    this.config = config;
    if (config.maxRetries !== undefined) {
      TableStore.DefaultRetryPolicy.maxRetryTimes = config.maxRetries;
    }
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
   *     request = client.listTable({Bucket: 'bucket', Key: 'key'});
   *     request.send(function(err, data) { console.log(err, data); });
   */
  send: async function send(callback) {
    if (callback) {
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    await this.runTo();

    return this.response;
  },

  build: async function build(callback) {
    await this.runTo('send', callback);
  },

  runTo: async function runTo(state, done) {
    await this._asm.runTo(state, done, this);
    return this;
  },

  /**
   * @param [Array,Response] args This should be the response object,
   *   or an array of args to send to the event.
   * @api private
   */
  emitEvent: async function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = function () { };
    if (!args) args = this.eventParameters(eventName, this.response);
    var origEmit = TableStore.SequentialExecutor.prototype.emit;
    try {
      await origEmit.call(this, eventName, args, async (err) => {
        if (err) this.response.error = err;
        done.call(this, err);
      });
    } catch (err) {
      if (done) done(err);
    }
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
    this.httpResponse = new TableStore.HttpResponse();
  }

});