const client = require("../samples/client");
const TableStore = require("../index");
const assert = require("assert");
const {performance} = require('perf_hooks');

otsTestUtils = {
    testSimpleSchema: {
        fieldSchemas: [{
            fieldName: "col_keyword",
            fieldType: TableStore.FieldType.KEYWORD,
            index: true,
            enableSortAndAgg: true,
            store: true,
            isAnArray: false
        }, {
            fieldName: "col_long",
            fieldType: TableStore.FieldType.LONG,
            index: true,
            enableSortAndAgg: true,
            store: true,
            isAnArray: false
        }, {
            fieldName: "col_text",
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
        }, {
            fieldName: "col_geo",
            fieldType: TableStore.FieldType.GEO_POINT,
            index: true,
            enableSortAndAgg: true,
            store: true,
            isAnArray: false,
        }, {
            fieldName: "col_nested",
            fieldType: TableStore.FieldType.NESTED,
            index: false,
            enableSortAndAgg: false,
            store: false,
            fieldSchemas: [
                {
                    fieldName: "sub_keyword",
                    fieldType: TableStore.FieldType.KEYWORD,
                    index: true,
                    enableSortAndAgg: true,
                    store: false,
                },
                {
                    fieldName: "tag_long",
                    fieldType: TableStore.FieldType.LONG,
                    index: true,
                    enableSortAndAgg: true,
                    store: false,
                }
            ]
        }, {
            fieldName: "date",
            fieldType: TableStore.FieldType.DATE,
            index: true,
            enableSortAndAgg: true,
            store: true,
            isAnArray: false,
            dateFormats: ["yyyy-MM-dd'T'HH:mm:ss.SSSSSS"],
        }, {
            fieldName: "col_double",
            fieldType: TableStore.FieldType.DOUBLE,
            index: true,
            enableSortAndAgg: true,
            store: false,
            isAnArray: false
        }, {
            fieldName: "col_vector",
            fieldType: TableStore.FieldType.VECTOR,
            index: true,
            isAnArray: false,
            vectorOptions: {
                dataType: TableStore.VectorDataType.VD_FLOAT_32,
                dimension: 4,
                metricType: TableStore.VectorMetricType.VM_COSINE,
            }
        }, {
            fieldName: "col_text2",
            fieldType: TableStore.FieldType.TEXT,
            index: true,
            enableHighlighting: true,
        }, {
            fieldName: "col_nested2 ",
            fieldType: TableStore.FieldType.NESTED,
            index: false,
            enableSortAndAgg: false,
            store: false,
            fieldSchemas: [
                {
                    fieldName: "Level1_Col1_Text",
                    fieldType: TableStore.FieldType.TEXT,
                    index: true,
                    enableHighlighting: true,
                    enableSortAndAgg: false,
                    store: true,
                },
                {
                    fieldName: "Level1_Col2_Nested",
                    fieldType: TableStore.FieldType.NESTED,
                    index: false,
                    enableSortAndAgg: false,
                    store: false,
                    fieldSchemas: [
                        {
                            fieldName: "Level2_Col1_Text",
                            fieldType: TableStore.FieldType.TEXT,
                            index: true,
                            enableHighlighting: true,
                            enableSortAndAgg: false,
                            store: true,
                        },
                    ]
                }
            ]
        },{
            fieldName: "col_long_sec",
            fieldType: TableStore.FieldType.LONG,
            index: true,
            enableSortAndAgg: true,
        }, {
            fieldName: "col_date",
            fieldType: TableStore.FieldType.DATE,
            index: true,
            enableSortAndAgg: false,
            store: false,
            isAnArray: false,
            dateFormats: ["yyyy-MM-dd HH:mm:ss"],
        },{
            fieldName: "col_keyword2",
            fieldType: TableStore.FieldType.KEYWORD,
            index: true,
            enableSortAndAgg: true,
            store: true,
            isAnArray: false
        },],
    },
    emptyPromise: new Promise(function (resolve) {
        resolve()
    }),
    sleep: async function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },
    deleteTable: async function (tableName) {
        const params = {
            tableName: tableName
        };
        return new Promise(function (resolve, reject) {
            client.deleteTable(params, function (err, data) {
                if (err) {
                    console.log('deleteTable error:', err.toString());
                    if (err.toString().includes("OTSObjectNotExist")) {
                        resolve(data)
                        return
                    }
                    reject(err);
                } else {
                    console.log('deleteTable success:', data);
                    resolve(data)
                }
            });
        });
    },
    deleteTableAndSearchIndex: async function (tableName) {
        let listResp = await this.listSearchIndex(tableName);
        for (const item of listResp.indices) {
            console.log("start delete index", item.indexName);
            await this.deleteSearchIndex(tableName, item.indexName);
        }
        await this.deleteTable(tableName)
    },
    listSearchIndex: async function (tableName) {
        return new Promise(function (resolve, reject) {
            client.listSearchIndex({
                tableName: tableName,
            }, function (err, data) {
                if (err) {
                    if (err.toString().includes("does not exist")) {
                        resolve({
                            indices: [],
                        })
                        return
                    }
                    console.log('listSearchIndex error:', err.toString());
                    reject(err);
                } else {
                    console.log('listSearchIndex success:', data);
                    resolve(data)
                }
            });
        })
    },
    deleteSearchIndex: async function (tableName, indexName) {
        return new Promise(function (resolve, reject) {
            client.deleteSearchIndex({
                tableName: tableName, indexName: indexName,
            }, function (err, data) {
                if (err) {
                    console.log('deleteSearchIndex error:', err.toString());
                    if (err.toString().includes("OTSObjectNotExist")) {
                        resolve(data)
                        return
                    }
                    reject(err);
                } else {
                    console.log('deleteSearchIndex success:', data);
                    resolve(data)
                }
            });
        })
    },
    createTable: async function (tableName, tableOptions = {}) {
        const params = {
            tableMeta: {
                tableName: tableName, primaryKey: [{
                    name: 'pk1', type: 'STRING'
                }]
            }, reservedThroughput: {
                capacityUnit: {
                    read: 0, write: 0
                }
            }, tableOptions: {
                timeToLive: tableOptions.timeToLive === undefined ? -1 : tableOptions.timeToLive,
                maxVersions: tableOptions.maxVersions === undefined ? 1 : tableOptions.maxVersions,
                allowUpdate: tableOptions.allowUpdate === undefined ? true : tableOptions.allowUpdate,
            },
        };
        return new Promise(function (resolve, reject) {
            client.createTable(params, function (err, data) {
                if (err) {
                    console.log('createTable error:', err.toString());
                    reject(err);
                } else {
                    console.log('createTable success:', data);
                    resolve(data)
                }
            })
        })
    },
    createSearchIndex: async function (tableName, indexName, schema, sourceIndexName, timeToLive) {
        return new Promise(function (resolve, reject) {
            let params = {
                tableName: tableName, indexName: indexName, schema: schema,
            }
            if (sourceIndexName !== undefined) {
                params.sourceIndexName = sourceIndexName
            }
            if (timeToLive !== undefined) {
                params.timeToLive = timeToLive
            }
            client.createSearchIndex(params, function (err, data) {
                if (err) {
                    console.log('createSearchIndex error:', err.toString());
                    reject(err);
                } else {
                    console.log('createSearchIndex success:', data);
                    resolve(data)
                }
            });
        })
    },
    search: async function (tableName, indexName, searchQuery, columnToGet = {
        returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
        returnNames: ["col_long"],
    }, timeoutMs = 30000) {
        return new Promise(function (resolve, reject) {
            let params = {
                tableName: tableName,
                indexName: indexName,
                searchQuery: searchQuery,
                columnToGet: columnToGet,
                timeoutMs: timeoutMs,
            }
            client.search(params, function (err, data) {
                if (err) {
                    console.log('search error:', err.toString());
                    reject(err);
                } else {
                    console.log('search success:', data);
                    resolve(data)
                }
            });
        })
    },
    waitSearchSync: async function (tableName, indexName, expectTotalCount, timeoutSecond) {
        let start = performance.now();
        while (true) {
            let searchResp = await this.search(tableName, indexName, {
                    offset: 0,
                    limit: 0,
                    query: {
                        queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                    },
                    getTotalCount: true,
                },
                {
                    returnType: TableStore.ColumnReturnType.RETURN_NONE,
                })
            let getTotalCount = searchResp.totalCounts >> 0
            if (getTotalCount === expectTotalCount) {
                console.log("TotalHit: " + expectTotalCount);
                console.log("DataSyncTimeInMs:" + (performance.now() - start));
                break;
            } else if (getTotalCount !== 0) {
                console.log("TotalHit: " + getTotalCount + ", Expect: " + expectTotalCount);
            }
            if (performance.now() - start > timeoutSecond * 1000) {
                assert.fail("等待同步数据超时")
            }
            await this.sleep(1000)
        }
        return this.emptyPromise
    },
    createTableAndSearchIndex: async function (tableName, indexName, schema, tableOptions = {}, sourceIndexName, timeToLive) {
        await this.createTable(tableName, tableOptions)
        await this.sleep(1000)
        await this.createSearchIndex(tableName, indexName, schema, sourceIndexName, timeToLive)
    },
    computeSplits: async function (tableName, indexName) {
        return new Promise((resolve, reject) => {
            client.computeSplits({
                tableName: tableName,
                searchIndexSplitsOptions: {
                    indexName: indexName,
                }
            }, function (err, data) {
                if (err) {
                    console.log('computeSplits error:', err.toString());
                    reject(err);
                } else {
                    console.log('computeSplits success:', data);
                    assert.ok(data.splitsSize >= 1)
                    resolve(data)
                }
            })
        })
    },
    putRow: async function (tableName, pk1, attributeColumns) {
        let params = {
            tableName: tableName,
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey: [{'pk1': pk1}],
            attributeColumns: attributeColumns,
            returnContent: {returnType: TableStore.ReturnType.Primarykey}
        };
        return new Promise(function (resolve, reject) {
            client.putRow(params, function (err, data) {
                if (err) {
                    console.log('putRow error:', err.toString());
                    reject(err);
                } else {
                    console.log('putRow success:', pk1);
                    resolve(data)
                }
            });
        });
    },
    describeTable: async function (tableName) {
        const params = {
            tableName: tableName
        };
        return new Promise(function (resolve, reject) {
            client.describeTable(params, function (err, data) {
                if (err) {
                    console.log('describeTable error:', err.toString());
                    reject(err);
                } else {
                    console.log('describeTable success:', data);
                    resolve(data)
                }
            });
        });
    },
    describeSearchIndex: async function (tableName, indexName) {
        const params = {
            tableName: tableName, indexName: indexName,
        };
        return new Promise(function (resolve, reject) {
            client.describeSearchIndex(params, function (err, data) {
                if (err) {
                    console.log('describeSearchIndex error:', err.toString());
                    reject(err);
                } else {
                    console.log('describeSearchIndex success:', data);
                    resolve(data)
                }
            });
        });
    },
    sqlQuery: async function (sql, version) {
        const params = {
            query: sql,
            version: version,
        };
        return new Promise(function (resolve, reject) {
            client.sqlQuery(params, function (err, data) {
                if (err) {
                    console.log('sqlQuery error:', err.toString());
                    if (err.toString().includes("already exists")) {
                        resolve(data)
                        return
                    }
                    reject(err);
                } else {
                    console.log('sqlQuery success:', data);
                    resolve(data)
                }
            });
        });
    },
    printSearchHit: function (searchHits, prefix) {
        TableStore.util.arrayEach(searchHits, function (searchHit) {
            if (searchHit.highlightResultItem != null) {
                console.log(prefix + "Highlight: \n");
                var strBuilder = ""
                for  (const [key,val]  of searchHit.highlightResultItem.highlightFields.entries()) {
                    strBuilder += key + ":[";
                    strBuilder += val.fragments.join(",") + "]\n";
                    console.log(strBuilder);
                }
            }
            for  (const [key,val]  of searchHit.searchInnerHits.entries()) {
                console.log(prefix + "Path: " + key + "\n");
                console.log(prefix + "InnerHit: \n");
                otsTestUtils.printSearchHit(val.subSearchHits, prefix + "    ");
            }
        });
    }
}


module.exports = otsTestUtils