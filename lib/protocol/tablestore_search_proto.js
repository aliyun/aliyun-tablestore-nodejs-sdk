module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "tablestore.search.proto",
    "messages": [
        {
            "name": "MatchQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "text",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "minimum_should_match",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "QueryOperator",
                    "name": "operator",
                    "id": 4
                }
            ]
        },
        {
            "name": "MatchPhraseQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "text",
                    "id": 2
                }
            ]
        },
        {
            "name": "MatchAllQuery",
            "fields": []
        },
        {
            "name": "TermQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "term",
                    "id": 2
                }
            ]
        },
        {
            "name": "TermsQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "terms",
                    "id": 2
                }
            ]
        },
        {
            "name": "RangeQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "range_from",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "range_to",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "include_lower",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "include_upper",
                    "id": 5
                }
            ]
        },
        {
            "name": "PrefixQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "prefix",
                    "id": 2
                }
            ]
        },
        {
            "name": "WildcardQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "value",
                    "id": 2
                }
            ]
        },
        {
            "name": "BoolQuery",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Query",
                    "name": "must_queries",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Query",
                    "name": "must_not_queries",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "Query",
                    "name": "filter_queries",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "Query",
                    "name": "should_queries",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "minimum_should_match",
                    "id": 5
                }
            ]
        },
        {
            "name": "ConstScoreQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "Query",
                    "name": "filter",
                    "id": 1
                }
            ]
        },
        {
            "name": "FieldValueFactor",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "FunctionScoreQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "Query",
                    "name": "query",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "FieldValueFactor",
                    "name": "field_value_factor",
                    "id": 2
                }
            ]
        },
        {
            "name": "NestedQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "path",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "Query",
                    "name": "query",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ScoreMode",
                    "name": "score_mode",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeoBoundingBoxQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "top_left",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "bottom_right",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeoDistanceQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "center_point",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "double",
                    "name": "distance",
                    "id": 3
                }
            ]
        },
        {
            "name": "GeoPolygonQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "points",
                    "id": 2
                }
            ]
        },
        {
            "name": "Query",
            "fields": [
                {
                    "rule": "optional",
                    "type": "QueryType",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "query",
                    "id": 2
                }
            ]
        },
        {
            "name": "Collapse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "NestedFilter",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "path",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "Query",
                    "name": "filter",
                    "id": 2
                }
            ]
        },
        {
            "name": "ScoreSort",
            "fields": [
                {
                    "rule": "optional",
                    "type": "SortOrder",
                    "name": "order",
                    "id": 1
                }
            ]
        },
        {
            "name": "PrimaryKeySort",
            "fields": [
                {
                    "rule": "optional",
                    "type": "SortOrder",
                    "name": "order",
                    "id": 1
                }
            ]
        },
        {
            "name": "FieldSort",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "SortOrder",
                    "name": "order",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "SortMode",
                    "name": "mode",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "NestedFilter",
                    "name": "nested_filter",
                    "id": 4
                }
            ]
        },
        {
            "name": "GeoDistanceSort",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "points",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "SortOrder",
                    "name": "order",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "SortMode",
                    "name": "mode",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "GeoDistanceType",
                    "name": "distance_type",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "NestedFilter",
                    "name": "nested_filter",
                    "id": 6
                }
            ]
        },
        {
            "name": "Sorter",
            "fields": [
                {
                    "rule": "optional",
                    "type": "FieldSort",
                    "name": "field_sort",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "GeoDistanceSort",
                    "name": "geo_distance_sort",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ScoreSort",
                    "name": "score_sort",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "PrimaryKeySort",
                    "name": "pk_sort",
                    "id": 4
                }
            ]
        },
        {
            "name": "Sort",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Sorter",
                    "name": "sorter",
                    "id": 1
                }
            ]
        },
        {
            "name": "SearchQuery",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "offset",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Query",
                    "name": "query",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "Collapse",
                    "name": "collapse",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "Sort",
                    "name": "sort",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "getTotalCount",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "token",
                    "id": 9
                }
            ]
        },
        {
            "name": "ColumnsToGet",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ColumnReturnType",
                    "name": "return_type",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "column_names",
                    "id": 2
                }
            ]
        },
        {
            "name": "SearchRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ColumnsToGet",
                    "name": "columns_to_get",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "search_query",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "routing_values",
                    "id": 5
                }
            ]
        },
        {
            "name": "SearchResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "total_hits",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "rows",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_all_succeeded",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "next_token",
                    "id": 6
                }
            ]
        },
        {
            "name": "FieldSchema",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "field_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "FieldType",
                    "name": "field_type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "IndexOptions",
                    "name": "index_options",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "analyzer",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "index",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "doc_values",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "store",
                    "id": 7
                },
                {
                    "rule": "repeated",
                    "type": "FieldSchema",
                    "name": "field_schemas",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "is_array",
                    "id": 9
                }
            ]
        },
        {
            "name": "IndexSchema",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "FieldSchema",
                    "name": "field_schemas",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "IndexSetting",
                    "name": "index_setting",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "Sort",
                    "name": "index_sort",
                    "id": 3
                }
            ]
        },
        {
            "name": "IndexSetting",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "number_of_shards",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "routing_fields",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "routing_partition_size",
                    "id": 3
                }
            ]
        },
        {
            "name": "CreateSearchIndexRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "IndexSchema",
                    "name": "schema",
                    "id": 3
                }
            ]
        },
        {
            "name": "CreateSearchIndexResponse",
            "fields": []
        },
        {
            "name": "IndexInfo",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                }
            ]
        },
        {
            "name": "ListSearchIndexRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "ListSearchIndexResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "IndexInfo",
                    "name": "indices",
                    "id": 1
                }
            ]
        },
        {
            "name": "DeleteSearchIndexRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                }
            ]
        },
        {
            "name": "DeleteSearchIndexResponse",
            "fields": []
        },
        {
            "name": "SyncStat",
            "fields": [
                {
                    "rule": "optional",
                    "type": "SyncPhase",
                    "name": "sync_phase",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "current_sync_timestamp",
                    "id": 2
                }
            ]
        },
        {
            "name": "DescribeSearchIndexRequest",
            "fields": [
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                }
            ]
        },
        {
            "name": "DescribeSearchIndexResponse",
            "fields": [
                {
                    "rule": "optional",
                    "type": "IndexSchema",
                    "name": "schema",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "SyncStat",
                    "name": "sync_stat",
                    "id": 2
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "QueryType",
            "values": [
                {
                    "name": "MATCH_QUERY",
                    "id": 1
                },
                {
                    "name": "MATCH_PHRASE_QUERY",
                    "id": 2
                },
                {
                    "name": "TERM_QUERY",
                    "id": 3
                },
                {
                    "name": "RANGE_QUERY",
                    "id": 4
                },
                {
                    "name": "PREFIX_QUERY",
                    "id": 5
                },
                {
                    "name": "BOOL_QUERY",
                    "id": 6
                },
                {
                    "name": "CONST_SCORE_QUERY",
                    "id": 7
                },
                {
                    "name": "FUNCTION_SCORE_QUERY",
                    "id": 8
                },
                {
                    "name": "NESTED_QUERY",
                    "id": 9
                },
                {
                    "name": "WILDCARD_QUERY",
                    "id": 10
                },
                {
                    "name": "MATCH_ALL_QUERY",
                    "id": 11
                },
                {
                    "name": "GEO_BOUNDING_BOX_QUERY",
                    "id": 12
                },
                {
                    "name": "GEO_DISTANCE_QUERY",
                    "id": 13
                },
                {
                    "name": "GEO_POLYGON_QUERY",
                    "id": 14
                },
                {
                    "name": "TERMS_QUERY",
                    "id": 15
                }
            ]
        },
        {
            "name": "QueryOperator",
            "values": [
                {
                    "name": "OR",
                    "id": 1
                },
                {
                    "name": "AND",
                    "id": 2
                }
            ]
        },
        {
            "name": "ScoreMode",
            "values": [
                {
                    "name": "SCORE_MODE_NONE",
                    "id": 1
                },
                {
                    "name": "SCORE_MODE_AVG",
                    "id": 2
                },
                {
                    "name": "SCORE_MODE_MAX",
                    "id": 3
                },
                {
                    "name": "SCORE_MODE_TOTAL",
                    "id": 4
                },
                {
                    "name": "SCORE_MODE_MIN",
                    "id": 5
                }
            ]
        },
        {
            "name": "SortOrder",
            "values": [
                {
                    "name": "SORT_ORDER_ASC",
                    "id": 0
                },
                {
                    "name": "SORT_ORDER_DESC",
                    "id": 1
                }
            ]
        },
        {
            "name": "SortMode",
            "values": [
                {
                    "name": "SORT_MODE_MIN",
                    "id": 0
                },
                {
                    "name": "SORT_MODE_MAX",
                    "id": 1
                },
                {
                    "name": "SORT_MODE_AVG",
                    "id": 2
                }
            ]
        },
        {
            "name": "GeoDistanceType",
            "values": [
                {
                    "name": "GEO_DISTANCE_ARC",
                    "id": 0
                },
                {
                    "name": "GEO_DISTANCE_PLANE",
                    "id": 1
                }
            ]
        },
        {
            "name": "ColumnReturnType",
            "values": [
                {
                    "name": "RETURN_ALL",
                    "id": 1
                },
                {
                    "name": "RETURN_SPECIFIED",
                    "id": 2
                },
                {
                    "name": "RETURN_NONE",
                    "id": 3
                }
            ]
        },
        {
            "name": "IndexOptions",
            "values": [
                {
                    "name": "DOCS",
                    "id": 1
                },
                {
                    "name": "FREQS",
                    "id": 2
                },
                {
                    "name": "POSITIONS",
                    "id": 3
                },
                {
                    "name": "OFFSETS",
                    "id": 4
                }
            ]
        },
        {
            "name": "FieldType",
            "values": [
                {
                    "name": "LONG",
                    "id": 1
                },
                {
                    "name": "DOUBLE",
                    "id": 2
                },
                {
                    "name": "BOOLEAN",
                    "id": 3
                },
                {
                    "name": "KEYWORD",
                    "id": 4
                },
                {
                    "name": "TEXT",
                    "id": 5
                },
                {
                    "name": "NESTED",
                    "id": 6
                },
                {
                    "name": "GEO_POINT",
                    "id": 7
                }
            ]
        },
        {
            "name": "SyncPhase",
            "values": [
                {
                    "name": "FULL",
                    "id": 1
                },
                {
                    "name": "INCR",
                    "id": 2
                }
            ]
        }
    ]
}).build();