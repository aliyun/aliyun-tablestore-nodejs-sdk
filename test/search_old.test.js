const TableStore = require('../index.js');
const client = require('../samples/client');
const Long = TableStore.Long;
const assert = require("assert");
const otsTestUtils = require("./ots_test_utils");

const tableName = 'testSearchTable';
const indexName = 'testSearchTableIndex';

describe("#Create Table And Index", function() {
    it('Create table', function (done) {
        const createTableParams = {
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
            done();
        });
    });

    it('Create SearchIndex -> success', function (done) {
        this.timeout(10000);

        const params = {
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
                    },
                    {
                        fieldName: "date",
                        fieldType: TableStore.FieldType.DATE,
                        index: true,
                        enableSortAndAgg: true,
                        store: true,
                        isAnArray: false,
                        dateFormats: ["yyyy-MM-dd'T'HH:mm:ss.SSSSSS"],
                    },
                    {
                        fieldName: "analyzer_single_word",
                        fieldType: TableStore.FieldType.TEXT,
                        analyzer: "single_word",
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: false,
                        analyzerParameter: {
                            caseSensitive: true,
                            delimitWord: false,
                        }
                    },
                    {
                        fieldName: "analyzer_split",
                        fieldType: TableStore.FieldType.TEXT,
                        analyzer: "split",
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: false,
                        analyzerParameter: {
                            delimiter: ",",
                        }
                    },
                    {
                        fieldName: "analyzer_fuzzy",
                        fieldType: TableStore.FieldType.TEXT,
                        analyzer: "fuzzy",
                        index: true,
                        enableSortAndAgg: false,
                        store: true,
                        isAnArray: false,
                        analyzerParameter: {
                            minChars: 1,
                            maxChars: 5,
                        }
                    },
                ]
            }
        };

        client.createSearchIndex(params, function(err, data) {
            done();
        });
    });


    it('Insert data should success', function (done) {
        const putRowParams = {
            tables: [
                {
                    tableName: tableName,
                    rows: [
                        {
                            type: 'PUT',
                            primaryKey: [
                                {'pic_id': "pic_id_1"},
                                {'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                {'pic_des': '这是表格存储测试使用的参数1'},
                                {'pic_nested_tag': '[{"tag_id":"001","tag_name":"车"}]'},
                                {'pic_array_tag': '["风景","轿车"]'},
                                {'pos': "0.0001,0.0001"},
                                {'score': Long.fromNumber(3)}
                            ]
                        },
                        {
                            type: 'PUT',
                            primaryKey: [
                                {'pic_id': "pic_id_11"},
                                {'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                {'pic_des': '这是表格存储测试使用的参数2'},
                                {'pic_nested_tag': '[{"tag_id":"001","tag_name":"车"}]'},
                                {'pic_array_tag': '["风景","吉普"]'},
                                {'pos': "1.0001,1.0001"},
                                {'score': Long.fromNumber(2)}
                            ]
                        },
                        {
                            type: 'PUT',
                            primaryKey: [
                                {'pic_id': "pic_id_2"},
                                {'auto_inc': TableStore.PK_AUTO_INCR}
                            ],
                            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                            attributeColumns: [
                                {'pic_des': '这是表格存储测试使用的参数3'},
                                {'pic_nested_tag': '[{"tag_id":"003","tag_name":"画"}]'},
                                {'pic_array_tag': '["风景","人物","画"]'},
                                {'pos': "0.0003,0.0003"},
                                {'score': Long.fromNumber(1)}
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
        const params = {
            tableName: tableName
        };
        client.listSearchIndex(params, function (err, data) {
            assert.equal(data.indices.length, 1);
            assert.equal(data.indices[0].indexName, indexName);
            done();
        })
    });

    it('DescribeIndex success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName
        };
        client.describeSearchIndex(params, function (err, data) {
            assert.equal(err, undefined);
            assert.equal(data.schema.fieldSchemas.length, 10);
            assert.equal(TableStore.IndexStatus.RUNNING, data.indexStatus.status)
            done();
        })
    })
});

describe('wait data sync', function () {
    this.timeout(200000);
    it('wait data', async function () {
        await otsTestUtils.waitSearchSync(tableName, indexName, 3, 160);
        return otsTestUtils.emptyPromise;
    });
});

const queryMap = {
    MATCH_QUERY: {
        queryType: TableStore.QueryType.MATCH_QUERY,
        query: {
            fieldName: "pic_des",
            text: "参数"
        }
    },
    MATCH_PHRASE_QUERY: {
        queryType: TableStore.QueryType.MATCH_PHRASE_QUERY,
        query: {
            fieldName: "pic_des",
            text: "数3"
        }
    },
    TERM_QUERY: {
        queryType: TableStore.QueryType.TERM_QUERY,
        query: {
            fieldName: "pic_id",
            term: "pic_id_1"
        }
    },
    RANGE_QUERY: {//4
        queryType: TableStore.QueryType.RANGE_QUERY,
        query: {
            fieldName: "pic_id",
            rangeFrom: "pic_id_1",
            includeLower: true,
            rangeTo: "pic_id_2",
            includeUpper: true,
        }
    },
    PREFIX_QUERY: {//5
        queryType: TableStore.QueryType.PREFIX_QUERY,
        query: {
            fieldName: "pic_id",
            prefix: "pic_id_1"
        }
    },
    BOOL_QUERY: {//6
        queryType: TableStore.QueryType.BOOL_QUERY,
        query: {
            mustQueries: [
                {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: "pic_id",
                        prefix: "pic_id_"
                    }
                },
                {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: "pic_id",
                        rangeFrom: "pic_id_1",
                        includeLower: true,
                        rangeTo: "pic_id_2",
                        includeUpper: true,
                    }
                }
            ],
            mustNotQueries: [
                {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: "pic_id",
                        prefix: "pic_id_2"
                    }
                },
                {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: "pic_id",
                        rangeFrom: "pic_id_2",
                        includeLower: true,
                        // rangeTo: "pic_id_20",
                        // includeUpper: true,
                    }
                },
            ],
            filterQueries: [
                {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: "pic_id",
                        prefix: "pic_id_"
                    }
                },
                {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: "pic_id",
                        rangeFrom: "pic_id_1",
                        includeLower: true,
                        rangeTo: "pic_id_2",
                        includeUpper: true,
                    }
                }
            ],
            shouldQueries: [
                {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: "pic_id",
                        prefix: "pic_id_1"
                    }
                },
                {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: "pic_id",
                        rangeFrom: "pic_id_1",
                        includeLower: true,
                        rangeTo: "pic_id_2",
                        includeUpper: true,
                    }
                }
            ],
            minimumShouldMatch: 1
        }

    },
    CONST_SCORE_QUERY: {//7
        queryType: TableStore.QueryType.CONST_SCORE_QUERY,
        query: {
            filter: {
                queryType: TableStore.QueryType.PREFIX_QUERY,
                query: {
                    fieldName: "pic_id",
                    prefix: "pic_id_"
                }
            }
        }
    },
    FUNCTION_SCORE_QUERY: {//8
        queryType: TableStore.QueryType.FUNCTION_SCORE_QUERY,
        query: {
            query: {
                queryType: TableStore.QueryType.PREFIX_QUERY,
                query: {
                    fieldName: "pic_id",
                    prefix: "pic_id_"
                }
            },
            fieldValueFactor: {
                fieldName: "score"//数值字段
            }
        }
    },
    NESTED_QUERY: {//9
        queryType: TableStore.QueryType.NESTED_QUERY,
        query: {
            path: "pic_nested_tag",
            query: {
                queryType: TableStore.QueryType.TERM_QUERY,
                query: {
                    fieldName: "pic_nested_tag.tag_name",
                    term: "画"
                }
            },
            scoreMode: TableStore.ScoreMode.SCORE_MODE_AVG//optional default SCORE_MODE_AVG
        }
    },
    WILDCARD_QUERY: {//10
        queryType: TableStore.QueryType.WILDCARD_QUERY,
        query: {
            fieldName: "pic_id",
            value: "pic_id_1*"
        }
    },
    MATCH_ALL_QUERY: {//11
        queryType: TableStore.QueryType.MATCH_ALL_QUERY,
    },
    GEO_BOUNDING_BOX_QUERY: {//12
        queryType: TableStore.QueryType.GEO_BOUNDING_BOX_QUERY,
        query: {
            fieldName: "pos",
            topLeft: "1,0",
            bottomRight: "0,1"
        }
    },
    GEO_DISTANCE_QUERY: {
        queryType: TableStore.QueryType.GEO_DISTANCE_QUERY,
        query: {
            fieldName: "pos",
            centerPoint: "0,0",
            distance: 100000//单位米
        }
    },
    GEO_POLYGON_QUERY: {
        queryType: TableStore.QueryType.GEO_POLYGON_QUERY,
        query: {
            fieldName: "pos",
            points: ["0,0", "0,1", "1,0"]
        }
    },
    TERMS_QUERY: {
        queryType: TableStore.QueryType.TERMS_QUERY,
        query: {
            fieldName: "pic_id",
            terms: ["pic_id_1", "pic_id_2"]
        }
    },
    EXISTS_QUERY: {
        queryType: TableStore.QueryType.EXISTS_QUERY,
        query: {
            fieldName: "pic_des"
        }
    }
};

