var TableStore = require('../index.js');
var client = require('../samples/client');
var Long = TableStore.Long;
var assert = require("assert");

describe('data_opration', function () {
    it('getrow data should equal putrow data', function () {
        var tableName = 'dataTestTable';
        var binaryData = new Buffer('中华人民共和国');

        var primaryKeyData = [{ 'stringPK': '表格存储' }, { 'integerPK': Long.fromNumber(10) }, { 'binaryPK': binaryData }];

        var getRow = function () {
            var getRowParams = {
                tableName: tableName,
                primaryKey: primaryKeyData
            };
            client.getRow(getRowParams, function (err, data) {
                assert.equal(err, undefined);

            });
        };

        var putRow = function () {
            var putRowParams = {
                tableName: tableName,
                condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                primaryKey: primaryKeyData,
                attributeColumns: [
                    { 'col1': '表格存储' },
                    { 'col2': '2' },
                    { 'col3': 3.1 },
                    { 'col4': -0.32 },
                    { 'col5': Long.fromNumber(123456789) }
                ]
            };

            client.putRow(putRowParams, function (err, data) {
                assert.equal(err, undefined);
                getRow();
            });
        };

        var createTableParams = {
            tableMeta: {
                tableName: tableName,
                primaryKey: [
                    {
                        name: 'stringPK',
                        type: 'STRING'
                    },
                    {
                        name: 'integerPK',
                        type: 'INTEGER'
                    },
                    {
                        name: 'binaryPK',
                        type: 'BINARY'
                    },
                    {
                        name: 'autoIncPK',
                        type: 'INTEGER',
                        option: 'AUTO_INCREMENT'
                    },
                ]
            },
            reservedThroughput: {
                capacityUnit: {
                    read: 0,
                    write: 0
                }
            }
        };

        client.createTable(createTableParams, function (err, data) {
            assert.equal(err, undefined);
            putRow();
        });

    })
})