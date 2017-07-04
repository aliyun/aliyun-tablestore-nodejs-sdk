var TableStore = require('./core');
require('./sequential_executor');

TableStore.EventListeners = {
  Core: {}
};

TableStore.EventListeners = {
  Core: new TableStore.SequentialExecutor().addNamedListeners(function (add, addAsync) {

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        var length = TableStore.util.string.byteLength(req.httpRequest.body);
        req.httpRequest.headers['Content-Length'] = length;
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    addAsync('SIGN', 'sign', function SIGN(req, done) {
      var credentials = req.config.getCredentials();

      try {
        var date = TableStore.util.date.getDate();
        var signer = new TableStore.Signer(req.httpRequest);

        // add new authorization
        signer.addAuthorization(credentials, date);
      } catch (e) {
        req.response.error = e;
      }
      done();
    });

    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
      if (resp.httpResponse.statusCode < 300) {
        resp.data = {};
        resp.error = null;
      } else {
        resp.data = null;
        resp.error = TableStore.util.error(new Error(),
          { code: 'UnknownError', message: 'An unknown error occurred.' });
      }
    });

    addAsync('SEND', 'send', function SEND(resp, done) {
      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;
        resp.httpResponse._abortCallback = done;

        httpResp.on('headers', function onHeaders(statusCode, headers) {
          resp.request.emit('httpHeaders', [statusCode, headers, resp]);

          if (!resp.request.httpRequest._streaming) {
            if (TableStore.HttpClient.streamsApiVersion === 2) { // streams2 API check
              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emit('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emit('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          resp.request.emit('httpDone');
          done();
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(progress) {
          resp.request.emit('httpUploadProgress', [progress, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(progress) {
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        });
      }

      function error(err) {
        resp.error = TableStore.util.error(err, {
          code: 'NetworkingError',
          region: resp.request.httpRequest.region,
          hostname: resp.request.httpRequest.endpoint.hostname,
          retryable: true
        });
        resp.request.emit('httpError', [resp.error, resp], function () {
          done();
        });
      }

      resp.error = null;
      resp.data = null;

      var http = TableStore.HttpClient.getInstance();
      var httpOptions = resp.request.config.httpOptions || {};
      //this.httpRequest.debug();
      var s = http.handleRequest(this.httpRequest, httpOptions, callback, error);
      progress(s);
    });

    add('HTTP_HEADERS', 'httpHeaders', function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new TableStore.util.Buffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        resp.httpResponse.numBytes += chunk.length;

        var total = resp.httpResponse.headers['content-length'];
        var progress = { loaded: resp.httpResponse.numBytes, total: total };
        resp.request.emit('httpDownloadProgress', [progress, resp]);

        resp.httpResponse.buffers.push(new TableStore.util.Buffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = TableStore.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
      delete resp.httpResponse.buffers;
    });

    add('RETRY_CHECK', 'retry', function FINALIZE_ERROR(resp) {
      if (resp.error) {
        resp.error.retryable = TableStore.DefaultRetryPolicy.shouldRetry(resp.retryCount, resp.error, resp.request.operation);
      }
    });

    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
      var delay, willRetry = false;

      if (resp.error) {
        delay = TableStore.DefaultRetryPolicy.getRetryDelay(resp.retryCount, resp.error);
        var maxRetryTimes = TableStore.DefaultRetryPolicy.maxRetryTimes;
        if (resp.error.retryable && resp.retryCount < maxRetryTimes) {
          resp.retryCount++;
          willRetry = true;
        }
      }

      if (willRetry) {
        resp.error = null;
        setTimeout(done, delay);
      } else {
        done();
      }
    });

  }),

  Logger: new TableStore.SequentialExecutor().addNamedListeners(function (add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.config.logger;
      if (!logger) return;

      function buildMessage() {
        var time = TableStore.util.date.getDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var params = require('util').inspect(req.params, true, true);

        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[TableStore ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + req.operation + '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var message = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(message);
      } else if (typeof logger.write === 'function') {
        logger.write(message + '\n');
      }
    });
  }),
};
