const client = require('../samples/client');
const assert = require("assert");
const otsTestUtils = require("./ots_test_utils");
const TableStore = require("../index");
const Long = TableStore.Long;


describe('Search Meta', () => {
    it("create_and_describe_with_ttl_and_reindex_and_update_ttl", async function () {
        this.timeout(30000);
        const tableName = "js_create_and_describe"
        const indexName = tableName + "_index"
        await otsTestUtils.deleteTableAndSearchIndex(tableName)
        await otsTestUtils.deleteTable(tableName)
        // 创建原始索引
        await otsTestUtils.createTableAndSearchIndex(tableName, indexName, otsTestUtils.testSimpleSchema, {
            allowUpdate: false,
        }, undefined, 900000)
        // 创建reindex
        await otsTestUtils.createSearchIndex(tableName, indexName + "_reindex", otsTestUtils.testSimpleSchema)
        {
            let info = await otsTestUtils.describeSearchIndex(tableName, indexName)
            console.log(info)
            assert.ok(info)
            assert.equal(900000, info.timeToLive)
        }
        {
            let info = await otsTestUtils.describeSearchIndex(tableName, indexName + "_reindex")
            console.log(info)
            assert.ok(info)
        }
        // 更新原始索引ttl
        {
            await new Promise(function (resolve, reject) {
                let params = {
                    tableName: tableName,
                    indexName: indexName,
                    timeToLive: 8000000,
                }
                client.updateSearchIndex(params, function (err, data) {
                    if (err) {
                        console.log('updateSearchIndex error:', err.toString());
                        reject(err);
                    } else {
                        console.log('updateSearchIndex success:', data);
                        resolve(data)
                    }
                });
            })
            // 校验更新后
            {
                let info = await otsTestUtils.describeSearchIndex(tableName, indexName)
                console.log(info)
                assert.ok(info)
                assert.equal(8000000, info.timeToLive)
            }
        }
        return otsTestUtils.emptyPromise
    });
});


