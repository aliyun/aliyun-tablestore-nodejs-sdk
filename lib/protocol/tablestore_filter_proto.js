module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "tablestore.filter.proto",
    "messages": [
        {
            "name": "SingleColumnValueFilter",
            "fields": [
                {
                    "rule": "required",
                    "type": "ComparatorType",
                    "name": "comparator",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "column_name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "column_value",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "filter_if_missing",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "latest_version_only",
                    "id": 5
                }
            ]
        },
        {
            "name": "CompositeColumnValueFilter",
            "fields": [
                {
                    "rule": "required",
                    "type": "LogicalOperator",
                    "name": "combinator",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "Filter",
                    "name": "sub_filters",
                    "id": 2
                }
            ]
        },
        {
            "name": "ColumnPaginationFilter",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "offset",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                }
            ]
        },
        {
            "name": "Filter",
            "fields": [
                {
                    "rule": "required",
                    "type": "FilterType",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "filter",
                    "id": 2
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "FilterType",
            "values": [
                {
                    "name": "FT_SINGLE_COLUMN_VALUE",
                    "id": 1
                },
                {
                    "name": "FT_COMPOSITE_COLUMN_VALUE",
                    "id": 2
                },
                {
                    "name": "FT_COLUMN_PAGINATION",
                    "id": 3
                }
            ]
        },
        {
            "name": "ComparatorType",
            "values": [
                {
                    "name": "CT_EQUAL",
                    "id": 1
                },
                {
                    "name": "CT_NOT_EQUAL",
                    "id": 2
                },
                {
                    "name": "CT_GREATER_THAN",
                    "id": 3
                },
                {
                    "name": "CT_GREATER_EQUAL",
                    "id": 4
                },
                {
                    "name": "CT_LESS_THAN",
                    "id": 5
                },
                {
                    "name": "CT_LESS_EQUAL",
                    "id": 6
                }
            ]
        },
        {
            "name": "LogicalOperator",
            "values": [
                {
                    "name": "LO_NOT",
                    "id": 1
                },
                {
                    "name": "LO_AND",
                    "id": 2
                },
                {
                    "name": "LO_OR",
                    "id": 3
                }
            ]
        }
    ]
}).build();