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
var queryMap = {
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

console.log("wait for 10 second for index ......");

setTimeout(function () {
    describe('#Search By Index', function () {

        for (var type in queryMap) {
            testCase(type);
        }

        it('SORT DESC should success', function (done) {
            var params = {
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
            var params = {
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
            var params = {
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
            var params = {
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
            var params = {
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

            var deleteSearchIndexParams = {
                tableName: tableName,
                indexName: indexName
            };
            client.deleteSearchIndex(deleteSearchIndexParams, function (deleteSearchIndexErr, deleteSearchIndexData) {
                assert.equal(deleteSearchIndexErr, undefined);
                done();
            });


        });

        after(function (done) {
            var deleteTableParams = {tableName: tableName};
            client.deleteTable(deleteTableParams, function (err, data) {
                done();
            });
        });
    });

    run();
}, 10000)


function testCase(type) {
    it(type + ' should success', function (done) {
        var params = getParams(type);

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


