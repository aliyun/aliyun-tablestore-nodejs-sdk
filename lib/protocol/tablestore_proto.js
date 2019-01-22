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
            "name": "DefinedColumnSchema",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "DefinedColumnType",
                    "name": "type",
                    "id": 2
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
            "name": "IndexMeta",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "name",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "primary_key",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "defined_column",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "IndexUpdateMode",
                    "name": "index_update_mode",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "IndexType",
                    "name": "index_type",
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
                },
                {
                    "rule": "repeated",
                    "type": "DefinedColumnSchema",
                    "name": "defined_column",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "IndexMeta",
                    "name": "index_meta",
                    "id": 4
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
            "name": "StreamSpecification",
            "fields": [
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "enable_stream",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "expiration_time",
                    "id": 2
                }
            ]
        },
        {
            "name": "StreamDetails",
            "fields": [
                {
                    "rule": "required",
                    "type": "bool",
                    "name": "enable_stream",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "stream_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "expiration_time",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "last_enable_time",
                    "id": 4
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
                },
                {
                    "rule": "optional",
                    "type": "StreamSpecification",
                    "name": "stream_spec",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "IndexMeta",
                    "name": "index_metas",
                    "id": 7
                }
            ]
        },
        {
            "name": "CreateTableResponse",
            "fields": []
        },
        {
            "name": "CreateIndexRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "main_table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "IndexMeta",
                    "name": "index_meta",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "include_base_data",
                    "id": 3
                }
            ]
        },
        {
            "name": "CreateIndexResponse",
            "fields": []
        },
        {
            "name": "DropIndexRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "main_table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "index_name",
                    "id": 2
                }
            ]
        },
        {
            "name": "DropIndexResponse",
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
                },
                {
                    "rule": "optional",
                    "type": "StreamSpecification",
                    "name": "stream_spec",
                    "id": 4
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
                },
                {
                    "rule": "optional",
                    "type": "StreamDetails",
                    "name": "stream_details",
                    "id": 3
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
                    "rule": "optional",
                    "type": "StreamDetails",
                    "name": "stream_details",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "shard_splits",
                    "id": 6
                },
                {
                    "rule": "repeated",
                    "type": "IndexMeta",
                    "name": "index_metas",
                    "id": 8
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
                },
                {
                    "rule": "repeated",
                    "type": "string",
                    "name": "return_column_names",
                    "id": 2
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 11
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 5
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 5
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 5
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 2
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
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "type": "DataBlockType",
                    "name": "data_block_type_hint",
                    "id": 15,
                    "options": {
                        "default": "DBT_PLAIN_BUFFER"
                    }
                },
                {
                    "rule": "optional",
                    "type": "bool",
                    "name": "return_entire_primary_keys",
                    "id": 16,
                    "options": {
                        "default": true
                    }
                },
                {
                    "rule": "optional",
                    "type": "CompressType",
                    "name": "compress_type_hint",
                    "id": 17,
                    "options": {
                        "default": "CPT_NONE"
                    }
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
                },
                {
                    "rule": "optional",
                    "type": "DataBlockType",
                    "name": "data_block_type",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "type": "CompressType",
                    "name": "compress_type",
                    "id": 6
                }
            ]
        },
        {
            "name": "StartLocalTransactionRequest",
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
                }
            ]
        },
        {
            "name": "StartLocalTransactionResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 1
                }
            ]
        },
        {
            "name": "CommitTransactionRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 1
                }
            ]
        },
        {
            "name": "CommitTransactionResponse",
            "fields": []
        },
        {
            "name": "AbortTransactionRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "transaction_id",
                    "id": 1
                }
            ]
        },
        {
            "name": "AbortTransactionResponse",
            "fields": []
        },
        {
            "name": "ListStreamRequest",
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
            "name": "Stream",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stream_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "creation_time",
                    "id": 3
                }
            ]
        },
        {
            "name": "ListStreamResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "Stream",
                    "name": "streams",
                    "id": 1
                }
            ]
        },
        {
            "name": "StreamShard",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "shard_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "parent_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "parent_sibling_id",
                    "id": 3
                }
            ]
        },
        {
            "name": "DescribeStreamRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stream_id",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "inclusive_start_shard_id",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "shard_limit",
                    "id": 3
                }
            ]
        },
        {
            "name": "DescribeStreamResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stream_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "expiration_time",
                    "id": 2
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 3
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "creation_time",
                    "id": 4
                },
                {
                    "rule": "required",
                    "type": "StreamStatus",
                    "name": "stream_status",
                    "id": 5
                },
                {
                    "rule": "repeated",
                    "type": "StreamShard",
                    "name": "shards",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "next_shard_id",
                    "id": 7
                }
            ]
        },
        {
            "name": "GetShardIteratorRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "stream_id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "shard_id",
                    "id": 2
                }
            ]
        },
        {
            "name": "GetShardIteratorResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "shard_iterator",
                    "id": 1
                }
            ]
        },
        {
            "name": "GetStreamRecordRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "shard_iterator",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "limit",
                    "id": 2
                }
            ]
        },
        {
            "name": "GetStreamRecordResponse",
            "fields": [
                {
                    "rule": "repeated",
                    "type": "StreamRecord",
                    "name": "stream_records",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "type": "string",
                    "name": "next_shard_iterator",
                    "id": 2
                }
            ],
            "messages": [
                {
                    "name": "StreamRecord",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "ActionType",
                            "name": "action_type",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "bytes",
                            "name": "record",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "ComputeSplitPointsBySizeRequest",
            "fields": [
                {
                    "rule": "required",
                    "type": "string",
                    "name": "table_name",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "int64",
                    "name": "split_size",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int64",
                    "name": "split_size_unit_in_byte",
                    "id": 3
                }
            ]
        },
        {
            "name": "ComputeSplitPointsBySizeResponse",
            "fields": [
                {
                    "rule": "required",
                    "type": "ConsumedCapacity",
                    "name": "consumed",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "type": "PrimaryKeySchema",
                    "name": "schema",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "type": "bytes",
                    "name": "split_points",
                    "id": 3
                },
                {
                    "rule": "repeated",
                    "type": "SplitLocation",
                    "name": "locations",
                    "id": 4
                }
            ],
            "messages": [
                {
                    "name": "SplitLocation",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "location",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "type": "sint64",
                            "name": "repeat",
                            "id": 2
                        }
                    ]
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
            "name": "DefinedColumnType",
            "values": [
                {
                    "name": "DCT_INTEGER",
                    "id": 1
                },
                {
                    "name": "DCT_DOUBLE",
                    "id": 2
                },
                {
                    "name": "DCT_BOOLEAN",
                    "id": 3
                },
                {
                    "name": "DCT_STRING",
                    "id": 4
                },
                {
                    "name": "DCT_BLOB",
                    "id": 7
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
            "name": "DataBlockType",
            "values": [
                {
                    "name": "DBT_PLAIN_BUFFER",
                    "id": 0
                },
                {
                    "name": "DBT_SIMPLE_ROW_MATRIX",
                    "id": 1
                }
            ]
        },
        {
            "name": "CompressType",
            "values": [
                {
                    "name": "CPT_NONE",
                    "id": 0
                }
            ]
        },
        {
            "name": "IndexUpdateMode",
            "values": [
                {
                    "name": "IUM_ASYNC_INDEX",
                    "id": 0
                },
                {
                    "name": "IUM_SYNC_INDEX",
                    "id": 1
                }
            ]
        },
        {
            "name": "IndexType",
            "values": [
                {
                    "name": "IT_GLOBAL_INDEX",
                    "id": 0
                },
                {
                    "name": "IT_LOCAL_INDEX",
                    "id": 1
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
                },
                {
                    "name": "RT_AFTER_MODIFY",
                    "id": 2
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
        },
        {
            "name": "StreamStatus",
            "values": [
                {
                    "name": "STREAM_ENABLING",
                    "id": 1
                },
                {
                    "name": "STREAM_ACTIVE",
                    "id": 2
                }
            ]
        },
        {
            "name": "ActionType",
            "values": [
                {
                    "name": "PUT_ROW",
                    "id": 1
                },
                {
                    "name": "UPDATE_ROW",
                    "id": 2
                },
                {
                    "name": "DELETE_ROW",
                    "id": 3
                }
            ]
        }
    ]
}).build();
