var client = require('./client');
var TableStore = require('../index.js');
var Long = TableStore.Long;


var testQueryMap = {
    MATCH_QUERY: {//1
        queryType: TableStore.QueryType.MATCH_QUERY,
        query: {
            fieldName: "pic_id",
            text: "pic_id_5"
        }
    },
    MATCH_QUERY_OR: {//1
        queryType: TableStore.QueryType.MATCH_QUERY,
        query: {
            fieldName: "pic_description",
            text: "some info",
            minimumShouldMatch: 2,
            operator: TableStore.QueryOperator.OR
        }
    },
    MATCH_PHRASE_QUERY: {//2
        queryType: TableStore.QueryType.MATCH_PHRASE_QUERY,
        query: {
            fieldName: "pic_id",
            text: "pic_id_5"
        }
    },
    TERM_QUERY: {//3
        queryType: TableStore.QueryType.TERM_QUERY,
        query: {
            fieldName: "pic_id",
            term: "pic_id_5"
        }
    },
    RANGE_QUERY: {//4
        queryType: TableStore.QueryType.RANGE_QUERY,
        query: {
            fieldName: "pic_id",
            rangeFrom: "pic_id_10",
            includeLower: true,
            rangeTo: "pic_id_11",
            includeUpper: true,
        }
    },
    PREFIX_QUERY: {//5
        queryType: TableStore.QueryType.PREFIX_QUERY,
        query: {
            fieldName: "pic_id",
            prefix: "pic_id_2"
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
                        rangeFrom: "pic_id_0",
                        includeLower: true,
                        rangeTo: "pic_id_20",
                        includeUpper: true,
                    }
                }
            ],
            mustNotQueries: [
                {
                    queryType: TableStore.QueryType.PREFIX_QUERY,
                    query: {
                        fieldName: "pic_id",
                        prefix: "pic_id_24"
                    }
                },
                {
                    queryType: TableStore.QueryType.RANGE_QUERY,
                    query: {
                        fieldName: "pic_id",
                        rangeFrom: "pic_id_10",
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
                        rangeFrom: "pic_id_0",
                        includeLower: true,
                        rangeTo: "pic_id_20",
                        includeUpper: true,
                    }
                }
            ],
            shouldQueries: [
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
                        rangeFrom: "pic_id_18",
                        includeLower: true,
                        rangeTo: "pic_id_20",
                        includeUpper: true,
                    }
                }
            ],
            minimumShouldMatch: 0
        }

    },
    CONST_SCORE_QUERY: {//7
        queryType: TableStore.QueryType.CONST_SCORE_QUERY,
        query: {
            filter: {
                queryType: TableStore.QueryType.PREFIX_QUERY,
                query: {
                    fieldName: "pic_id",
                    prefix: "pic_id_21"
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
                fieldName: "time_stamp"//数值字段
            }
        }
    },
    NESTED_QUERY: {//9
        queryType: TableStore.QueryType.NESTED_QUERY,
        query: {
            path: "pic_tag",
            query: {
                queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                query: {
                    fieldName: "pic_tag.tag_name",
                    term: "车"
                }
            },
        }
    },
    WILDCARD_QUERY: {//10
        queryType: TableStore.QueryType.WILDCARD_QUERY,
        query: {
            fieldName: "pic_id",
            value: "pic_id_*1"
        }
    },
    MATCH_ALL_QUERY: {//11
        queryType: TableStore.QueryType.MATCH_ALL_QUERY,
    },
    GEO_BOUNDING_BOX_QUERY: {//12
        queryType: TableStore.QueryType.GEO_BOUNDING_BOX_QUERY,
        query: {
            fieldName: "pos",
            topLeft: "1,0", // 设置矩形左上角(纬度,经度)
            bottomRight: "0,1"  // 设置矩形右下角(纬度,经度)
        }
    },
    GEO_DISTANCE_QUERY: {//13
        queryType: TableStore.QueryType.GEO_DISTANCE_QUERY,
        query: {
            fieldName: "pos",
            centerPoint: "1,1",// 设置中心点
            distance: 200000//单位米
        }
    },
    GEO_POLYGON_QUERY: {//14
        queryType: TableStore.QueryType.GEO_POLYGON_QUERY,
        query: {
            fieldName: "pos",
            points: ["0,0", "0,1", "-1,-1", "1,0"]
        }
    },
    TERMS_QUERY: {//15
        queryType: TableStore.QueryType.TERMS_QUERY,
        query: {
            fieldName: "pic_id",
            terms: ["pic_id_1", "pic_id_5"]
        }
    },
    EXISTS_QUERY: {//16
    queryType: TableStore.QueryType.EXISTS_QUERY,
        query: {
            fieldName: "pic_id"
        }
    }
};

client.search({
    tableName: "nestedTag",
    indexName: "testIndex",
    searchQuery: {
        offset: 0,
        limit: 10,
        query: testQueryMap.NESTED_QUERY,
        getTotalCount: true,
        sort: {
            sorters: [
                {
                    fieldSort: {
                        fieldName: "count",
                        order: TableStore.SortOrder.SORT_ORDER_DESC,
                        // mode: TableStore.SortMode.SORT_MODE_AVG,//for nested
                        // nestedFilter: {
                        //     path: "pic_tag",
                        //     filter: {
                        //         queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                        //     }
                        // },

                    },
                    // scoreSort: {
                    //     order: TableStore.SortOrder.SORT_ORDER_ASC
                    // },
                    // geoDistanceSort: {
                    //     fieldName: "pos",
                    //     points: ["0,0"],
                    //     order: TableStore.SortOrder.SORT_ORDER_ASC,
                    //     distanceType: TableStore.GeoDistanceType.GEO_DISTANCE_ARC,
                    //     // mode: TableStore.SortMode.SORT_MODE_MIN,
                    //     // nestedFilter: {
                    //     //     path: "pos",
                    //     //     filter: {
                    //     //         queryType: TableStore.QueryType.MATCH_ALL_QUERY,
                    //     //     }
                    //     // },
                    //
                    // }
                }
            ]
        }
    },
    columnToGet: {
        returnType: TableStore.ColumnReturnType.RETURN_NONE,
        returnNames: ["pic_tag", "pic_description", "time_stamp", "pos"]
    },
    routingValues: [
        [{count: Long.fromNumber(0), pic_id: "pic_id_0"}],//pk顺序与创建index时routingFields一致
        [{count: Long.fromNumber(3), pic_id: "pic_id_3"}],
    ]
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