describe('#Search By Index', function () {
    this.timeout(30000);
    for (let type in queryMap) {
        testCase(type);
    }

    it('SORT DESC should success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY
                },
                sort: {
                    sorters: [
                        {
                            fieldSort: {
                                fieldName: "pic_id",
                                order: TableStore.SortOrder.SORT_ORDER_DESC,
                            }
                        }
                    ]
                }
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_NONE,
            }
        };
        client.search(params, function (err, data) {
            assert.equal(data.rows[0].primaryKey[0].value >= data.rows[1].primaryKey[0].value, true);
            done();
        })
    });

    it('SORT ASC should success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY
                },
                sort: {
                    sorters: [
                        {
                            fieldSort: {
                                fieldName: "pic_id",
                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                            }
                        }
                    ]
                }
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_NONE,
            }
        };
        client.search(params, function (err, data) {
            assert.equal(data.rows[0].primaryKey[0].value <= data.rows[1].primaryKey[0].value, true);
            done();
        })
    });

    it('ColumnToGet NONE should success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY
                }
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_NONE,
            }
        };
        client.search(params, function (err, data) {
            assert.equal(data.rows[0].attributes.length, 0);
            done();
        })
    });

    it('ColumnToGet SPECIFIED should success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY
                }
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["pos"]
            }
        };
        client.search(params, function (err, data) {
            assert.equal(data.rows[0].attributes.length, 1);
            assert.equal(data.rows[0].attributes[0].columnName, 'pos');
            done();
        })
    });

    it('ColumnToGet ALL should success', function (done) {
        const params = {
            tableName: tableName,
            indexName: indexName,
            searchQuery: {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY
                }
            },
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL,
                returnNames: ["pos"]
            }
        };
        client.search(params, function (err, data) {
            assert.equal(data.rows[0].attributes.length, 5);
            done();
        })
    });

});


