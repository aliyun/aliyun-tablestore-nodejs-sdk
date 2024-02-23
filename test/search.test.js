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
        var keywords =
            [ "hangzhou", "beijing", "shanghai", "hangzhou shanghai", "hangzhou beijing shanghai", "hz", "bj"];
        // 写几行数据
        for (let i = 0; i < 30; i++) {
            // 构造Nested属性列
            var stringBuilder = "[{" +
                "\"Level1_Col1_Text\":\"" + keywords[i%7] + " " + i + "_1" + "\"," +
                "\"Level1_Col2_Nested\":" + "[{" +
                "\"Level2_Col1_Text\":\"" + keywords[i%7] + " " + i + "_1" + "\"" + "}]}," +
                "{" +
                "\"Level1_Col1_Text\":\"" + keywords[i%7] + " " + i + "_2" + "\"," +
                "\"Level1_Col2_Nested\":" + "[{" +
                "\"Level2_Col1_Text\":\"" + keywords[i%7] + " " + i + "_2" + "\"" + "}]}]";

            var dates = ["2017-05-01 00:00:01", "2017-05-03 00:00:01", "2017-05-10 00:00:01", "2017-05-15 00:00:01",
                "2017-05-15 12:10:01", "2017-05-16 00:00:01", "2017-05-20 00:00:01"];

            await otsTestUtils.putRow(tableName, i + "", [
                {'col_keyword': i % 12 + ""},
                {'col_long': Long.fromNumber(i)},
                {'col_long_sec': Long.fromNumber(i)},
                {'col_double': i},
                {"col_geo": i + "," + i + 1},
                {"col_vector": "[0.1, 1.2, 0.6, " + i + "]"},
                {"col_text2": keywords[i % 7]},
                {"col_nested2": stringBuilder},
                {"col_date": dates[i % 7]},
                {"col_keyword2": keywords[i % 7]}
            ]);
        }

        //测试fieldSort的missingField
        for (let i = 31; i < 38; i++) {
            await otsTestUtils.putRow(tableName, i + "", [
                {'col_long_sec': Long.fromNumber(i)},
            ]);
        }

        await otsTestUtils.waitSearchSync(tableName, indexName, 37, 160)
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
                                offset: Long.fromNumber(1),
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

    it('group_by_date_histogram', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
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
                            name: "group_by_GROUP_BY_DATE_HISTOGRAM",
                            type: TableStore.GroupByType.GROUP_BY_DATE_HISTOGRAM,
                            body: {
                                fieldName: "date",
                                interval: {value: 3, unit: TableStore.DateTimeUnit.HOUR},
                                missing: "2024-01-05T10:24:32.000813",
                                minDocCount: 5,
                                fieldRange: {
                                    min: "2024-01-05T10:24:32.000813",
                                    max: "2024-01-09T10:24:33.000813",
                                },
                                offset: {value: 1, unit: TableStore.DateTimeUnit.HOUR},
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
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            })
        console.log(JSON.stringify(searchResp))
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('group_by_geo_grid', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
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
                            name: "group_by_GROUP_BY_GEO_GRID",
                            type: TableStore.GroupByType.GROUP_BY_GEO_GRID,
                            body: {
                                fieldName: "col_geo",
                                precision: TableStore.GeoHashPrecision.GHP_5009KM_4992KM_1,
                                size: 100,
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
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            })
        console.log(JSON.stringify(searchResp))
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('functions_score_query', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 1,
                query: {
                    queryType: TableStore.QueryType.FUNCTIONS_SCORE_QUERY,
                    query: {
                        query: {
                            queryType: TableStore.QueryType.EXISTS_QUERY,
                            query: {
                                fieldName: "col_keyword"
                            },
                        },
                        minScore: 1.0,
                        maxScore: 1000.0,
                        scoreMode: TableStore.FSMScoreMode.FSM_SUM,
                        combineMode: TableStore.FSMCombineMode.FCM_SUM,
                        functions: [
                            {
                                weight: 1,
                                filter: {
                                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                                },
                                decayFunction: {
                                    fieldName: "col_double",
                                    mathFunction: TableStore.MathFunction.LINEAR,
                                    decay: 0.5,
                                    decayParamType:  TableStore.DecayFuncParamType.DF_NUMERIC_PARAM,
                                    decayParam: {
                                        origin: 1.3,
                                        scale: 1,
                                        offset: 0.5
                                    },
                                    multiValueMode: TableStore.MultiValueMode.MVM_MIN
                                }
                            }
                        ]
                    },
                },
                getTotalCount: true,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["col_double"]
            })
        console.log(JSON.stringify(searchResp))
        assert.equal(1, searchResp.rows[0].attributes[0].columnValue);

        searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 1,
                query: {
                    queryType: TableStore.QueryType.FUNCTIONS_SCORE_QUERY,
                    query: {
                        query: {
                            queryType: TableStore.QueryType.EXISTS_QUERY,
                            query: {
                                fieldName: "col_keyword"
                            },
                        },
                        minScore: 1.0,
                        maxScore: 1000.0,
                        scoreMode: TableStore.FSMScoreMode.FSM_SUM,
                        combineMode: TableStore.FSMCombineMode.FCM_SUM,
                        functions: [
                            {
                                weight: 1,
                                filter: {
                                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                                },
                                randomFunction: {}
                            }
                        ]
                    },
                },
                getTotalCount: true,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["col_double"]
            })
        assert.equal(1, searchResp.rows.length);

        searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 1,
                query: {
                    queryType: TableStore.QueryType.FUNCTIONS_SCORE_QUERY,
                    query: {
                        query: {
                            queryType: TableStore.QueryType.EXISTS_QUERY,
                            query: {
                                fieldName: "col_keyword"
                            },
                        },
                        minScore: 1.0,
                        maxScore: 1000.0,
                        scoreMode: TableStore.FSMScoreMode.FSM_SUM,
                        combineMode: TableStore.FSMCombineMode.FCM_SUM,
                        functions: [
                            {
                                weight: 1,
                                filter: {
                                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                                },
                                fieldValueFactorFunction: {
                                    fieldName: "col_double",
                                    factor: 0.5,
                                    modifier: TableStore.FunctionModifier.FM_LOG1P,
                                    missing: 1
                                }
                            }
                        ]
                    },
                },
                getTotalCount: true,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["col_double"]
            })
        assert.equal(1, searchResp.rows.length);
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('knn_vector_query', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.KNN_VECTOR_QUERY,
                    query: {
                        filter: {
                            queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                        },
                        fieldName: "col_vector",
                        topK: Long.fromNumber(100),
                        float32QueryVector: [0.1, 1.2, 0.6, 1],
                        weight: 1,
                    },
                },
                sort: {
                    sorters: [
                        {
                            scoreSort: {
                                order: TableStore.SortOrder.SORT_ORDER_DESC
                            }
                        }
                    ],
                },
                getTotalCount: false,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["col_vector"]
            })
        console.log(JSON.stringify(searchResp))
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('highlight_query', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                limit: 5,
                query: {
                    queryType: TableStore.QueryType.BOOL_QUERY,
                    query: {
                        shouldQueries: [
                            {
                                queryType: TableStore.QueryType.MATCH_QUERY,
                                query: {
                                    fieldName: "col_text2",
                                    text: "hangzhou shanghai",
                                    weight: 1,
                                }
                            },
                            {
                                queryType: TableStore.QueryType.NESTED_QUERY,
                                query: {
                                    path: "col_nested2",
                                    scoreMode: TableStore.ScoreMode.SCORE_MODE_MIN,
                                    weight: 1,
                                    query: {
                                        queryType: TableStore.QueryType.BOOL_QUERY,
                                        query: {
                                            shouldQueries: [
                                                {
                                                    queryType: TableStore.QueryType.MATCH_QUERY,
                                                    query: {
                                                        fieldName: "col_nested2.Level1_Col1_Text",
                                                        text: "hangzhou shanghai",
                                                        weight: 1,
                                                    }
                                                },
                                                {
                                                    queryType: TableStore.QueryType.NESTED_QUERY,
                                                    query: {
                                                        path: "col_nested2.Level1_Col2_Nested",
                                                        scoreMode: TableStore.ScoreMode.SCORE_MODE_MIN,
                                                        weight: 1,
                                                        query: {
                                                            queryType: TableStore.QueryType.MATCH_QUERY,
                                                            query: {
                                                                fieldName: "col_nested2.Level1_Col2_Nested.Level2_Col1_Text",
                                                                text: "hangzhou shanghai",
                                                                weight: 1,
                                                            }
                                                        },
                                                        innerHits: {
                                                            sort: {
                                                                sorters: [
                                                                    {
                                                                        docSort: {
                                                                            order: TableStore.SortOrder.SORT_ORDER_ASC
                                                                        }
                                                                    }
                                                                ],
                                                            },
                                                            highlight: {
                                                                highlightParameters: [
                                                                    {
                                                                        fieldName: "col_nested2.Level1_Col2_Nested.Level2_Col1_Text",
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                    },
                                                }
                                            ],
                                            minimumShouldMatch: 0
                                        },
                                    },
                                    innerHits: {
                                        sort: {
                                            sorters: [
                                                {
                                                    scoreSort: {
                                                        order: TableStore.SortOrder.SORT_ORDER_DESC
                                                    }
                                                },
                                                {
                                                    docSort: {
                                                        order: TableStore.SortOrder.SORT_ORDER_ASC
                                                    }
                                                },
                                            ],
                                        },
                                        highlight: {
                                            highlightParameters: [
                                                {
                                                    fieldName: "col_nested2.Level1_Col1_Text",
                                                }
                                            ]
                                        }
                                    },
                                }
                            }
                        ],
                        minimumShouldMatch: 0
                    }
                },
                getTotalCount: true,
                highlight: {
                    highlightEncoder: TableStore.HighlightEncoder.PLAIN_MODE,
                    highlightParameters: [
                        {
                            fieldName: "col_text2",
                            preTag: "<b>",
                            postTag: "</b>",
                            fragmentsOrder: TableStore.HighlightFragmentOrder.TEXT_SEQUENCE,
                            fragmentSize: 20,
                            numberOfFragments: 3,
                        }
                    ]
                }
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL
            })
        otsTestUtils.printSearchHit(searchResp.searchHits, "");
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('field_sort_missing_field_query', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 10,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                sort: {
                    sorters: [
                        {
                            fieldSort: {
                                fieldName: "col_long",
                                order: TableStore.SortOrder.SORT_ORDER_DESC,
                                missingField: "col_long_sec"
                            }
                        }
                    ],
                },
                getTotalCount: false,
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,
                returnNames: ["col_long","col_long_sec"]
            })
        console.log(JSON.stringify(searchResp))
        assert.equal(37, searchResp.rows[0].attributes[0].columnValue);
        assert.equal("col_long_sec", searchResp.rows[0].attributes[0].columnName);
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('group_by_composite', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                getTotalCount: true,
                groupBys: {
                    groupBys: [
                        {
                            name: "group_by_GROUP_BY_COMPOSITE",
                            type: TableStore.GroupByType.GROUP_BY_COMPOSITE,
                            body: {
                                sources: {
                                    groupBys: [
                                        {
                                            name: "group_by_GROUP_BY_FIELD",
                                            type: TableStore.GroupByType.GROUP_BY_FIELD,
                                            body: {
                                                fieldName: "col_keyword2",
                                            }
                                        },
                                        {
                                            name: "group_by_GROUP_BY_HISTOGRAM",
                                            type: TableStore.GroupByType.GROUP_BY_HISTOGRAM,
                                            body: {
                                                fieldName: "col_long",
                                                interval: Long.fromNumber(5),
                                            }
                                        },
                                        {
                                            name: "group_by_GROUP_BY_DATE_HISTOGRAM",
                                            type: TableStore.GroupByType.GROUP_BY_DATE_HISTOGRAM,
                                            body: {
                                                fieldName: "col_date",
                                                interval: {value: 5, unit: TableStore.DateTimeUnit.DAY},
                                                timeZone: "+05:30"
                                            }
                                        }
                                    ]
                                },
                            },
                        },
                    ],
                },
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX
            })
        while (true) {
            if (searchResp.groupBys.groupByResults == null || searchResp.groupBys.groupByResults.length === 0) {
                console.log("groupByComposite Result is null or empty");
                return;
            }

            var result = searchResp.groupBys.groupByResults[0].groupByResult;

            if (result.sourceNames.length !== 0) {
                for (var i in result.sourceNames) {
                    process.stdout.write(result.sourceNames[i] + "    ");
                }
                process.stdout.write("rowCount\n");
            }

            for (var i in result.items) {
                for (var value in result.items[i].keys) {
                    process.stdout.write(result.items[i].keys[value] + "\t\t\t\t");
                }
                process.stdout.write(result.items[i].rowCount + "\t\n");
            }

            if (result.nextToken != null) {
                searchResp = await otsTestUtils.search(tableName, indexName, {
                        offset: 0,
                        query: {
                            queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                        },
                        getTotalCount: true,
                        groupBys: {
                            groupBys: [
                                {
                                    name: "group_by_GROUP_BY_COMPOSITE",
                                    type: TableStore.GroupByType.GROUP_BY_COMPOSITE,
                                    body: {
                                        sources: {
                                            groupBys: [
                                                {
                                                    name: "group_by_GROUP_BY_FIELD",
                                                    type: TableStore.GroupByType.GROUP_BY_FIELD,
                                                    body: {
                                                        fieldName: "col_keyword2",
                                                    }
                                                },
                                                {
                                                    name: "group_by_GROUP_BY_HISTOGRAM",
                                                    type: TableStore.GroupByType.GROUP_BY_HISTOGRAM,
                                                    body: {
                                                        fieldName: "col_long",
                                                        interval: Long.fromNumber(5),
                                                    }
                                                },
                                                {
                                                    name: "group_by_GROUP_BY_DATE_HISTOGRAM",
                                                    type: TableStore.GroupByType.GROUP_BY_DATE_HISTOGRAM,
                                                    body: {
                                                        fieldName: "col_date",
                                                        interval: {value: 5, unit: TableStore.DateTimeUnit.DAY},
                                                        timeZone: "+05:30"
                                                    }
                                                }
                                            ]
                                        },
                                        nextToken: result.nextToken
                                    },
                                },
                            ],
                        },
                    },
                    {
                        returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX
                    })
            } else {
                break;
            }
        }
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        return otsTestUtils.emptyPromise
    });

    it('collapse test ', async function () {
        this.timeout(160000);
        const tableName = "js_agg_and_group_by"
        const indexName = tableName + "_index"
        let searchResp = await otsTestUtils.search(tableName, indexName, {
                offset: 0,
                limit: 100,
                query: {
                    queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                },
                getTotalCount: true,
                collapse: {
                    fieldName: "col_keyword",
                },
            },
            {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            })
        console.log(JSON.stringify(searchResp))
        // 本case复用上述case索引，因此需要先运行上面case，让索引创建出来
        assert.equal(13, searchResp.rows.length)
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

