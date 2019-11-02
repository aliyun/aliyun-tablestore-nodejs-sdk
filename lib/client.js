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
    var buffer = request.__proto__.constructor.encode(request);
    req.httpRequest.body = buffer.finish();
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
    if (callback) {
      request.send(callback);
      return request;
    } else {
      return new Promise(function (resolve, reject) {
        request.send(function (err, data) {
          if (err) {
            return reject(err);
          }
          resolve(data);
        });
      });
    }
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

  /**********************************  表操作 开始 ******************************************/
  /**
   * 根据给定的表结构信息创建相应的表。
   */
  createTable: function createTable(params, callback) {
    return this.makeRequest('createTable', params, callback);
  },

  /**
   * 获取当前实例下已创建的所有表的表名。
   */
  listTable: function listTable(params, callback) {
    return this.makeRequest('listTable', params, callback);
  },

  /**
   * 删除本实例下指定的表。
   */
  deleteTable: function deleteTable(params, callback) {
    return this.makeRequest('deleteTable', params, callback);
  },

  /**
   * 更新指定表的预留读吞吐量或预留写吞吐量设置。
   */
  updateTable: function describeTable(params, callback) {
    return this.makeRequest('updateTable', params, callback);
  },

  /**
   * 查询指定表的结构信息和预留读/写吞吐量设置信息。
   */
  describeTable: function describeTable(params, callback) {
    return this.makeRequest('describeTable', params, callback);
  },

  /**********************************  表操作 结束 ******************************************/


  /**********************************  数据操作 开始 ******************************************/

  /**
   * 根据给定的主键读取单行数据。
   */
  getRow: function getRow(params, callback) {
    return this.makeRequest('getRow', params, callback);
  },

  /**
   * 插入数据到指定的行，如果该行不存在，则新增一行；若该行存在，则覆盖原有行。
   */
  putRow: function putRow(params, callback) {
    return this.makeRequest('putRow', params, callback);
  },

  /**
   * 更新指定行的数据。如果该行不存在，则新增一行；若该行存在，则根据请求的内容在这一行中新增、修改或者删除指定列的值。
   */
  updateRow: function updateRow(params, callback) {
    return this.makeRequest('updateRow', params, callback);
  },

  /**
   * 删除一行数据。
   */
  deleteRow: function deleteRow(params, callback) {
    return this.makeRequest('deleteRow', params, callback);
  },

  /**
   * 读取指定主键范围内的数据。
   */
  getRange: function getRange(params, callback) {
    return this.makeRequest('getRange', params, callback);
  },

  /**
   * 批量读取一个或多个表中的若干行数据。
   */
  batchGetRow: function batchGetRow(params, callback) {
    return this.makeRequest('batchGetRow', params, callback);
  },

  /**
   * 批量修改行
   */
  batchWriteRow: function batchWriteRow(params, callback) {
    return this.makeRequest('batchWriteRow', params, callback);
  },

  /**
   * 获取表下所有SearchIndex索引名。
   */
  listSearchIndex: function listSearchIndex(params, callback) {
      return this.makeRequest('listSearchIndex', params, callback);
  },

  /**
   * 获取SearchIndex索引描述信息。
   */
  describeSearchIndex: function describeSearchIndex(params, callback) {
    return this.makeRequest('describeSearchIndex', params, callback);
  },

  /**
   * SearchIndex创建新索引。
   */
  createSearchIndex: function createSearchIndex(params, callback) {
    return this.makeRequest('createSearchIndex', params, callback);
  },

  /**
   * SearchIndex删除索引。
   */
  deleteSearchIndex: function deleteSearchIndex(params, callback) {
    return this.makeRequest('deleteSearchIndex', params, callback);
  },


  /**
   * SearchIndex搜索。
   */
  search: function search(params, callback) {
    return this.makeRequest('search', params, callback);
  },

  /**
   * 创建GlobalIndex索引名。
   */
  createIndex: function createIndex(params, callback) {
      return this.makeRequest('createIndex', params, callback);
  },

  /**
   * 删除GlobalIndex索引名。
   */
  dropIndex: function dropIndex(params, callback) {
      return this.makeRequest('dropIndex', params, callback);
  },

  /**
   * 创建局部事务
   */
  startLocalTransaction: function startLocalTransaction(params, callback) {
      return this.makeRequest('startLocalTransaction', params, callback)
  },

  /**
   * 提交事务
   */
  commitTransaction: function commitTransaction(params, callback) {
      return this.makeRequest('commitTransaction', params, callback)
  },

  /**
   * 丢弃事务
   */
  abortTransaction: function abortTransaction(params, callback) {
      return this.makeRequest('abortTransaction', params, callback)
  },

  /**********************************  数据操作 结束 ******************************************/
});