describe("#Delete Index", function() {
    it('should delete index success', function(done) {//destory table
        this.timeout(10000);

        const deleteSearchIndexParams = {
            tableName: tableName,
            indexName: indexName
        };
        client.deleteSearchIndex(deleteSearchIndexParams, function (deleteSearchIndexErr, deleteSearchIndexData) {
            assert.equal(deleteSearchIndexErr, undefined);
            done();
        });


    });

    after(function (done) {
        const deleteTableParams = {tableName: tableName};
        client.deleteTable(deleteTableParams, function (err, data) {
            done();
        });
    });
});

function testCase(type) {
    it(type + ' should success', function (done) {
        const params = getParams(type);

        client.search(params, function (err, data) {
            assert.equal(err, undefined);
            console.log(type + " totalCounts:" + data.totalCounts);
            assert.equal(+data.totalCounts > 0, true);
            done();
        });
    });
}

function getParams(type) {
    return {
        tableName: tableName,
        indexName: indexName,
        searchQuery: {
            offset: 0,
            limit: 10,
            getTotalCount: true,
            query: queryMap[type]
        },
        columnToGet: {
            returnType: TableStore.ColumnReturnType.RETURN_ALL,
            returnNames: ["pic_tag", "pic_des", "time_stamp", "pos"]
        }
    }
}

