/*
 * 创建索引、同步数据有时间差
 * mocha test/searchIndexCreateAndInsert.test.js
 * 创建索引秒级别后执行查询
 * mocha --delay test/searchIndexSearchAndDelete.test.js
 * */
var TableStore = require('../index.js');
var client = require('../samples/client');
var Long = TableStore.Long;
var assert = require("assert");

var tableName = 'testSearchTable';
var indexName = 'testSearchTableIndex';

describe("#Create Table", function() {
    it('Response should success', function (done) {
        var createTableParams = {
            tableMeta: {
                tableName: tableName,
                primaryKey: [
                    {
                        name: 'pic_id',
                        type: TableStore.PrimaryKeyType.STRING
                    },
                    {
                        name: 'auto_inc',
                        type: TableStore.PrimaryKeyType.INTEGER,
                        option: "AUTO_INCREMENT"
                    }
                ]
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
            }
        };

        client.createTable(createTableParams, function (createTableErr, createTableData) {
            assert.equal(createTableErr, undefined);
            done();
        });
    });

    it('Create SearchIndex -> success', function (done) {
        this.timeout(10000);

        var params = {
            tableName: tableName,
            indexName: indexName,
            schema: {
                fieldSchemas: [
                    {
                        fieldName: "pic_id",
                        fieldType: TableStore.FieldType.KEYWORD,
                        index: true,
                        enableSortAndAgg: true,
                        store: true,
                        isAnArray: false
                    },
                    {
                        fieldName: "pic_des",
                        fieldType: TableStore.FieldType.TEXT,
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: false
                    },
                    {
                        fieldName: "pic_nested_tag",
                        fieldType: TableStore.FieldType.NESTED,
                        index: false,
                        enableSortAndAgg: false,
                        store: false,
                        fieldSchemas: [
                            {
                                fieldName: "tag_id",
                                fieldType: TableStore.FieldType.KEYWORD,
                                index: false,
                                enableSortAndAgg: true,
                                store: true,
                            },
                            {
                                fieldName: "tag_name",
                                fieldType: TableStore.FieldType.KEYWORD,
                                index: true,
                                enableSortAndAgg: true,
                                store: true,
                            }
                        ],
                        isAnArray: false
                    },
                    {
                        fieldName: "pic_array_tag",
                        fieldType: TableStore.FieldType.KEYWORD,
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: true
                    },
                    {
                        fieldName: "pos",
                        fieldType: TableStore.FieldType.GEO_POINT,
                        index: true,
                        enableSortAndAgg: true,
                        store: true,
                        isAnArray: false
                    },
                    {
                        fieldName: "score",
                        fieldType: TableStore.FieldType.LONG,
                        index: true,
                        enableSortAndAgg: true,
                        store: true,
                        isAnArray: false
                    }
                ]
            }
        };

        client.createSearchIndex(params, function(err, data) {
            assert.equal(err, undefined);
            done();
        });
    });


    it('Insert data should success', function (done) {
        var putRowParams = {
            tables: [
                {
                    tableName: tableName,
                    rows: [
                        {
                            type: 'PUT',
                            primaryKey: [
                                { 'pic_id': "pic_id_1" },
                                { 'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                { 'pic_des': '这是表格存储测试使用的参数1' },
                                { 'pic_nested_tag': '[{"tag_id":"001","tag_name":"车"}]'},
                                { 'pic_array_tag': '["风景","轿车"]' },
                                { 'pos': "0.0001,0.0001" },
                                { 'score': Long.fromNumber(3) }
                            ]
                        },
                        {
                            type: 'PUT',
                            primaryKey: [
                                { 'pic_id': "pic_id_11" },
                                { 'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                { 'pic_des': '这是表格存储测试使用的参数2' },
                                { 'pic_nested_tag': '[{"tag_id":"001","tag_name":"车"}]'},
                                { 'pic_array_tag': '["风景","吉普"]' },
                                { 'pos': "1.0001,1.0001" },
                                { 'score': Long.fromNumber(2) }
                            ]
                        },
                        {
                            type: 'PUT',
                            primaryKey: [
                                { 'pic_id': "pic_id_2" },
                                { 'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                { 'pic_des': '这是表格存储测试使用的参数3' },
                                { 'pic_nested_tag': '[{"tag_id":"003","tag_name":"画"}]'},
                                { 'pic_array_tag': '["风景","人物","画"]' },
                                { 'pos': "0.0003,0.0003" },
                                { 'score': Long.fromNumber(1) }
                            ]
                        }

                    ]
                }
            ]
        };

        client.batchWriteRow(putRowParams, function (putRowErr, putRowData) {
            assert.equal(putRowErr, undefined);
            done();
        })
    });
});

describe('#Prove SearchIndex Exist:', function () {
    it('ListIndex hould exist', function (done) {
        var params = {
            tableName: tableName
        };
        client.listSearchIndex(params, function (err, data) {
            assert.equal(data.indices.length, 1);
            assert.equal(data.indices[0].indexName, indexName);
            done();
        })
    });

    it('DescribeIndex success', function (done) {
        var params = {
            tableName: tableName,
            indexName: indexName
        };
        client.describeSearchIndex(params, function (err, data) {
            assert.equal(err, undefined);
            assert.equal(data.schema.fieldSchemas.length, 6);
            done();
        })
    })
});
