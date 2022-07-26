var TableStore = require('../index.js');
var client = require('../samples/client');
var Long = TableStore.Long;
var assert = require("assert");

describe('data_opration', function () {
    it('getrow data should equal putrow data', function (done) {
        this.timeout(30000);
        var tableName = 'dataTestTable';
        var binaryData = new Buffer('中华人民共和国');

        var primaryKeyData = [{ 'stringPK': '表格存储' }, { 'integerPK': Long.fromNumber(10) }, { 'binaryPK': binaryData }];

        const getRange = function () {
            const params = {
                tableName: tableName,
                direction: TableStore.Direction.FORWARD,
                maxVersions: 10,
                inclusiveStartPrimaryKey: [{ "stringPK": TableStore.INF_MIN }, { "integerPK": TableStore.INF_MIN }, { "binaryPK": TableStore.INF_MIN }],
                exclusiveEndPrimaryKey: [{ "stringPK": TableStore.INF_MAX }, { "integerPK": TableStore.INF_MAX }, { "binaryPK": TableStore.INF_MAX }],
                limit: 2
            };
            client.getRange(params, function (err, data) {
                if (err) {
                    console.log('error:', err);
                    done();
                }
                console.log(JSON.stringify(data, null, 4));
                done();
            });
        };

        var getRow = function () {
            var getRowParams = {
                tableName: tableName,
                primaryKey: primaryKeyData
            };
            client.getRow(getRowParams, function (err, data) {
                assert.equal(err, undefined);
                console.log(data);
                getRange();
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
                ]
            },
            reservedThroughput: {
                capacityUnit: {
                    read: 0,
                    write: 0
                }
            },
            tableOptions: {
                maxVersions: 1,
                timeToLive: -1,
            },
        };
        client.deleteTable({
            tableName: tableName,
        }, function () {
            client.createTable(createTableParams, function (err, data) {
                assert.equal(err, undefined);
                setTimeout(() => {
                    putRow();
                }, 2000);
            });
        })
    })
})