describe('Search Query', () => {
    it("agg_and_group_by", async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        await otsTestUtils.deleteTableAndSearchIndex(tableName)
        await otsTestUtils.deleteTable(tableName)
        // 创建原始索引
        await otsTestUtils.createTableAndSearchIndex(tableName, indexName, otsTestUtils.testSimpleSchema)
        // 写几行数据
        for (let i = 0; i < 30; i++) {
            await otsTestUtils.putRow(tableName, i + "", [
                {'col_keyword': i % 12 + ""},
                {'col_long': Long.fromNumber(i)}
            ]);
        }
        await otsTestUtils.waitSearchSync(tableName, indexName, 30, 160)
        // 测试查询(查看access日志是否符合预期)
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 0,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                getTotalCount: true,
                groupBys: {
                    groupBys: [
                        {
                            name: "group_by_GROUP_BY_FIELD",
                            type: TableStore.GroupByType.GROUP_BY_FIELD,
                            body: {
                                fieldName: "col_long",
                                size: 111,
                                sort: {
                                    sorters: [
                                        {
                                            groupKeySort: {
                                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                                            },
                                        },
                                        {
                                            rowCountSort: {
                                                order: TableStore.SortOrder.SORT_ORDER_DESC,
                                            },
                                        },
                                        {
                                            subAggSort: {
                                                subAggName: "xx123",
                                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                                            },
                                        },
                                    ],
                                },
                                subAggs: {
                                    aggs: [
                                        {
                                            name: "AGG_DISTINCT_COUNT_test",
                                            type: TableStore.AggregationType.AGG_DISTINCT_COUNT,
                                            body: {
                                                fieldName: "col_long",
                                                missing: 666,
                                            },
                                        },
                                        {
                                            name: "xx123",
                                            type: TableStore.AggregationType.AGG_COUNT,
                                            body: {
                                                fieldName: "col_long",
                                                missing: 12,
                                            },
                                        },
                                    ]
                                },
                                subGroupBys: {
                                    groupBys: [
                                        {
                                            name: "group_by_GROUP_BY_RANGE",
                                            type: TableStore.GroupByType.GROUP_BY_RANGE,
                                            body: {
                                                fieldName: "col_long",
                                                ranges: [
                                                    {
                                                        from: 4,
                                                        to: 5,
                                                    },
                                                    {
                                                        from: 6,
                                                        to: 7,
                                                    },
                                                ],
                                                subAggs: {
                                                    aggs: [
                                                        {
                                                            name: "AGG_DISTINCT_COUNT_test",
                                                            type: TableStore.AggregationType.AGG_DISTINCT_COUNT,
                                                            body: {
                                                                fieldName: "col_long",
                                                                missing: 8,
                                                            },
                                                        },
                                                    ]
                                                },
                                                subGroupBys: {
                                                    groupBys: [
                                                        {
                                                            name: "group_by_GROUP_BY_RANGE",
                                                            type: TableStore.GroupByType.GROUP_BY_RANGE,
                                                            body: {
                                                                fieldName: "col_long",
                                                                ranges: [
                                                                    {
                                                                        from: 9,
                                                                        to: 10,
                                                                    },
                                                                    {
                                                                        from: 11,
                                                                        to: 12,
                                                                    },
                                                                ],
                                                                subAggs: {
                                                                    aggs: [
                                                                        {
                                                                            name: "AGG_DISTINCT_COUNT_test",
                                                                            type: TableStore.AggregationType.AGG_DISTINCT_COUNT,
                                                                            body: {
                                                                                fieldName: "col_long",
                                                                                missing: 13,
                                                                            },
                                                                        },
                                                                    ]
                                                                },
                                                            },
                                                        },
                                                    ]
                                                },
                                            },
                                        },
                                    ]
                                },
                            },
                        },
                        {
                            name: "group_by_GROUP_BY_RANGE",
                            type: TableStore.GroupByType.GROUP_BY_RANGE,
                            body: {
                                fieldName: "col_long",
                                ranges: [
                                    {
                                        from: 1,
                                        to: 5,
                                    },
                                    {
                                        from: 3,
                                        to: 20,
                                    },
                                ]
                            },
                        },
                        {
                            name: "group_by_GROUP_BY_FILTER",
                            type: TableStore.GroupByType.GROUP_BY_FILTER,
                            body: {
                                filters: [
                                    {
                                        queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                                    },
                                    {
                                        queryType: TableStore.QueryType.WILDCARD_QUERY,
                                        query: {
                                            fieldName: "col_keyword",
                                            value: "1*"
                                        }
                                    }
                                ],
                            },
                        },
                        {
                            name: "group_by_GROUP_BY_GEO_DISTANCE",
                            type: TableStore.GroupByType.GROUP_BY_GEO_DISTANCE,
                            body: {
                                fieldName: "col_geo",
                                origin: {
                                    lat: 50,
                                    lon: 60,
                                },
                                ranges: [
                                    {
                                        from: 1,
                                        to: 2,
                                    },
                                    {
                                        from: 3,
                                    },
                                ]
                            },
                        },
                        {
                            name: "group_by_GROUP_BY_HISTOGRAM",
                            type: TableStore.GroupByType.GROUP_BY_HISTOGRAM,
                            body: {
                                fieldName: "col_long",
                                interval: Long.fromNumber(3),
                                missing: Long.fromNumber(123),
                                minDocCount: 5,
                                fieldRange: {
                                    min: Long.fromNumber(1),
                                    max: Long.fromNumber(999),
                                },
                                sort: {
                                    sorters: [
                                        {
                                            groupKeySort: {
                                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                                            },
                                        },
                                        {
                                            rowCountSort: {
                                                order: TableStore.SortOrder.SORT_ORDER_ASC,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    ],
                },
                aggs: {
                    aggs: [
                        {
                            name: "avg_test",
                            type: TableStore.AggregationType.AGG_AVG,
                            body: {
                                fieldName: "col_long",
                                missing: 111,
                            },
                        },
                        {
                            name: "max_test",
                            type: TableStore.AggregationType.AGG_MAX,
                            body: {
                                fieldName: "col_long",
                                missing: 222,
                            },
                        },
                        {
                            name: "min_test",
                            type: TableStore.AggregationType.AGG_MIN,
                            body: {
                                fieldName: "col_long",
                                missing: 333,
                            },
                        },
                        {
                            name: "sum_test",
                            type: TableStore.AggregationType.AGG_SUM,
                            body: {
                                fieldName: "col_long",
                                missing: 444,
                            },
                        },
                        {
                            name: "count_test",
                            type: TableStore.AggregationType.AGG_COUNT,
                            body: {
                                fieldName: "col_long",
                            },
                        },
                        {
                            name: "AGG_DISTINCT_COUNT_test",
                            type: TableStore.AggregationType.AGG_DISTINCT_COUNT,
                            body: {
                                fieldName: "col_long",
                                missing: 666,
                            },
                        },
                        {
                            name: "AGG_TOP_ROWS_test",
                            type: TableStore.AggregationType.AGG_TOP_ROWS,
                            body: {
                                limit: 3,
                                sort: {
                                    sorters: [
                                        {
                                            fieldSort: {
                                                fieldName: "col_keyword",
                                                order: TableStore.SortOrder.SORT_ORDER_DESC,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                        {
                            name: "AGG_PERCENTILES_test",
                            type: TableStore.AggregationType.AGG_PERCENTILES,
                            body: {
                                fieldName: "col_long",
                                percentiles: [20, 50, 90, 100],
                                missing: 888,
                            },
                        },
                    ],
                },
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            })
        console.log(JSON.stringify(searchResp))
        return otsTestUtils.emptyPromise
    });

    it("weight", async function () {
        this.timeout(30000);
        const tableName = "js_weight"
        const indexName = tableName + "_index"
        await otsTestUtils.deleteTableAndSearchIndex(tableName)
        await otsTestUtils.deleteTable(tableName)
        // 创建原始索引
        await otsTestUtils.createTableAndSearchIndex(tableName, indexName, otsTestUtils.testSimpleSchema)
        // 创建reindex
        await otsTestUtils.createSearchIndex(tableName, indexName + "_reindex", otsTestUtils.testSimpleSchema)

        // 测试查询(查看access日志是否符合预期)
        await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.BOOL_QUERY,
                    query: {
                        mustQueries: [
                            {
                                queryType: TableStore.QueryType.MATCH_QUERY,
                                query: {
                                    fieldName: "col_text",
                                    text: "t",
                                    weight: 123.11,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.MATCH_PHRASE_QUERY,
                                query: {
                                    fieldName: "col_text",
                                    text: "t",
                                    weight: 123.22,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.TERM_QUERY,
                                query: {
                                    fieldName: "col_keyword",
                                    term: "t2",
                                    weight: 123.33,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.TERMS_QUERY,
                                query: {
                                    fieldName: "col_keyword",
                                    terms: ["t2", "t4"],
                                    weight: 123.44,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.PREFIX_QUERY,
                                query: {
                                    fieldName: "col_keyword",
                                    prefix: "test",
                                    weight: 123.55,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.WILDCARD_QUERY,
                                query: {
                                    fieldName: "col_keyword",
                                    value: "pic_id_*1",
                                    weight: 123.66,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.NESTED_QUERY,
                                query: {
                                    path: "col_nested",
                                    weight: 123.77,
                                    query: {
                                        queryType: TableStore.QueryType.TERM_QUERY,
                                        query: {
                                            fieldName: "col_nested.sub_keyword",
                                            term: "term1"
                                        }
                                    },
                                }
                            }
                        ],
                        minimumShouldMatch: 0
                    }

                },
                getTotalCount: true,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            })

        return otsTestUtils.emptyPromise
    });
});

describe('ParallelScan', () => {
    it("compute_splits", async function () {
        this.timeout(30000);
        const tableName = "js_compute_splits"
        const indexName = tableName + "_index"
        await otsTestUtils.deleteTableAndSearchIndex(tableName)
        await otsTestUtils.deleteTable(tableName)
        // 创建原始索引
        await otsTestUtils.createTableAndSearchIndex(tableName, indexName, otsTestUtils.testSimpleSchema)
        await otsTestUtils.computeSplits(tableName, indexName)
        return otsTestUtils.emptyPromise
    });

    it("parallel_scan", async function () {
        this.timeout(160 * 1000);
        const tableName = "js_parallel_scan"
        const indexName = tableName + "_index"
        await otsTestUtils.deleteTableAndSearchIndex(tableName)
        await otsTestUtils.deleteTable(tableName)
        // 创建原始索引
        await otsTestUtils.createTableAndSearchIndex(tableName, indexName, otsTestUtils.testSimpleSchema)
        // 写几行数据
        for (let i = 0; i < 30; i++) {
            await otsTestUtils.putRow(tableName, i + "", [
                {'col_keyword': i % 4 + ""},
                {'col_long': Long.fromNumber(123456789)}
            ])
        }
        await otsTestUtils.waitSearchSync(tableName, indexName, 30, 150)
        let computeSplits = await otsTestUtils.computeSplits(tableName, indexName)

        let scanQuery = {
            query: {
                queryType: TableStore.QueryType.MATCH_ALL_QUERY,
            },
            limit: 3,
            aliveTime: 31,
            token: undefined,
            currentParallelId: 0,
            maxParallel: 1,
        }

        let parallelScanPromise = () => {
            return new Promise((resolve, reject) => {
                client.parallelScan({
                    tableName: tableName,
                    indexName: indexName,
                    columnToGet: {
                        returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
                    },
                    sessionId: computeSplits.sessionId,
                    scanQuery: scanQuery,
                }, function (err, data) {
                    if (err) {
                        console.log('parallelScan error:', err.toString());
                        reject(err);
                    } else {
                        console.log("parallelScan, rows:", data.rows.length)
                        resolve(data)
                    }
                });
            })
        }
        let totalCount = 0
        let parallelScanResponse = await parallelScanPromise()
        totalCount += parallelScanResponse.rows.length
        while (parallelScanResponse.nextToken !== null && parallelScanResponse.nextToken.length > 0) {
            scanQuery.token = parallelScanResponse.nextToken
            parallelScanResponse = await parallelScanPromise()
            totalCount += parallelScanResponse.rows.length
        }
        console.log("total:", totalCount)
        return otsTestUtils.emptyPromise;
    });
});

