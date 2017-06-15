var TableStore = require('./core');
var inherit = TableStore.util.inherit;

var capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

TableStore.Client = inherit({
  constructor: function Client(config) {
    this.config = new TableStore.Config(config);
  },

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.populateHeader);
    request.addListener('build', this.populateURI);
    request.addListener('build', this.buildContent);
    request.addListener('build', this.computeContentMd5);
    request.addListener('extractError', this.extractError);
    request.addListener('extractData', this.extractData);
  },

  populateURI: function populateURI(req) {
    var httpRequest = req.httpRequest;
    httpRequest.endpoint.host = httpRequest.endpoint.hostname;
    httpRequest.path = '/' + TableStore.util.string.upperFirst(req.operation);
  },

  populateHeader: function populateHeader(req) {
    var httpRequest = req.httpRequest;
    httpRequest.headers['x-ots-apiversion'] = '2015-12-31';
    httpRequest.headers['x-ots-instancename'] = req.config.instancename;
  },

  buildContent: function buildContent(req) {
    var request = TableStore.encoder.encode(req.operation, req.params);
    var buffer = request.encode();
    req.httpRequest.body = buffer.toBuffer();
  },

  computeContentMd5: function computeContentMd5(req) {
    var md5 = TableStore.util.crypto.md5(req.httpRequest.body, 'base64');
    req.httpRequest.headers['x-ots-contentmd5'] = md5;
  },

  /**
   * Provides a specialized parser for getBucketLocation -- all other
   * operations are parsed by the super class.
   *
   * @api private
   */
  extractData: function extractData(resp) {
    resp.data = TableStore.decoder.decode(resp.request.operation, resp.httpResponse.body);

    // extract request id
    resp.data.RequestId = resp.httpResponse.headers['x-ots-request-id'] ||
      resp.httpResponse.headers['x-ots-requestid'];
  },

  /**
   * Extracts an error object from the http response.
   *
   * @api private
   */
  extractError: function extractError(resp) {
    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      400: 'BadRequest',
      404: 'NotFound'
    };

    var code = resp.httpResponse.statusCode;
    var body = resp.httpResponse.body;
    if (codes[code] && body.length === 0) {
      resp.error = TableStore.util.error(new Error(), {
        code: codes[resp.httpResponse.statusCode],
        message: null,
        headers: resp.httpResponse.headers
      });
    } else {
      var data;
      try {
        data = new TableStore.XML.Parser({}).parse(body.toString());
        resp.error = TableStore.util.error(new Error(), {
          code: data.Code || code,
          message: data.Message || null,
          headers: resp.httpResponse.headers
        });
      }
      catch (e) {
        data = body.toString();
        resp.error = TableStore.util.error(new Error(), {
          code: code,
          message: data,
          headers: resp.httpResponse.headers
        });
      }
    }
  },

  /**
     * @api private
     */
  defaultRetryCount: 3,
  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    var request = new TableStore.Request(this.config, operation, params);
    this.addAllRequestListeners(request);

    if (callback) request.send(callback);
    return request;
  },

  /**
   * @api private
   */
  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [TableStore.events, TableStore.EventListeners.Core];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(TableStore.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by service classes.
   *
   * @api private
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  /**
   * @api private
   */
  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },

  /**
   * @api private
   */
  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  /**
   * @api private
   */
  networkingError: function networkingError(error) {
    return error.code == 'NetworkingError';
  },

  /**
   * @api private
   */
  throttledError: function throttledError(error) {
    // this logic varies between services
    return (error.code == 'ProvisionedThroughputExceededException');
  },

  /**********************************  表操作 开始 ******************************************/
  /**
   * 根据给定的表结构信息创建相应的表。
   */
  createTable(params, callback) {
    return this.makeRequest('createTable', params, callback);
  },

  /**
   * 获取当前实例下已创建的所有表的表名。
   */
  listTable(params, callback) {
    return this.makeRequest('listTable', params, callback);
  },

  /**
   * 删除本实例下指定的表。
   */
  deleteTable(params, callback) {
    return this.makeRequest('deleteTable', params, callback);
  },

  /**
   * 更新指定表的预留读吞吐量或预留写吞吐量设置。
   */
  updateTable(params, callback) {
    return this.makeRequest('updateTable', params, callback);
  },

  /**
   * 查询指定表的结构信息和预留读/写吞吐量设置信息。
   */
  describeTable(params, callback) {
    return this.makeRequest('describeTable', params, callback);
  },

  /**********************************  表操作 结束 ******************************************/


  /**********************************  数据操作 开始 ******************************************/

  /**
   * 根据给定的主键读取单行数据。
   */
  getRow(params, callback) {
    return this.makeRequest('getRow', params, callback);
  },

  /**
   * 插入数据到指定的行，如果该行不存在，则新增一行；若该行存在，则覆盖原有行。
   */
  putRow(params, callback) {
    return this.makeRequest('putRow', params, callback);
  },

  /**
   * 更新指定行的数据。如果该行不存在，则新增一行；若该行存在，则根据请求的内容在这一行中新增、修改或者删除指定列的值。
   */
  updateRow(params, callback) {
    return this.makeRequest('updateRow', params, callback);
  },

  /**
   * 删除一行数据。
   */
  deleteRow(params, callback) {
    return this.makeRequest('deleteRow', params, callback);
  },

  /**
   * 读取指定主键范围内的数据。
   */
  getRange(params, callback) {
    return this.makeRequest('getRange', params, callback);
  },

  /**
   * 批量读取一个或多个表中的若干行数据。
   */
  batchGetRow(params, callback) {
    return this.makeRequest('batchGetRow', params, callback);
  },

  /**
   * 批量修改行
   */
  batchWriteRow(params, callback) {
    return this.makeRequest('batchWriteRow', params, callback);
  }

  /**********************************  数据操作 结束 ******************************************/
});