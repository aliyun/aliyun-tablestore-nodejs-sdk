var TableStore = require('../index');
var assert = require('assert');

describe('knowledge_base', function () {

  describe('buildJsonContent', function () {
    it('should serialize Object params to JSON string', function () {
      var req = {
        params: { knowledgeBaseName: 'test-kb', description: 'A test knowledge base' },
        httpRequest: { body: '', headers: {} }
      };
      TableStore.Client.prototype.buildJsonContent(req);
      assert.strictEqual(req.httpRequest.body, '{"knowledgeBaseName":"test-kb","description":"A test knowledge base"}');
      assert.strictEqual(req.httpRequest.headers['Content-Type'], 'application/json');
    });

    it('should pass through String params as-is', function () {
      var jsonStr = '{"knowledgeBaseName":"test-kb"}';
      var req = {
        params: jsonStr,
        httpRequest: { body: '', headers: {} }
      };
      TableStore.Client.prototype.buildJsonContent(req);
      assert.strictEqual(req.httpRequest.body, jsonStr);
      assert.strictEqual(req.httpRequest.headers['Content-Type'], 'application/json');
    });

    it('should pass through Buffer params as-is', function () {
      var buf = Buffer.from('{"knowledgeBaseName":"test-kb"}');
      var req = {
        params: buf,
        httpRequest: { body: '', headers: {} }
      };
      TableStore.Client.prototype.buildJsonContent(req);
      assert.strictEqual(req.httpRequest.body, buf);
      assert.strictEqual(req.httpRequest.headers['Content-Type'], 'application/json');
    });

    it('should handle empty Object params', function () {
      var req = {
        params: {},
        httpRequest: { body: '', headers: {} }
      };
      TableStore.Client.prototype.buildJsonContent(req);
      assert.strictEqual(req.httpRequest.body, '{}');
      assert.strictEqual(req.httpRequest.headers['Content-Type'], 'application/json');
    });

    it('should handle nested Object params', function () {
      var req = {
        params: {
          knowledgeBaseName: 'test-kb',
          schema: {
            fieldSchemas: [
              { fieldName: 'title', fieldType: 'KEYWORD' },
              { fieldName: 'content', fieldType: 'TEXT' }
            ]
          }
        },
        httpRequest: { body: '', headers: {} }
      };
      TableStore.Client.prototype.buildJsonContent(req);
      var parsed = JSON.parse(req.httpRequest.body);
      assert.strictEqual(parsed.knowledgeBaseName, 'test-kb');
      assert.strictEqual(parsed.schema.fieldSchemas.length, 2);
      assert.strictEqual(parsed.schema.fieldSchemas[0].fieldName, 'title');
    });

    it('should throw for invalid params type (number)', function () {
      var req = {
        params: 12345,
        httpRequest: { body: '', headers: {} }
      };
      assert.throws(function () {
        TableStore.Client.prototype.buildJsonContent(req);
      }, /Invalid request params type/);
    });

    it('should throw for null params', function () {
      var req = {
        params: null,
        httpRequest: { body: '', headers: {} }
      };
      assert.throws(function () {
        TableStore.Client.prototype.buildJsonContent(req);
      }, /Invalid request params type/);
    });
  });

  describe('extractJsonData', function () {
    it('should parse JSON Buffer response body', function () {
      var resp = {
        httpResponse: {
          body: Buffer.from('{"result":"success","count":10}'),
          headers: { 'x-ots-request-id': 'req-001' }
        },
        data: null,
        error: null
      };
      TableStore.Client.prototype.extractJsonData(resp);
      assert.strictEqual(resp.data.result, 'success');
      assert.strictEqual(resp.data.count, 10);
      assert.strictEqual(resp.data.RequestId, 'req-001');
    });

    it('should parse JSON string response body', function () {
      var resp = {
        httpResponse: {
          body: '{"items":[1,2,3]}',
          headers: { 'x-ots-requestid': 'req-002' }
        },
        data: null,
        error: null
      };
      TableStore.Client.prototype.extractJsonData(resp);
      assert.deepStrictEqual(resp.data.items, [1, 2, 3]);
      assert.strictEqual(resp.data.RequestId, 'req-002');
    });

    it('should set error for invalid JSON', function () {
      var resp = {
        httpResponse: {
          body: Buffer.from('not-valid-json'),
          headers: { 'x-ots-request-id': 'req-003' }
        },
        data: null,
        error: null
      };
      TableStore.Client.prototype.extractJsonData(resp);
      assert.ok(resp.error);
      assert.strictEqual(resp.error.code, 'JsonParseError');
      assert.ok(resp.error.message.indexOf('req-003') !== -1);
    });

    it('should handle empty JSON object', function () {
      var resp = {
        httpResponse: {
          body: Buffer.from('{}'),
          headers: { 'x-ots-request-id': 'req-004' }
        },
        data: null,
        error: null
      };
      TableStore.Client.prototype.extractJsonData(resp);
      assert.strictEqual(resp.data.RequestId, 'req-004');
    });
  });

  describe('extractJsonError', function () {
    it('should extract error code and message from JSON response', function () {
      var resp = {
        httpResponse: {
          statusCode: 400,
          body: Buffer.from('{"code":"OTSParameterInvalid","message":"Invalid parameter"}'),
          headers: { 'x-ots-request-id': 'req-err-001' }
        },
        error: null
      };
      TableStore.Client.prototype.extractJsonError(resp);
      assert.strictEqual(resp.error.code, 'OTSParameterInvalid');
      assert.strictEqual(resp.error.message, 'Invalid parameter');
      assert.strictEqual(resp.error.requestId, 'req-err-001');
    });

    it('should handle uppercase Code/Message fields', function () {
      var resp = {
        httpResponse: {
          statusCode: 403,
          body: Buffer.from('{"Code":"OTSAuthFailed","Message":"Authentication failed"}'),
          headers: { 'x-ots-request-id': 'req-err-002' }
        },
        error: null
      };
      TableStore.Client.prototype.extractJsonError(resp);
      assert.strictEqual(resp.error.code, 'OTSAuthFailed');
      assert.strictEqual(resp.error.message, 'Authentication failed');
    });

    it('should fallback to statusCode when no code in body', function () {
      var resp = {
        httpResponse: {
          statusCode: 500,
          body: Buffer.from('{"error":"something went wrong"}'),
          headers: { 'x-ots-request-id': 'req-err-003' }
        },
        error: null
      };
      TableStore.Client.prototype.extractJsonError(resp);
      assert.strictEqual(resp.error.code, 500);
    });

    it('should handle non-JSON error body', function () {
      var resp = {
        httpResponse: {
          statusCode: 502,
          body: Buffer.from('<html>Bad Gateway</html>'),
          headers: { 'x-ots-request-id': 'req-err-004' }
        },
        error: null
      };
      TableStore.Client.prototype.extractJsonError(resp);
      assert.strictEqual(resp.error.code, 502);
      assert.ok(resp.error.message.indexOf('Bad Gateway') !== -1);
      assert.ok(resp.error.message.indexOf('req-err-004') !== -1);
    });

    it('should handle missing request id header', function () {
      var resp = {
        httpResponse: {
          statusCode: 404,
          body: Buffer.from('{"code":"NotFound","message":"Resource not found"}'),
          headers: {}
        },
        error: null
      };
      TableStore.Client.prototype.extractJsonError(resp);
      assert.strictEqual(resp.error.code, 'NotFound');
      assert.strictEqual(resp.error.message, 'Resource not found');
      assert.strictEqual(resp.error.requestId, '');
    });
  });

  describe('retry_util', function () {
    it('should mark read KB APIs as repeatable', function () {
      assert.ok(TableStore.RetryUtil.isRepeatableApi('DescribeKnowledgeBase'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListKnowledgeBase'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('GetDocument'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListDocuments'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('Retrieve'));
    });

    it('should not mark write KB APIs as repeatable', function () {
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('CreateKnowledgeBase'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('DeleteKnowledgeBase'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('AddDocuments'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('DeleteDocuments'));
    });
  });

  describe('config', function () {
    it('should support extraHeaders option', function () {
      var config = new TableStore.Config({
        endpoint: 'https://test.cn-hangzhou.ots.aliyuncs.com',
        instancename: 'test',
        extraHeaders: { 'x-custom-header': 'custom-value' }
      });
      assert.ok(config.extraHeaders);
      assert.strictEqual(config.extraHeaders['x-custom-header'], 'custom-value');
    });

    it('should default extraHeaders to null', function () {
      var config = new TableStore.Config({
        endpoint: 'https://test.cn-hangzhou.ots.aliyuncs.com',
        instancename: 'test'
      });
      assert.strictEqual(config.extraHeaders, null);
    });
  });

  describe('client methods', function () {
    it('should have all 9 knowledge base API methods', function () {
      var apiMethods = [
        'createKnowledgeBase', 'deleteKnowledgeBase', 'describeKnowledgeBase', 'listKnowledgeBase',
        'addDocuments', 'getDocument', 'listDocuments', 'deleteDocuments', 'retrieve'
      ];
      apiMethods.forEach(function (method) {
        assert.strictEqual(typeof TableStore.Client.prototype[method], 'function',
          'Missing method: ' + method);
      });
    });

    it('should have makeJsonRequest method', function () {
      assert.strictEqual(typeof TableStore.Client.prototype.makeJsonRequest, 'function');
    });

    it('should have setupJsonRequestListeners method', function () {
      assert.strictEqual(typeof TableStore.Client.prototype.setupJsonRequestListeners, 'function');
    });

    it('should have all 13 memory store API methods', function () {
      var memoryMethods = [
        'createMemoryStore', 'getMemoryStore', 'updateMemoryStore', 'deleteMemoryStore', 'listMemoryStores',
        'addMemories', 'searchMemories', 'listMemories',
        'getMemory', 'updateMemory', 'deleteMemory',
        'listMemoryStoreMessages', 'listMemoryStoreRequests'
      ];
      memoryMethods.forEach(function (method) {
        assert.strictEqual(typeof TableStore.Client.prototype[method], 'function',
          'Missing method: ' + method);
      });
    });
  });

  describe('memory store retry_util', function () {
    it('should mark read Memory Store APIs as repeatable', function () {
      assert.ok(TableStore.RetryUtil.isRepeatableApi('GetMemoryStore'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListMemoryStores'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('SearchMemories'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListMemories'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('GetMemory'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListMemoryStoreMessages'));
      assert.ok(TableStore.RetryUtil.isRepeatableApi('ListMemoryStoreRequests'));
    });

    it('should not mark write Memory Store APIs as repeatable', function () {
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('CreateMemoryStore'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('UpdateMemoryStore'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('DeleteMemoryStore'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('AddMemories'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('UpdateMemory'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('DeleteMemory'));
    });

    it('should not mark removed APIs as repeatable', function () {
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('GetMemoryContext'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('ListMemoryEvents'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('ListMemoryStoreEvents'));
      assert.ok(!TableStore.RetryUtil.isRepeatableApi('GetMemoryStoreEvent'));
    });
  });
});
