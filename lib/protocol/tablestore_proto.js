module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "tablestore.proto",
    "messages": [
        {
            "name": "Error",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "code",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "message",
                    "id": 2
                }
            ]
        },
        {
            "name": "PrimaryKeySchema",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "PrimaryKeyType",
                    "name": "type",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "PrimaryKeyOption",
                    "name": "option",
                    "id": 3
                }
            ]
        },
        {
            "name": "PartitionRange",
            "fields": [
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "begin",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "end",
                    "id": 2
                }
            ]
        },
        {
            "name": "TableOptions",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "time_to_live",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_versions",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "BloomFilterType",
                    "name": "bloom_filter_type",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "block_size",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "deviation_cell_version_in_sec",
                    "id": 5
                }
            ]
        },
        {
            "name": "TableMeta",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "PrimaryKeySchema",
                    "name": "primary_key",
                    "id": 2
                }
            ]
        },
        {
            "name": "Condition",
            "fields": [
                {
                    "rule": "required",
                    "type": "RowExistenceExpectation",
                    "name": "row_existence",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "column_condition",
                    "id": 2
                }
            ]
        },
        {
            "name": "CapacityUnit",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "read",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "write",
                    "id": 2
                }
            ]
        },
        {
            "name": "ReservedThroughputDetails",
            "fields": [
                {
                    "rule": "required",
                    "type": "CapacityUnit",
                    "name": "capacity_unit",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "last_increase_time",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "last_decrease_time",
                    "id": 3
                }
            ]
        },
        {
            "name": "ReservedThroughput",
            "fields": [
                {
                    "rule": "required",
                    "type": "CapacityUnit",
                    "name": "capacity_unit",
                    "id": 1
                }
            ]
        },
        {
            "name": "ConsumedCapacity",
            "fields": [
                {
                    "rule": "required",
                    "type": "CapacityUnit",
                    "name": "capacity_unit",
                    "id": 1
                }
            ]
        },
        {
            "name": "CreateTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "TableMeta",
                    "name": "table_meta",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "ReservedThroughput",
                    "name": "reserved_throughput",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TableOptions",
                    "name": "table_options",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "PartitionRange",
                    "name": "partitions",
                    "id": 4
                }
            ]
        },
        {
            "name": "CreateTableResponse",
            "fields": []
        },
        {
            "name": "UpdateTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "ReservedThroughput",
                    "name": "reserved_throughput",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "TableOptions",
                    "name": "table_options",
                    "id": 3
                }
            ]
        },
        {
            "name": "UpdateTableResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ReservedThroughputDetails",
                    "name": "reserved_throughput_details",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "TableOptions",
                    "name": "table_options",
                    "id": 2
                }
            ]
        },
        {
            "name": "DescribeTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "DescribeTableResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "TableMeta",
                    "name": "table_meta",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "ReservedThroughputDetails",
                    "name": "reserved_throughput_details",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "TableOptions",
                    "name": "table_options",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "TableStatus",
                    "name": "table_status",
                    "id": 4
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "shard_splits",
                    "id": 6
                }
            ]
        },
        {
            "name": "ListTableRequest",
            "fields": []
        },
        {
            "name": "ListTableResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "table_names",
                    "id": 1
                }
            ]
        },
        {
            "name": "DeleteTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "DeleteTableResponse",
            "fields": []
        },
        {
            "name": "LoadTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "LoadTableResponse",
            "fields": []
        },
        {
            "name": "UnloadTableRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                }
            ]
        },
        {
            "name": "UnloadTableResponse",
            "fields": []
        },
        {
            "name": "TimeRange",
            "fields": [
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "start_time",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "end_time",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "specific_time",
                    "id": 3
                }
            ]
        },
        {
            "name": "ReturnContent",
            "fields": [
                {
                    "rule": "optional",
                    "type": "ReturnType",
                    "name": "return_type",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "primary_key",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "columns_to_get",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "TimeRange",
                    "name": "time_range",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_versions",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "cache_blocks",
                    "id": 6,
                    "options": {
                        "default": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "filter",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "start_column",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "end_column",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "token",
                    "id": 10
                }
            ]
        },
        {
            "name": "GetRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "row",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "next_token",
                    "id": 3
                }
            ]
        },
        {
            "name": "UpdateRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "row_change",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "Condition",
                    "name": "condition",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ReturnContent",
                    "name": "return_content",
                    "id": 4
                }
            ]
        },
        {
            "name": "UpdateRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "row",
                    "id": 2
                }
            ]
        },
        {
            "name": "PutRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "row",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "Condition",
                    "name": "condition",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ReturnContent",
                    "name": "return_content",
                    "id": 4
                }
            ]
        },
        {
            "name": "PutRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "row",
                    "id": 2
                }
            ]
        },
        {
            "name": "DeleteRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "primary_key",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "Condition",
                    "name": "condition",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ReturnContent",
                    "name": "return_content",
                    "id": 4
                }
            ]
        },
        {
            "name": "DeleteRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "row",
                    "id": 2
                }
            ]
        },
        {
            "name": "TableInBatchGetRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "primary_key",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "token",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "columns_to_get",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "TimeRange",
                    "name": "time_range",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_versions",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "cache_blocks",
                    "id": 7,
                    "options": {
                        "default": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "filter",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "start_column",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "end_column",
                    "id": 10
                }
            ]
        },
        {
            "name": "BatchGetRowRequest",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TableInBatchGetRowRequest",
                    "name": "tables",
                    "id": 1
                }
            ]
        },
        {
            "name": "RowInBatchGetRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_ok",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "Error",
                    "name": "error",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "row",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "next_token",
                    "id": 5
                }
            ]
        },
        {
            "name": "TableInBatchGetRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "RowInBatchGetRowResponse",
                    "name": "rows",
                    "id": 2
                }
            ]
        },
        {
            "name": "BatchGetRowResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TableInBatchGetRowResponse",
                    "name": "tables",
                    "id": 1
                }
            ]
        },
        {
            "name": "RowInBatchWriteRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "OperationType",
                    "name": "type",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "row_change",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "Condition",
                    "name": "condition",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "ReturnContent",
                    "name": "return_content",
                    "id": 4
                }
            ]
        },
        {
            "name": "TableInBatchWriteRowRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "RowInBatchWriteRowRequest",
                    "name": "rows",
                    "id": 2
                }
            ]
        },
        {
            "name": "BatchWriteRowRequest",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TableInBatchWriteRowRequest",
                    "name": "tables",
                    "id": 1
                }
            ]
        },
        {
            "name": "RowInBatchWriteRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "is_ok",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "Error",
                    "name": "error",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "row",
                    "id": 4
                }
            ]
        },
        {
            "name": "TableInBatchWriteRowResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "RowInBatchWriteRowResponse",
                    "name": "rows",
                    "id": 2
                }
            ]
        },
        {
            "name": "BatchWriteRowResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "TableInBatchWriteRowResponse",
                    "name": "tables",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetRangeRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "Direction",
                    "name": "direction",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "columns_to_get",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "TimeRange",
                    "name": "time_range",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "max_versions",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 6
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "inclusive_start_primary_key",
                    "id": 7
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "exclusive_end_primary_key",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "cache_blocks",
                    "id": 9,
                    "options": {
                        "default": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "filter",
                    "id": 10
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "start_column",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "end_column",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "token",
                    "id": 13
                }
            ]
        },
        {
            "name": "GetRangeResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "bytes",
                    "name": "rows",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "next_start_primary_key",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "bytes",
                    "name": "next_token",
                    "id": 4
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "PrimaryKeyType",
            "values": [
                {
                    "name": "INTEGER",
                    "id": 1
                },
                {
                    "name": "STRING",
                    "id": 2
                },
                {
                    "name": "BINARY",
                    "id": 3
                }
            ]
        },
        {
            "name": "PrimaryKeyOption",
            "values": [
                {
                    "name": "AUTO_INCREMENT",
                    "id": 1
                }
            ]
        },
        {
            "name": "BloomFilterType",
            "values": [
                {
                    "name": "NONE",
                    "id": 1
                },
                {
                    "name": "CELL",
                    "id": 2
                },
                {
                    "name": "ROW",
                    "id": 3
                }
            ]
        },
        {
            "name": "TableStatus",
            "values": [
                {
                    "name": "ACTIVE",
                    "id": 1
                },
                {
                    "name": "INACTIVE",
                    "id": 2
                },
                {
                    "name": "LOADING",
                    "id": 3
                },
                {
                    "name": "UNLOADING",
                    "id": 4
                },
                {
                    "name": "UPDATING",
                    "id": 5
                }
            ]
        },
        {
            "name": "RowExistenceExpectation",
            "values": [
                {
                    "name": "IGNORE",
                    "id": 0
                },
                {
                    "name": "EXPECT_EXIST",
                    "id": 1
                },
                {
                    "name": "EXPECT_NOT_EXIST",
                    "id": 2
                }
            ]
        },
        {
            "name": "ReturnType",
            "values": [
                {
                    "name": "RT_NONE",
                    "id": 0
                },
                {
                    "name": "RT_PK",
                    "id": 1
                }
            ]
        },
        {
            "name": "OperationType",
            "values": [
                {
                    "name": "PUT",
                    "id": 1
                },
                {
                    "name": "UPDATE",
                    "id": 2
                },
                {
                    "name": "DELETE",
                    "id": 3
                }
            ]
        },
        {
            "name": "Direction",
            "values": [
                {
                    "name": "FORWARD",
                    "id": 0
                },
                {
                    "name": "BACKWARD",
                    "id": 1
                }
            ]
        }
    ]
}).build();