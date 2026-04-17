var TableStore = require('./core');
var inherit = TableStore.util.inherit;

var capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

TableStore.Client = inherit({
  constructor: function(config) {
    this.config = new TableStore.Config(config);
  },

  setupRequestListeners: function(request) {
    request.addListener('build', this.populateHeader);
    request.addListener('build', this.populateURI);
    request.addListener('build', this.buildContent);
    request.addListener('build', this.computeContentMd5);
    request.addListener('extractError', this.extractError);
    request.addListener('extractData', this.extractData);
  },

  populateURI: function(req) {
    var httpRequest = req.httpRequest;
    httpRequest.endpoint.host = httpRequest.endpoint.hostname;
    httpRequest.path = '/' + TableStore.util.string.upperFirst(req.operation);
  },

  populateHeader: function(req) {
    var httpRequest = req.httpRequest;
    httpRequest.headers['x-ots-apiversion'] = '2015-12-31';
    httpRequest.headers['x-ots-instancename'] = req.config.instancename;
  },

  buildContent: function(req) {
    var request = TableStore.encoder.encode(req.operation, req.params);
    var buffer = Object.getPrototypeOf(request).constructor.encode(request);
    req.httpRequest.body = buffer.finish();
  },

  computeContentMd5: function(req) {
    var md5 = TableStore.util.crypto.md5(req.httpRequest.body, 'base64');
    req.httpRequest.headers['x-ots-contentmd5'] = md5;
  },

  /**
   * Provides a specialized parser for getBucketLocation -- all other
   * operations are parsed by the super class.
   *
   * @api private
   */
  extractData: function(resp) {
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
  extractError: function(resp) {
    var codes = {
      304: 'NotModified',
      403: 'Forbidden',
      400: 'BadRequest',
      404: 'NotFound'
    };

    var code = resp.httpResponse.statusCode;
    var body = resp.httpResponse.body;
    let requestId = resp.httpResponse.headers['x-ots-request-id'] || resp.httpResponse.headers['x-ots-requestid'] || "";
    if (codes[code] && body.length === 0) {
      resp.error = TableStore.util.error(new Error(), {
        code: codes[resp.httpResponse.statusCode],
        message: requestId,
        headers: resp.httpResponse.headers
      });
    } else {
      var data;
      try {
        data = new TableStore.XML.Parser({}).parse(body.toString());
        resp.error = TableStore.util.error(new Error(), {
          code: data.Code || code,
          message: data.Message || requestId,
          headers: resp.httpResponse.headers
        });
      }
      catch (e) {
        data = body.toString() + " requestId:" + requestId;
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
  makeRequest: function(operation, params, callback) {
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
  addAllRequestListeners: function(request) {
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
  createTable: function(params, callback) {
    return this.makeRequest('createTable', params, callback);
  },

  /**
   * 获取当前实例下已创建的所有表的表名。
   */
  listTable: function(params, callback) {
    return this.makeRequest('listTable', params, callback);
  },

  /**
   * 删除本实例下指定的表。
   */
  deleteTable: function(params, callback) {
    return this.makeRequest('deleteTable', params, callback);
  },

  /**
   * 更新指定表的预留读吞吐量或预留写吞吐量设置。
   */
  updateTable: function(params, callback) {
    return this.makeRequest('updateTable', params, callback);
  },

  /**
   * 查询指定表的结构信息和预留读/写吞吐量设置信息。
   */
  describeTable: function(params, callback) {
    return this.makeRequest('describeTable', params, callback);
  },

  /**********************************  表操作 结束 ******************************************/


  /**********************************  数据操作 开始 ******************************************/

  /**
   * 根据给定的主键读取单行数据。
   */
  getRow: function(params, callback) {
    return this.makeRequest('getRow', params, callback);
  },

  /**
   * 插入数据到指定的行，如果该行不存在，则新增一行；若该行存在，则覆盖原有行。
   */
  putRow: function(params, callback) {
    return this.makeRequest('putRow', params, callback);
  },

  /**
   * 更新指定行的数据。如果该行不存在，则新增一行；若该行存在，则根据请求的内容在这一行中新增、修改或者删除指定列的值。
   */
  updateRow: function(params, callback) {
    return this.makeRequest('updateRow', params, callback);
  },

  /**
   * 删除一行数据。
   */
  deleteRow: function(params, callback) {
    return this.makeRequest('deleteRow', params, callback);
  },

  /**
   * 读取指定主键范围内的数据。
   */
  getRange: function(params, callback) {
    return this.makeRequest('getRange', params, callback);
  },

  /**
   * 批量读取一个或多个表中的若干行数据。
   */
  batchGetRow: function(params, callback) {
    return this.makeRequest('batchGetRow', params, callback);
  },

  /**
   * 批量修改行
   */
  batchWriteRow: function(params, callback) {
    return this.makeRequest('batchWriteRow', params, callback);
  },

  /**
   * 获取表下所有SearchIndex索引名。
   */
  listSearchIndex: function(params, callback) {
      return this.makeRequest('listSearchIndex', params, callback);
  },

  /**
   * 获取SearchIndex索引描述信息。
   */
  describeSearchIndex: function(params, callback) {
    return this.makeRequest('describeSearchIndex', params, callback);
  },

  /**
   * 更新SearchIndex索引信息。
   */
  updateSearchIndex: function(params, callback) {
    return this.makeRequest('updateSearchIndex', params, callback);
  },

  /**
   * SearchIndex创建新索引。
   */
  createSearchIndex: function(params, callback) {
    return this.makeRequest('createSearchIndex', params, callback);
  },

  /**
   * SearchIndex删除索引。
   */
  deleteSearchIndex: function(params, callback) {
    return this.makeRequest('deleteSearchIndex', params, callback);
  },


  /**
   * SearchIndex搜索。
   */
  search: function(params, callback) {
    return this.makeRequest('search', params, callback);
  },

  /**
   * 获取索引分裂信息。
   */
  computeSplits: function(params, callback) {
    return this.makeRequest('computeSplits', params, callback);
  },

  /**
   * 批量导出数据。
   */
  parallelScan: function(params, callback) {
    return this.makeRequest('parallelScan', params, callback);
  },

  /**
   * 创建GlobalIndex索引名。
   */
  createIndex: function(params, callback) {
      return this.makeRequest('createIndex', params, callback);
  },

  /**
   * 删除GlobalIndex索引名。
   */
  dropIndex: function(params, callback) {
      return this.makeRequest('dropIndex', params, callback);
  },

  /**
   * 创建局部事务
   */
  startLocalTransaction: function(params, callback) {
      return this.makeRequest('startLocalTransaction', params, callback)
  },

  /**
   * 提交事务
   */
  commitTransaction: function(params, callback) {
      return this.makeRequest('commitTransaction', params, callback)
  },

  /**
   * 丢弃事务
   */
  abortTransaction: function(params, callback) {
      return this.makeRequest('abortTransaction', params, callback)
  },

  /**
   * sqlQuery
   */
  sqlQuery: function(params, callback) {
    return this.makeRequest('SQLQuery', params, callback);
  },

  /**********************************  数据操作 结束 ******************************************/

  /**********************************  知识库操作 开始 ******************************************/

  /**
   * Builds JSON request body from params.
   * Supports Object, String, and Buffer input types.
   * @api private
   */
  buildJsonContent: function(req) {
    var params = req.params;
    var body;
    if (Buffer.isBuffer(params)) {
      body = params;
    } else if (typeof params === 'string') {
      body = params;
    } else if (typeof params === 'object' && params !== null) {
      body = JSON.stringify(params);
    } else {
      throw new Error('Invalid request params type: ' + typeof params);
    }
    req.httpRequest.body = body;
    req.httpRequest.headers['Content-Type'] = 'application/json';
  },

  /**
   * Extracts JSON response data.
   * @api private
   */
  extractJsonData: function(resp) {
    var body = resp.httpResponse.body;
    var bodyStr = (body instanceof Buffer) ? body.toString('utf-8') : String(body);
    try {
      var data = JSON.parse(bodyStr);
      data.RequestId = resp.httpResponse.headers['x-ots-request-id'] ||
        resp.httpResponse.headers['x-ots-requestid'];
      resp.data = data;
    } catch (e) {
      var requestId = resp.httpResponse.headers['x-ots-request-id'] ||
        resp.httpResponse.headers['x-ots-requestid'] || '';
      resp.error = TableStore.util.error(new Error(), {
        code: 'JsonParseError',
        message: 'Failed to parse JSON response: ' + e.message + ' requestId:' + requestId,
        requestId: requestId
      });
    }
  },

  /**
   * Extracts error from JSON response body.
   * @api private
   */
  extractJsonError: function(resp) {
    var body = resp.httpResponse.body;
    var requestId = resp.httpResponse.headers['x-ots-request-id'] ||
      resp.httpResponse.headers['x-ots-requestid'] || '';
    try {
      var bodyStr = (body instanceof Buffer) ? body.toString('utf-8') : String(body);
      var data = JSON.parse(bodyStr);
      resp.error = TableStore.util.error(new Error(), {
        code: data.code || data.Code || resp.httpResponse.statusCode,
        message: data.message || data.Message || requestId,
        requestId: requestId
      });
    } catch (e) {
      resp.error = TableStore.util.error(new Error(), {
        code: resp.httpResponse.statusCode,
        message: String(body) + ' requestId:' + requestId,
        requestId: requestId
      });
    }
  },

  /**
   * Sets up JSON-specific request listeners, replacing the default
   * Protobuf-based buildContent, extractData, and extractError listeners.
   * @api private
   */
  setupJsonRequestListeners: function(request) {
    request.addListener('build', this.populateHeader);
    request.addListener('build', this.populateURI);
    request.addListener('build', this.buildJsonContent);
    request.addListener('build', this.computeContentMd5);
    if (this.config.extraHeaders) {
      var extraHeaders = this.config.extraHeaders;
      request.addListener('build', function(req) {
        for (var key in extraHeaders) {
          if (extraHeaders.hasOwnProperty(key)) {
            req.httpRequest.headers[key] = extraHeaders[key];
          }
        }
      });
    }
    request.addListener('extractError', this.extractJsonError);
    request.addListener('extractData', this.extractJsonData);
  },

  /**
   * Makes a JSON-based API request. Used for Knowledge Base APIs that
   * use JSON request/response format instead of Protobuf.
   *
   * @param apiName [String] the API name (e.g. 'CreateKnowledgeBase')
   * @param params [Object|String|Buffer] the request parameters
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned.
   *   @param err [Error] the error object returned from the request.
   *   @param data [Object] the JSON response data.
   */
  makeJsonRequest: function(apiName, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = new TableStore.Request(this.config, apiName, params);

    var list = [TableStore.events, TableStore.EventListeners.Core];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    if (this.config.logger) {
      request.addListeners(TableStore.EventListeners.Logger);
    }

    this.setupJsonRequestListeners(request);

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
   * 创建知识库。
   */
  createKnowledgeBase: function(params, callback) {
    return this.makeJsonRequest('CreateKnowledgeBase', params, callback);
  },

  /**
   * 删除知识库。
   */
  deleteKnowledgeBase: function(params, callback) {
    return this.makeJsonRequest('DeleteKnowledgeBase', params, callback);
  },

  /**
   * 获取知识库详情。
   */
  describeKnowledgeBase: function(params, callback) {
    return this.makeJsonRequest('DescribeKnowledgeBase', params, callback);
  },

  /**
   * 列出知识库。
   */
  listKnowledgeBase: function(params, callback) {
    return this.makeJsonRequest('ListKnowledgeBase', params, callback);
  },

  /**
   * 添加文档到知识库。
   */
  addDocuments: function(params, callback) {
    return this.makeJsonRequest('AddDocuments', params, callback);
  },

  /**
   * 获取单个文档。
   */
  getDocument: function(params, callback) {
    return this.makeJsonRequest('GetDocument', params, callback);
  },

  /**
   * 列出文档。
   */
  listDocuments: function(params, callback) {
    return this.makeJsonRequest('ListDocuments', params, callback);
  },

  /**
   * 删除文档。
   */
  deleteDocuments: function(params, callback) {
    return this.makeJsonRequest('DeleteDocuments', params, callback);
  },

  /**
   * 检索知识库。
   */
  retrieve: function(params, callback) {
    return this.makeJsonRequest('Retrieve', params, callback);
  },

  /**********************************  知识库操作 结束 ******************************************/

  /**********************************  Memory Store 操作 开始 ******************************************/

  /**
   * 创建 Memory Store。
   */
  createMemoryStore: function(params, callback) {
    return this.makeJsonRequest('CreateMemoryStore', params, callback);
  },

  /**
   * 获取 Memory Store 详情。
   */
  getMemoryStore: function(params, callback) {
    return this.makeJsonRequest('GetMemoryStore', params, callback);
  },

  /**
   * 更新 Memory Store。
   */
  updateMemoryStore: function(params, callback) {
    return this.makeJsonRequest('UpdateMemoryStore', params, callback);
  },

  /**
   * 删除 Memory Store。
   */
  deleteMemoryStore: function(params, callback) {
    return this.makeJsonRequest('DeleteMemoryStore', params, callback);
  },

  /**
   * 列出 Memory Store。
   */
  listMemoryStores: function(params, callback) {
    return this.makeJsonRequest('ListMemoryStores', params, callback);
  },

  /**
   * 添加 Memory。
   */
  addMemories: function(params, callback) {
    return this.makeJsonRequest('AddMemories', params, callback);
  },

  /**
   * 搜索 Memory。
   */
  searchMemories: function(params, callback) {
    return this.makeJsonRequest('SearchMemories', params, callback);
  },

  /**
   * 列出 Memory。
   */
  listMemories: function(params, callback) {
    return this.makeJsonRequest('ListMemories', params, callback);
  },

  /**
   * 获取单条 Memory。
   */
  getMemory: function(params, callback) {
    return this.makeJsonRequest('GetMemory', params, callback);
  },

  /**
   * 更新单条 Memory。
   */
  updateMemory: function(params, callback) {
    return this.makeJsonRequest('UpdateMemory', params, callback);
  },

  /**
   * 删除单条 Memory。
   */
  deleteMemory: function(params, callback) {
    return this.makeJsonRequest('DeleteMemory', params, callback);
  },

  /**
   * 列出 Memory Store 消息。
   */
  listMemoryStoreMessages: function(params, callback) {
    return this.makeJsonRequest('ListMemoryStoreMessages', params, callback);
  },

  /**
   * 列出 Memory Store 请求。
   */
  listMemoryStoreRequests: function(params, callback) {
    return this.makeJsonRequest('ListMemoryStoreRequests', params, callback);
  },

  /**********************************  Memory Store 操作 结束 ******************************************/
});
