var TableStore = require('../../index.js');
var Long = TableStore.Long;
var assert = require("assert");

describe('plainBuffer', function () {
  describe('primaryKey_serialize_deserialize', function () {
    it('deserialized result should equal primaryKey', function () {
      var primaryKey = [{ 'gid': Long.fromNumber(20004) }];
      var buffer = TableStore.PlainBufferBuilder.serializePrimaryKey(primaryKey);

      var dataBuffer = {
        buffer: buffer,
        offset: 0,
        limit: buffer.length
      };

      var inputStream = new TableStore.PlainBufferInputStream(dataBuffer);
      var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
      var decodedPK = codedInputStream.readRow();

      assert.equal(decodedPK.primaryKey[0].name, 'gid');
      assert.equal(decodedPK.primaryKey[0].value.toNumber(), 20004);
    });
  });

  describe('attributeColumn_serialize_deserialize', function () {
    it('deserialized result should equal attributeColumns', function () {
      var primaryKey = [{ 'gid': Long.fromNumber(20004) }];
      var attributeColumns = [{ 'attrCol1': '表格存储' }, { 'attrCol2': 'NodeJS SDK' }];
      var buffer = TableStore.PlainBufferBuilder.serializeForPutRow(primaryKey, attributeColumns);

      var dataBuffer = {
        buffer: buffer,
        offset: 0,
        limit: buffer.length
      };

      var inputStream = new TableStore.PlainBufferInputStream(dataBuffer);
      var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
      var decodedAttrs = codedInputStream.readRow();

      assert.equal(decodedAttrs.attributes[0].columnName, 'attrCol1');
      assert.equal(decodedAttrs.attributes[0].columnValue, '表格存储');

      assert.equal(decodedAttrs.attributes[1].columnName, 'attrCol2');
      assert.equal(decodedAttrs.attributes[1].columnValue, 'NodeJS SDK');
    });
  });
});