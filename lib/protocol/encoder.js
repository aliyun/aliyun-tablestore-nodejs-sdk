var TableStore = require('../core');
var tsProtos = require('./tablestore_proto.js').tablestore.proto;
var tsFilterProtos = require('./tablestore_filter_proto.js').tablestore.filter.proto;

COLUMN_CONDITION_TYPE_MAP = {
    COMPOSITE_COLUMN_CONDITION: tsFilterProtos.FT_COMPOSITE_COLUMN_VALUE,
    SINGLE_COLUMN_CONDITION: tsFilterProtos.FT_SINGLE_COLUMN_VALUE,
}

TableStore.encoder = {
    encode: function (operation, params) {
        return tsMap[operation](params);
    },
    encodeCreateTable: function (params) {
        var request = new tsProtos.CreateTableRequest();
        request.reserved_throughput = {
            capacity_unit: params.reservedThroughput.capacityUnit
        };
        request.table_meta = {
            table_name: params.tableMeta.tableName,
            primary_key: params.tableMeta.primaryKey
        };
        if (params.tableOptions) {
            request.table_options = {
                time_to_live: params.tableOptions.timeToLive,
                max_versions: params.tableOptions.maxVersions
            };
            if (params.tableOptions.maxTimeDeviation) {
                request.table_options.deviation_cell_version_in_sec =
                    params.tableOptions.maxTimeDeviation
            }
        }
        return request;
    },
    encodeListTable: function (params) {
        var request = new tsProtos.ListTableRequest();
        return request;
    },
    encodeDeleteTable: function (params) {
        var request = new tsProtos.DeleteTableRequest();
        request.table_name = params.tableName;
        return request;
    },
    encodeUpdateTable: function (params) {
        var request = new tsProtos.UpdateTableRequest();
        request.table_name = params.tableName;
        request.reserved_throughput = {
            capacity_unit: params.reservedThroughput.capacityUnit
        };
        request.table_options = {
            time_to_live: params.tableOptions.timeToLive,
            max_versions: params.tableOptions.maxVersions,
            deviation_cell_version_in_sec: params.tableOptions.maxTimeDeviation
        };

        return request;
    },
    encodeDescribeTable: function (params) {
        var request = new tsProtos.DescribeTableRequest();
        request.table_name = params.tableName;
        return request;
    },

    encodeGetRow: function (params) {
        var request = new tsProtos.GetRowRequest({
            table_name: params.tableName,
            primary_key: TableStore.PlainBufferBuilder.serializePrimaryKey(params.primaryKey),
            attribute_columns: params.attributeColumns
        });

        if (params.maxVersions) {
            request.max_versions = params.maxVersions;
        } else {
            request.max_versions = 1;
        }

        if (params.columnFilter) {
            var pbFilter = new tsFilterProtos.Filter();
            TableStore.encoder._makeColumnCondition(pbFilter, params.columnFilter);
            request.filter = pbFilter.encode();
        }

        if (params.timeRange) {
            request.time_range = {
                start_time: params.timeRange.startTime,
                end_time: params.timeRange.endTime,
                specific_time: params.timeRange.specificTime
            };
        }

        if (params.startColumn) {
            request.start_column = params.startColumn;
        }
        if (params.endColumn) {
            request.end_column = params.endColumn;
        }

        if (params.columnsToGet) {
            request.columns_to_get = params.columnsToGet
        }

        return request;
    },
    encodePutRow: function (params) {
        var request = new tsProtos.PutRowRequest();
        request.table_name = params.tableName;
        request.row = TableStore.PlainBufferBuilder.serializeForPutRow(params.primaryKey, params.attributeColumns);

        if (params.condition === undefined || params.condition === null) {
            params.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        request.condition = {};
        TableStore.encoder._makeCondition(request.condition, params.condition);
        if (params.returnContent && params.returnContent.returnType) {
            request.return_content = {
                return_type: params.returnContent.returnType
            };
        }
        return request;
    },
    encodeUpdateRow: function (params) {
        var request = new tsProtos.UpdateRowRequest();
        request.table_name = params.tableName;
        request.row_change = TableStore.PlainBufferBuilder.serializeForUpdateRow(params.primaryKey, params.updateOfAttributeColumns);

        if (params.condition === undefined || params.condition === null) {
            params.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        request.condition = {};
        TableStore.encoder._makeCondition(request.condition, params.condition);

        if (params.returnContent && params.returnContent.returnType) {
            request.return_content = {
                return_type: params.returnContent.returnType
            };
        }
        return request;
    },
    encodeDeleteRow: function (params) {
        var request = new tsProtos.DeleteRowRequest();
        request.table_name = params.tableName;
        request.primary_key = TableStore.PlainBufferBuilder.serializeForDeleteRow(params.primaryKey);

        if (params.condition === undefined || params.condition === null) {
            params.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        request.condition = {};
        TableStore.encoder._makeCondition(request.condition, params.condition);

        if (params.returnContent && params.returnContent.returnType) {
            request.return_content = {
                return_type: params.returnContent.returnType
            };
        }
        return request;
    },
    encodeGetRange: function (params) {
        var request = new tsProtos.GetRangeRequest({
            table_name: params.tableName,
            inclusive_start_primary_key: TableStore.PlainBufferBuilder.serializePrimaryKey(params.inclusiveStartPrimaryKey),
            exclusive_end_primary_key: TableStore.PlainBufferBuilder.serializePrimaryKey(params.exclusiveEndPrimaryKey),
            direction: params.direction
        });

        if (params.maxVersions) {
            request.max_versions = params.maxVersions;
        } else {
            request.max_versions = 1;
        }

        if (params.columnFilter) {
            var pbFilter = new tsFilterProtos.Filter();
            TableStore.encoder._makeColumnCondition(pbFilter, params.columnFilter);
            request.filter = pbFilter.encode();
        }

        if (params.limit) {
            request.limit = params.limit;
        }

        if (params.timeRange) {
            request.time_range = {
                start_time: params.timeRange.startTime,
                end_time: params.timeRange.endTime,
                specific_time: params.timeRange.specificTime
            };
        }

        if (params.startColumn) {
            request.start_column = params.startColumn;
        }
        if (params.endColumn) {
            request.end_column = params.endColumn;
        }

        if (params.columnsToGet) {
            request.columns_to_get = params.columnsToGet
        }

        return request;
    },
    encodeBatchGetRow: function (params) {
        if (params.tables === undefined || params.tables === null) {
            throw new Error('params.tables is not correct');
        }

        var request = new tsProtos.BatchGetRowRequest();
        for (var i = 0; i < params.tables.length; i++) {
            var item = {
                table_name: params.tables[i].tableName,
                primary_key: [],
            };

            for (var pk in params.tables[i].primaryKey) {
                item.primary_key.push(TableStore.PlainBufferBuilder.serializePrimaryKey(params.tables[i].primaryKey[pk]));
            }

            if (params.tables[i].columnFilter) {
                var pbFilter = new tsFilterProtos.Filter();
                TableStore.encoder._makeColumnCondition(pbFilter, params.tables[i].columnFilter);
                item.filter = pbFilter.encode();
            }

            if (params.tables[i].maxVersions) {
                item.max_versions = params.tables[i].maxVersions;
            } else {
                item.max_versions = 1;
            }

            if (params.tables[i].timeRange) {
                item.time_range = {
                    start_time: params.tables[i].timeRange.startTime,
                    end_time: params.tables[i].timeRange.endTime,
                    specific_time: params.tables[i].timeRange.specificTime
                };
            }

            if (params.tables[i].startColumn) {
                item.start_column = params.tables[i].startColumn;
            }
            if (params.tables[i].endColumn) {
                item.end_column = params.tables[i].endColumn;
            }

            if (params.tables[i].columnsToGet) {
                item.columns_to_get = params.tables[i].columnsToGet
            }

            request.tables.push(item);
        }

        return request;
    },
    encodeBatchWriteRow: function (params) {
        if (params.tables === undefined || params.tables === null || params.tables.length <= 0) {
            throw new Error('params.tables is not correct');
        }
        var request = new tsProtos.BatchWriteRowRequest();
        for (var i = 0; i < params.tables.length; i++) {
            var item = {
                table_name: params.tables[i].tableName,
                rows: []
            };

            for (var attr in params.tables[i].rows) {
                var row = {};
                row.type = params.tables[i].rows[attr].type;
                switch (params.tables[i].rows[attr].type) {
                    case 'PUT':
                        row.row_change = TableStore.PlainBufferBuilder.serializeForPutRow(
                            params.tables[i].rows[attr].primaryKey, params.tables[i].rows[attr].attributeColumns);
                        break;
                    case 'UPDATE':
                        row.row_change = TableStore.PlainBufferBuilder.serializeForUpdateRow(
                            params.tables[i].rows[attr].primaryKey, params.tables[i].rows[attr].attributeColumns);
                        break;
                    case 'DELETE':
                        row.row_change = TableStore.PlainBufferBuilder.serializeForDeleteRow(
                            params.tables[i].rows[attr].primaryKey, params.tables[i].rows[attr].attributeColumns);
                        break;
                    default:
                        throw new Error('batchwriterow type is error:' + params.tables[i].rows[attr].type);
                }

                if (params.tables[i].rows[attr].condition) {
                    row.condition = {};
                    TableStore.encoder._makeCondition(row.condition, params.tables[i].rows[attr].condition);
                }

                if (params.tables[i].rows[attr].returnContent &&
                    params.tables[i].rows[attr].returnContent.returnType) {
                    row.return_content = { 'return_type': params.tables[i].rows[attr].returnContent.returnType };
                }

                item.rows.push(row);
            }

            request.tables.push(item);
        }
        return request;
    },
    _makeColumnCondition: function (proto, column_condition) {
        if (column_condition === null) {
            return;
        }

        if (!column_condition instanceof TableStore.ColumnCondition) {
            throw new Error("column condition should be an instance of ColumnCondition");
        }

        proto.type = column_condition.getType();
        if (proto.type == null) {
            throw new Error("column_condition_type should be one of TableStore.ColumnConditionType");
        }

        // condition
        if (column_condition instanceof TableStore.CompositeCondition) {
            proto.filter = TableStore.encoder._makeCompositeCondition(column_condition);
        } else if (column_condition instanceof TableStore.SingleColumnCondition) {
            proto.filter = TableStore.encoder._makeSingleColumnCondition(column_condition);
        } else if (column_condition instanceof TableStore.ColumnPaginationFilter) {
            proto.filter = TableStore.encoder._makeColumnPaginationFilter(column_condition);
        } else {
            throw new Error("expect CompositeCondition, RelationCondition, ColumnPaginationFilter but not ");
        }
    },

    _makeCompositeCondition(condition) {
        var proto = new tsFilterProtos.CompositeColumnValueFilter();
        proto.combinator = condition.combinator;
        if (proto.combinator === undefined || proto.combinator === null) {
            throw new Error("LogicalOperator should be one of TableStore.LogicalOperator");
        }

        for (sub in condition.sub_conditions) {
            var subFilter = {};
            TableStore.encoder._makeColumnCondition(subFilter, condition.sub_conditions[sub]);
            proto.sub_filters.push(subFilter);
        }
        return proto.toBuffer();
    },

    _makeSingleColumnCondition(condition) {
        var proto = new tsFilterProtos.SingleColumnValueFilter();

        proto.comparator = condition.comparator;
        if (proto.comparator === null) {
            throw new Error("ComparatorType should be one of [%s], not %s");
        }

        proto.column_name = condition.columnName;
        proto.column_value = TableStore.PlainBufferBuilder.serializeColumnValue(condition.columnValue);
        proto.filter_if_missing = !condition.passIfMissing;
        proto.latest_version_only = condition.latestVersionOnly;
        return proto.toBuffer();
    },

    _makeColumnPaginationFilter(condition) {
        var proto = new tsFilterProtos.ColumnPaginationFilter();
        proto.offset = condition.offset;
        proto.limit = condition.limit;
        return proto.toBuffer();
    },

    _makeCondition: function (proto, condition) {
        if (!condition instanceof TableStore.Condition) {
            throw new Error("condition should be an instance of TableStore.Condition");
        }

        proto.row_existence = condition.rowExistenceExpectation;
        if (proto.row_existence === undefined || proto.row_existence === null) {
            throw new Error("rowExistenceExpectation should be one of TableStore.RowExistenceExpectation");
        }

        if (condition.columnCondition != null) {
            var pbFilter = new tsFilterProtos.Filter();
            TableStore.encoder._makeColumnCondition(pbFilter, condition.columnCondition);
            proto.column_condition = pbFilter.encode();
        }
    }
};

var tsMap = {
    'createTable': TableStore.encoder.encodeCreateTable,
    'listTable': TableStore.encoder.encodeListTable,
    'deleteTable': TableStore.encoder.encodeDeleteTable,
    'updateTable': TableStore.encoder.encodeUpdateTable,
    'describeTable': TableStore.encoder.encodeDescribeTable,
    'getRow': TableStore.encoder.encodeGetRow,
    'putRow': TableStore.encoder.encodePutRow,
    'updateRow': TableStore.encoder.encodeUpdateRow,
    'deleteRow': TableStore.encoder.encodeDeleteRow,
    'getRange': TableStore.encoder.encodeGetRange,
    'batchGetRow': TableStore.encoder.encodeBatchGetRow,
    'batchWriteRow': TableStore.encoder.encodeBatchWriteRow
};
