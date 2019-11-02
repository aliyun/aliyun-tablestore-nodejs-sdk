var TableStore = require('../index.js');
var client = require('../samples/client');
var Long = TableStore.Long;
var assert = require("assert");

describe('#GlobalIndex Test:', function () {

    it('a)create table with globalIndex -> success', function (done) {
        var createTableParams = {
            tableMeta: {
                tableName: 'sdkGlobalTest',
                primaryKey: [
                    {
                        name: 'pk1',
                        type: TableStore.PrimaryKeyType.INTEGER
                    },
                    {
                        name: 'pk2',
                        type: TableStore.PrimaryKeyType.INTEGER
                    }
                ],
                definedColumn: [
                    {
                        "name": "col1",
                        "type": TableStore.DefinedColumnType.DCT_INTEGER
                    },
                    {
                        "name": "col2",
                        "type": TableStore.DefinedColumnType.DCT_INTEGER
                    }
                ],
            },
            reservedThroughput: {
                capacityUnit: {
                    read: 0,
                    write: 0
                }
            },
            tableOptions: {
                timeToLive: -1,// 数据的过期时间, 单位秒, -1代表永不过期. 假如设置过期时间为一年, 即为 365 * 24 * 3600.
                maxVersions: 1// 保存的最大版本数, 设置为1即代表每列上最多保存一个版本(保存最新的版本).
            },
            streamSpecification: {
                enableStream: false, //globalIndex不支持开启Stream
            },
            indexMetas: [
                {
                    name: "sdkIndex1",
                    primaryKey: ["pk2"],
                    definedColumn: ["col1", "col2"]
                }
            ]
        };

        client.createTable(createTableParams, function (createTableErr, createTableData) {
            assert.equal(createTableErr, undefined);
            done();
        });
    });

    it('b)after create table -> table and index exist 1', function (done) {
        var describeTableParams = {
            tableName: 'sdkGlobalTest'
        };
        client.describeTable(describeTableParams, function (descriveTableErr, descriveTableData) {
            assert.equal(descriveTableData.indexMetas.length, 1);
            done();
        });
    });

    it('c)create globalIndex -> success', function (done) {
        var createGlobalIndexParams = {
            mainTableName: "sdkGlobalTest",
            indexMeta: {
                name: "sdkIndex2",
                primaryKey: ["col1"],
                definedColumn: ["col2"]
            }
        };
        client.createIndex(createGlobalIndexParams, function (createIndexErr, createIndexData) {
            assert.equal(createIndexErr, undefined);
            done();
        })
    });

    it('d)after create index -> index exist 2', function (done) {
        var describeTableParams = {
            tableName: 'sdkGlobalTest'
        };
        client.describeTable(describeTableParams, function (descriveTableErr, descriveTableData) {
            assert.equal(descriveTableData.indexMetas.length, 2);
            done();
        });
    });

    it('e)delete 2 globalIndex -> success', function (done) {
        var dropGlobalIndexParams = {
            mainTableName: "sdkGlobalTest",
            indexName: "sdkIndex1"
        };

        client.dropIndex(dropGlobalIndexParams, function (dropIndexErr, dropIndexData) {
            assert.equal(dropIndexErr, undefined);
            var dropGlobalIndexParams = {
                mainTableName: "sdkGlobalTest",
                indexName: "sdkIndex2"
            };

            client.dropIndex(dropGlobalIndexParams, function (dropIndexErr, dropIndexData) {
                assert.equal(dropIndexErr, undefined);
                done();
            });
        });
    });

    it('f)after delete globalIndex -> not exist', function (done) {
        var describeTableParams = {
            tableName: 'sdkGlobalTest'
        };
        client.describeTable(describeTableParams, function (describeTableErr, describeTableData) {
            assert.equal(describeTableData.indexMetas.length, 0);
            done();
        })
    });


    it('g)delete table -> success', function (done) {
        var deleteTableParams = {
            tableName: 'sdkGlobalTest'
        };
        client.deleteTable(deleteTableParams, function (deleteTableErr, deleteTableData) {
            assert.equal(deleteTableErr, undefined);
            done();
        });
    });

    it('h)afater delete table -> not exist', function (done) {
        var describeTableParams = {
            tableName: 'sdkGlobalTest'
        };
        client.listTable(describeTableParams, function (describeTableErr, listTableData) {
            assert.equal(listTableData.indexMetas.indexOf(describeTableParams.tableName), -1);
            done();
        })
    })
});
