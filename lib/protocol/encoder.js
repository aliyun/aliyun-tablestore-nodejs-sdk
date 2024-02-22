var TableStore = require('../core');

var BaseProto = require('./tablestore_compiled_proto.js');
var tsProtos = BaseProto.main.proto;
var tsFilterProtos = BaseProto.filter.proto;
var tsSearchProtos = BaseProto.search.proto;


COLUMN_CONDITION_TYPE_MAP = {
    COMPOSITE_COLUMN_CONDITION: tsFilterProtos.FT_COMPOSITE_COLUMN_VALUE,
    SINGLE_COLUMN_CONDITION: tsFilterProtos.FT_SINGLE_COLUMN_VALUE,
}

TableStore.encoder = {
    encode: function (operation, params) {
        return tsMap[operation](params);
    },

    encodeCreateTable: function (params) {
        if (!params.reservedThroughput || !params.tableOptions) {
            throw new Error('reservedThroughput and tableOptions are required');
        }

        var properties = {};

        var primaryKey = [];
        TableStore.util.arrayEach(params.tableMeta.primaryKey, function(pk) {
            primaryKey.push({
                name: pk.name,
                type: TableStore.PrimaryKeyType[pk.type] || pk.type,
                option: TableStore.PrimaryKeyOption[pk.option] || pk.option
            });
        });

        properties.tableMeta = {
            tableName: params.tableMeta.tableName,
            primaryKey: primaryKey
        };

        properties.reservedThroughput = {
            capacityUnit: params.reservedThroughput.capacityUnit
        };

        if (Object.prototype.toString.call(params.tableMeta.definedColumn) === '[object Array]') {
            properties.tableMeta.definedColumn = params.tableMeta.definedColumn;
        }

        if (params.tableOptions) {
            properties.tableOptions = {
                timeToLive: params.tableOptions.timeToLive,
                maxVersions: params.tableOptions.maxVersions,
                allowUpdate: params.tableOptions.allowUpdate
            };
            if (params.tableOptions.maxTimeDeviation) {
                properties.tableOptions.deviationCellVersionInSec =
                    params.tableOptions.maxTimeDeviation
            }
        }
        if (params.streamSpecification) {
            properties.streamSpec = {
                enableStream: params.streamSpecification.enableStream,
                expirationTime: params.streamSpecification.expirationTime
            }
        }
        if (Object.prototype.toString.call(params.indexMetas) === '[object Array]') {
            var indexMetas = [];
            TableStore.util.arrayEach(params.indexMetas, function(meta) {
                indexMetas.push({
                    name: meta.name,
                    primaryKey: meta.primaryKey,
                    definedColumn: meta.definedColumn,
                    indexUpdateMode: meta.indexUpdateMode || TableStore.IndexUpdateMode.IUM_ASYNC_INDEX,//默认增量
                    indexType: meta.indexType || TableStore.IndexType.IT_GLOBAL_INDEX,//IT_GLOBAL_INDEX
                });
            });
            properties.indexMetas = indexMetas;
        }

        var request = tsProtos.CreateTableRequest.create(properties);

        return request;
    },
    encodeListTable: function () {
        var request = tsProtos.ListTableRequest.create();
        return request;
    },
    encodeDeleteTable: function (params) {
        var properties = {
            tableName: params.tableName
        };

        var request = tsProtos.DeleteTableRequest.create(properties);

        return request;
    },
    encodeUpdateTable: function (params) {
        var properties = {
            tableName: params.tableName,
            tableOptions: {
                timeToLive: params.tableOptions.timeToLive,
                maxVersions: params.tableOptions.maxVersions,
                allowUpdate: params.tableOptions.allowUpdate,
                deviationCellVersionInSec: params.tableOptions.maxTimeDeviation
            }
        };

        if (params.reservedThroughput) {
            properties.reservedThroughput =  {
                capacityUnit: params.reservedThroughput.capacityUnit
            };
        }

        if (params.streamSpecification) {
            properties.streamSpec = {
                enableStream: params.streamSpecification.enableStream,
                expirationTime: params.streamSpecification.expirationTime
            }
        }

        var request = tsProtos.UpdateTableRequest.create(properties);

        return request;
    },
    encodeDescribeTable: function (params) {
        var properties = {
            tableName: params.tableName
        };
        var request = tsProtos.DescribeTableRequest.create(properties);
        return request;
    },

    encodeGetRow: function (params) {
        var properties = {
            tableName: params.tableName,
            primaryKey: TableStore.PlainBufferBuilder.serializePrimaryKey(params.primaryKey),
            attributeColumns: params.attributeColumns
        };

        if (params.maxVersions) {
            properties.maxVersions = params.maxVersions;
        } else {
            properties.maxVersions = 1;
        }

        if (params.columnFilter) {
            var filterProperties = {};
            TableStore.encoder._makeColumnCondition(filterProperties, params.columnFilter);

            var pbFilter = tsFilterProtos.Filter.create(filterProperties)
            var filterWriter = tsFilterProtos.Filter.encode(pbFilter);

            properties.filter = filterWriter.finish();
        }

        if (params.timeRange) {
            properties.timeRange = {
                startTime: params.timeRange.startTime,
                endTime: params.timeRange.endTime,
                specificTime: params.timeRange.specificTime
            };
        }

        if (params.startColumn) {
            properties.startColumn = params.startColumn;
        }
        if (params.endColumn) {
            properties.endColumn = params.endColumn;
        }

        if (params.columnsToGet) {
            properties.columnsToGet = params.columnsToGet
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }


        if (params.maxVersions) {
            properties.maxVersions = params.maxVersions;
        } else {
            properties.maxVersions = 1;
        }

        var request = tsProtos.GetRowRequest.create(properties);

        return request;
    },
    encodePutRow: function (params) {
        var properties = {
            tableName: params.tableName,
            row: TableStore.PlainBufferBuilder.serializeForPutRow(params.primaryKey, params.attributeColumns)
        };

        if (params.condition === undefined || params.condition === null) {
            properties.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        properties.condition = {};
        TableStore.encoder._makeCondition(properties.condition, params.condition);

        if (params.returnContent && params.returnContent.returnType) {
            properties.returnContent = {
                returnType: params.returnContent.returnType
            };
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.PutRowRequest.create(properties);
        return request;
    },
    encodeUpdateRow: function (params) {
        var properties = {
            tableName: params.tableName,
            rowChange: TableStore.PlainBufferBuilder.serializeForUpdateRow(params.primaryKey, params.updateOfAttributeColumns)
        };

        if (params.condition === undefined || params.condition === null) {
            params.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        properties.condition = {};
        TableStore.encoder._makeCondition(properties.condition, params.condition);

        if (params.returnContent && params.returnContent.returnType) {
            properties.returnContent = {
                returnType: params.returnContent.returnType,
                returnColumnNames: params.returnContent.returnColumns
            };
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.UpdateRowRequest.create(properties);

        return request;
    },
    encodeDeleteRow: function (params) {
        var properties = {
            tableName: params.tableName,
            primaryKey: TableStore.PlainBufferBuilder.serializeForDeleteRow(params.primaryKey)
        };

        if (params.condition === undefined || params.condition === null) {
            params.condtion = new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null);
        }
        properties.condition = {};
        TableStore.encoder._makeCondition(properties.condition, params.condition);

        if (params.returnContent && params.returnContent.returnType) {
            properties.returnContent = {
                returnType: params.returnContent.returnType
            };
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.DeleteRowRequest.create(properties);

        return request;
    },
    encodeGetRange: function (params) {
        var properties = {
            tableName: params.tableName,
            inclusiveStartPrimaryKey: TableStore.PlainBufferBuilder.serializePrimaryKey(params.inclusiveStartPrimaryKey),
            exclusiveEndPrimaryKey: TableStore.PlainBufferBuilder.serializePrimaryKey(params.exclusiveEndPrimaryKey),
            direction: tsProtos.Direction[params.direction]
        };

        if (params.maxVersions) {
            properties.maxVersions = params.maxVersions;
        } else {
            properties.maxVersions = 1;
        }

        if (params.columnFilter) {
            var filterProperties = {};
            TableStore.encoder._makeColumnCondition(filterProperties, params.columnFilter);

            var pbFilter = tsFilterProtos.Filter.create(filterProperties);
            var filterWriter = tsFilterProtos.Filter.encode(pbFilter);

            properties.filter = filterWriter.finish();
        }

        if (params.limit) {
            properties.limit = params.limit;
        }

        if (params.timeRange) {
            properties.timeRange = {
                startTime: params.timeRange.startTime,
                endTime: params.timeRange.endTime,
                specificTime: params.timeRange.specificTime
            };
        }

        if (params.startColumn) {
            properties.startColumn = params.startColumn;
        }
        if (params.endColumn) {
            properties.endColumn = params.endColumn;
        }

        if (params.columnsToGet) {
            properties.columnsToGet = params.columnsToGet
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.GetRangeRequest.create(properties);

        return request;
    },
    encodeBatchGetRow: function (params) {
        if (params.tables === undefined || params.tables === null) {
            throw new Error('params.tables is not correct');
        }

        var properties = {
            tables: []
        };

        for (var i = 0; i < params.tables.length; i++) {
            var item = {
                tableName: params.tables[i].tableName,
                primaryKey: [],
            };

            for (var pk in params.tables[i].primaryKey) {
                item.primaryKey.push(TableStore.PlainBufferBuilder.serializePrimaryKey(params.tables[i].primaryKey[pk]));
            }

            if (params.tables[i].columnFilter) {
                var filterProperties = {};
                TableStore.encoder._makeColumnCondition(filterProperties, params.tables[i].columnFilter);

                var pbFilter = tsFilterProtos.Filter.create(filterProperties);
                var filterWriter = tsFilterProtos.Filter.encode(pbFilter);

                item.filter = filterWriter.finish();
            }

            if (params.tables[i].maxVersions) {
                item.maxVersions = params.tables[i].maxVersions;
            } else {
                item.maxVersions = 1;
            }

            if (params.tables[i].timeRange) {
                item.timeRange = {
                    startTime: params.tables[i].timeRange.startTime,
                    endTime: params.tables[i].timeRange.endTime,
                    specificTime: params.tables[i].timeRange.specificTime
                };
            }

            if (params.tables[i].startColumn) {
                item.startColumn = params.tables[i].startColumn;
            }
            if (params.tables[i].endColumn) {
                item.endColumn = params.tables[i].endColumn;
            }

            if (params.tables[i].columnsToGet) {
                item.columnsToGet = params.tables[i].columnsToGet
            }

            properties.tables.push(item);
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.BatchGetRowRequest.create(properties);

        return request;
    },
    encodeBatchWriteRow: function (params) {
        if (params.tables === undefined || params.tables === null || params.tables.length <= 0) {
            throw new Error('params.tables is not correct');
        }

        var properties = {
            tables: []
        };

        for (var i = 0; i < params.tables.length; i++) {
            var item = {
                tableName: params.tables[i].tableName,
                rows: []
            };

            for (var attr in params.tables[i].rows) {
                var row = {};
                var batchWriteType = params.tables[i].rows[attr].type;
                row.type = ~["PUT", "UPDATE", "DELETE"].indexOf(batchWriteType) ? TableStore.BatchWriteType[batchWriteType] : batchWriteType;
                switch (batchWriteType) {
                    case 'PUT':
                        row.rowChange = TableStore.PlainBufferBuilder.serializeForPutRow(
                            params.tables[i].rows[attr].primaryKey, params.tables[i].rows[attr].attributeColumns);
                        break;
                    case 'UPDATE':
                        row.rowChange = TableStore.PlainBufferBuilder.serializeForUpdateRow(
                            params.tables[i].rows[attr].primaryKey, params.tables[i].rows[attr].attributeColumns);
                        break;
                    case 'DELETE':
                        row.rowChange = TableStore.PlainBufferBuilder.serializeForDeleteRow(
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
                    row.returnContent = { returnType: params.tables[i].rows[attr].returnContent.returnType };

                    if (params.tables[i].rows[attr].returnContent.returnColumns) {
                        row.returnContent.returnColumnNames = params.tables[i].rows[attr].returnContent.returnColumns;

                    }
                }

                item.rows.push(row);
            }

            properties.tables.push(item);
        }

        if (params.transactionId) {
            properties.transactionId = params.transactionId
        }

        var request = tsProtos.BatchWriteRowRequest.create(properties);

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
        if (proto.type === null) {
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
    _makeCompositeCondition: function (condition) {
        if (condition.combinator === undefined || condition.combinator === null) {
            throw new Error("LogicalOperator should be one of TableStore.LogicalOperator");
        }
        var subFilters = [];
        for (sub in condition.sub_conditions) {
            var subFilter = {};
            TableStore.encoder._makeColumnCondition(subFilter, condition.sub_conditions[sub]);
            subFilters.push(subFilter);
        }

        var properties = {
            combinator: condition.combinator,
            subFilters: subFilters
        };

        var proto = tsFilterProtos.CompositeColumnValueFilter.create(properties);
        var writer = tsFilterProtos.CompositeColumnValueFilter.encode(proto);

        return writer.finish();
    },

    _makeSingleColumnCondition: function (condition) {
        if (condition.comparator === null) {
            throw new Error("ComparatorType should be one of [%s], not %s");
        }

        var properties = {
            comparator: condition.comparator,
            columnName: condition.columnName,
            columnValue: TableStore.PlainBufferBuilder.serializeColumnValue(condition.columnValue),
            filterIfMissing: !condition.passIfMissing,
            latestVersionOnly: condition.latestVersionOnly
        };

        var proto = tsFilterProtos.SingleColumnValueFilter.create(properties);
        var writer = tsFilterProtos.SingleColumnValueFilter.encode(proto);
        return writer.finish();
    },
    _makeColumnPaginationFilter: function (condition) {
        var properties = {
            offset: condition.offset,
            limit: condition.limit
        };

        var proto = tsFilterProtos.ColumnPaginationFilter.create(properties);
        var writer = tsFilterProtos.ColumnPaginationFilter.encode(proto);
        return writer.finish();
    },
    _makeCondition: function (proto, condition) {
        if (!condition instanceof TableStore.Condition) {
            throw new Error("condition should be an instance of TableStore.Condition");
        }

        proto.rowExistence = condition.rowExistenceExpectation;
        if (proto.rowExistence === undefined || proto.rowExistence === null) {
            throw new Error("rowExistenceExpectation should be one of TableStore.RowExistenceExpectation");
        }

        if (condition.columnCondition != null) {
            var properties = {};
            TableStore.encoder._makeColumnCondition(properties, condition.columnCondition);
            var pbFilter = tsFilterProtos.Filter.create(properties);
            var filterWriter = tsFilterProtos.Filter.encode(pbFilter);
            
            proto.columnCondition = filterWriter.finish();
        }
    },
    encodeListSearchIndex: function (params) {
        var request = tsSearchProtos.ListSearchIndexRequest.create({
            tableName: params.tableName
        });
        return request;
    },
    encodeDescribeSearchIndex: function (params) {
        var request = tsSearchProtos.DescribeSearchIndexRequest.create({
            tableName: params.tableName,
            indexName: params.indexName
        });
        return request;
    },
    encodeUpdateSearchIndex: function (params) {
        return tsSearchProtos.UpdateSearchIndexRequest.create({
            tableName: params.tableName,
            indexName: params.indexName,
            timeToLive: params.timeToLive,
        });
    },
    encodeCreateSearchIndex: function (params) {
        const properties = {
            tableName: params.tableName,
            indexName: params.indexName,
            sourceIndexName: params.sourceIndexName,
            timeToLive: params.timeToLive,
            schema: TableStore.encoder._makeIndexSchema(params.schema)
        };

        var request = tsSearchProtos.CreateSearchIndexRequest.create(properties);

        return request;
    },
    _makeIndexSchema: function(schema) {
        var properties = {
            fieldSchemas: TableStore.encoder._makeFieldSchemaArray(schema.fieldSchemas),
            indexSetting: TableStore.encoder._makeIndexSetting(schema.indexSetting)
        };
        if (schema.indexSort) {
            properties.indexSort = TableStore.encoder._makeSort(schema.indexSort);
        }
        var indexSchema = tsSearchProtos.IndexSchema.create(properties);

        return indexSchema;
    },
    _makeSingleWordAnalyzerParameter: function(aParameter) {
        const properties = {
            caseSensitive: aParameter.caseSensitive,
            delimitWord: aParameter.delimitWord,
        };
        return tsSearchProtos.SingleWordAnalyzerParameter.encode(properties).finish();
    },
    _makeSplitAnalyzerParameter: function(aParameter) {
        const properties = {
            delimiter: aParameter.delimiter,
        };
        return tsSearchProtos.SplitAnalyzerParameter.encode(properties).finish();
    },
    _makeFuzzyAnalyzerParameter: function(aParameter) {
        const properties = {
            minChars: aParameter.minChars,
            maxChars: aParameter.maxChars,
        };
        return tsSearchProtos.FuzzyAnalyzerParameter.encode(properties).finish();
    },
    _makeAnalyzerParameter: function(schema) {
        if (schema.analyzer) {
            if (schema.analyzer === "single_word") {
                return  TableStore.encoder._makeSingleWordAnalyzerParameter(schema.analyzerParameter);
            }
            if (schema.analyzer === "split") {
                return  TableStore.encoder._makeSplitAnalyzerParameter(schema.analyzerParameter);
            }
            if (schema.analyzer === "fuzzy") {
                return  TableStore.encoder._makeFuzzyAnalyzerParameter(schema.analyzerParameter);
            }
        }
        return null
    },
    _makeFieldSchemaArray: function(fieldSchemaArray) {
        if (!fieldSchemaArray) return null;

        var fieldSchemas = [];
        TableStore.util.arrayEach(fieldSchemaArray, function(fieldSchema) {
            fieldSchemas.push(TableStore.encoder._makeFieldSchema(fieldSchema));
        });
        return fieldSchemas;
    },
    _makeFieldSchema: function(aFieldSchema) {
        const properties = {
            fieldName: aFieldSchema.fieldName,
            fieldType: aFieldSchema.fieldType,
            indexOptions: aFieldSchema.indexOptions || null,
            enableHighlighting: aFieldSchema.enableHighlighting || null,
            analyzer: aFieldSchema.analyzer || null,
            index: aFieldSchema.index || null,
            docValues: aFieldSchema.enableSortAndAgg || null,
            store: aFieldSchema.store || null,
            isArray: aFieldSchema.isAnArray || null,
            fieldSchemas: TableStore.encoder._makeFieldSchemaArray(aFieldSchema.fieldSchemas),
            analyzerParameter: TableStore.encoder._makeAnalyzerParameter(aFieldSchema),
            isVirtualField: aFieldSchema.isVirtualField || null,
            sourceFieldNames: aFieldSchema.sourceFieldNames || null,
            dateFormats: aFieldSchema.dateFormats || null,
            vectorOptions: aFieldSchema.vectorOptions || null,
        };

        return tsSearchProtos.FieldSchema.create(properties);
    },
    _makeIndexSetting: function(aIndexSetting) {
        var properties = {
            numberOfShards: 1,
            routingFields: aIndexSetting && aIndexSetting.routingFields || null,
            routingPartitionSize: aIndexSetting && aIndexSetting.routingPartitionSize || null
        };

        var indexSetting = tsSearchProtos.IndexSetting.create(properties);

        return indexSetting;
    },
    encodeDeleteSearchIndex: function (params) {
        var properties = {
            tableName: params.tableName,
            indexName: params.indexName
        };
        var request = tsSearchProtos.DeleteSearchIndexRequest.create(properties);

        return request;
    },
    encodeSearch: function (params) {
        const properties = {
            tableName: params.tableName,
            indexName: params.indexName,
            searchQuery: TableStore.encoder._makeSearchQuery(params.searchQuery),
            columnsToGet: TableStore.encoder._makeColumnToGet(params.columnToGet),
            timeoutMs: params.timeoutMs || 10000
        };

        if (Object.prototype.toString.call(params.routingValues) === '[object Array]') {
            properties.routingValues = TableStore.encoder._makeRoutingValues(params.routingValues);
        }

        return tsSearchProtos.SearchRequest.create(properties);
    },
    encodeComputeSplits: function (params) {
        let properties = {
            tableName: params.tableName,
        };
        if (params.searchIndexSplitsOptions) {
            properties.searchIndexSplitsOptions = {
                indexName: params.searchIndexSplitsOptions.indexName,
            }
        }
        return tsSearchProtos.ComputeSplitsRequest.create(properties);
    },
    encodeParallelScan: function (params) {
        let properties = {
            tableName: params.tableName,
            indexName: params.indexName,
            columnsToGet: TableStore.encoder._makeColumnToGet(params.columnToGet),
            sessionId: params.sessionId,
            scanQuery: TableStore.encoder._makeScanQuery(params.scanQuery),
            timeoutMs: params.timeoutMs || 20000
        };
        return tsSearchProtos.ParallelScanRequest.create(properties);
    },
    _makeScanQuery(aScanQuery) {
        let properties = {
            query: TableStore.encoder._makeQuery(aScanQuery.query),
            limit: aScanQuery.limit,
            aliveTime: aScanQuery.aliveTime,
            token: aScanQuery.token,
            currentParallelId: aScanQuery.currentParallelId,
            maxParallel: aScanQuery.maxParallel,
        };
        return tsSearchProtos.ScanQuery.create(properties);
    },
    _makeSearchQuery(aSearchQuery) {
        var properties = {
            offset: aSearchQuery.offset,
            limit: aSearchQuery.limit,
            query: TableStore.encoder._makeQuery(aSearchQuery.query),
            getTotalCount: aSearchQuery.getTotalCount || false
        };

        if (aSearchQuery.token) {
            properties.token = aSearchQuery.token;
        }
        if (aSearchQuery.sort) {
            properties.sort = TableStore.encoder._makeSort(aSearchQuery.sort);
        }
        if (aSearchQuery.aggs) {
            properties.aggs = TableStore.encoder._makeAggregations(aSearchQuery.aggs)
        }
        if (aSearchQuery.groupBys) {
            properties.groupBys = TableStore.encoder._makeGroupBys(aSearchQuery.groupBys)
        }
        if(aSearchQuery.highlight) {
            properties.highlight = TableStore.encoder._makeHighlight(aSearchQuery.highlight);
        }
        if (aSearchQuery.collapse) {
            properties.collapse = TableStore.encoder._makeCollapse(aSearchQuery.collapse)
        }
        var searchQuery = tsSearchProtos.SearchQuery.create(properties);
        var writer = tsSearchProtos.SearchQuery.encode(searchQuery);

        return writer.finish();
    },
    _makeQuery(aQuery) {
        var query = TableStore.encoder._constrctQueryParam(aQuery.queryType, aQuery.query);
        var writer = Object.getPrototypeOf(query).constructor.encode(query);

        var properties = {
            type: aQuery.queryType,
            query: writer.finish()
        };

        var query = tsSearchProtos.Query.create(properties);

        return query;
    },
    _makeCollapse(aCollapse) {
        const properties = {};
        if (aCollapse.fieldName) {
            properties.fieldName = aCollapse.fieldName;
        }
        return tsSearchProtos.Collapse.create(properties);
    },
    _makeAggregations(aggs) {
        let aggArray = [];
        for (let agg of aggs.aggs) {
            aggArray.push(TableStore.encoder._makeAggregation(agg));
        }
        return {aggs: aggArray};
    },
    _makeAggregation(agg) {
        const aggBody = TableStore.encoder._constructAggregationParam(agg.type, agg.body);
        const writer = Object.getPrototypeOf(aggBody).constructor.encode(aggBody);
        const properties = {
            name: agg.name,
            type: agg.type,
            body: writer.finish(),
        };
        return tsSearchProtos.Aggregation.create(properties);
    },
    _constructAggregationParam(aggType, agg) {
        switch (aggType) {
            case TableStore.AggregationType.AGG_AVG: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.AvgAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_MAX: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.MaxAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_MIN: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.MinAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_SUM: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.SumAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_COUNT: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                return tsSearchProtos.CountAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_DISTINCT_COUNT: {
                const properties = {
                    fieldName: agg.fieldName,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.DistinctCountAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_TOP_ROWS: {
                const properties = {
                    limit: agg.limit,
                };
                if (agg.sort) {
                    properties.sort = TableStore.encoder._makeSort(agg.sort);
                }
                return tsSearchProtos.TopRowsAggregation.create(properties);
            }
            case TableStore.AggregationType.AGG_PERCENTILES: {
                const properties = {
                    fieldName: agg.fieldName,
                    percentiles: agg.percentiles,
                };
                if (agg.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(agg.missing, "agg.missing");
                }
                return tsSearchProtos.PercentilesAggregation.create(properties);
            }
            default:
                throw new Error("not exist AggregationType: " + aggType);
        }
    },
    _makeGroupBys(group_bys) {
        let groupByArray = [];
        for (let groupBy of group_bys.groupBys) {
            groupByArray.push(TableStore.encoder._makeGroupBy(groupBy));
        }
        return {groupBys: groupByArray};
    },
    _makeGroupBy(groupBy) {
        const groupByBody = TableStore.encoder._constructGroupByParam(groupBy.type, groupBy.body);
        const writer = Object.getPrototypeOf(groupByBody).constructor.encode(groupByBody);
        const properties = {
            name: groupBy.name,
            type: groupBy.type,
            body: writer.finish(),
        };
        return tsSearchProtos.GroupBy.create(properties);
    },
    _constructGroupByParam(groupByType, groupBy) {
        switch (groupByType) {
            case TableStore.GroupByType.GROUP_BY_FIELD: {
                let properties = {
                    fieldName: groupBy.fieldName,
                    size: groupBy.size,
                    minDocCount: groupBy.minDocCount,
                };
                if (groupBy.sort) {
                    properties.sort = TableStore.encoder._makeGroupBySort(groupBy.sort);
                }
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByField.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_RANGE: {
                const properties = {
                    fieldName: groupBy.fieldName,
                    ranges: TableStore.encoder._makeRange(groupBy.ranges),
                };
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByRange.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_FILTER: {
                const properties = {
                    filters: [],
                };
                TableStore.util.arrayEach(groupBy.filters, function (f) {
                    let q = TableStore.encoder._makeQuery(f)
                    properties.filters.push(q);
                });
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByFilter.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_GEO_DISTANCE: {
                const properties = {
                    fieldName: groupBy.fieldName,
                    ranges: TableStore.encoder._makeRange(groupBy.ranges),
                    origin: tsSearchProtos.GeoPoint.create(groupBy.origin),
                };
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByGeoDistance.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_HISTOGRAM: {
                const properties = {
                    fieldName: groupBy.fieldName,
                    minDocCount: groupBy.minDocCount,
                };
                if (groupBy.sort) {
                    properties.sort = TableStore.encoder._makeGroupBySort(groupBy.sort);
                }
                if (groupBy.fieldRange) {
                    properties.fieldRange = TableStore.encoder._makeFieldRange(groupBy.fieldRange);
                }
                if (groupBy.interval) {
                    properties.interval = TableStore.PlainBufferBuilder.serializeSearchValue(groupBy.interval, "groupBy.interval");
                }
                if (groupBy.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(groupBy.missing, "groupByHistogram.missing");
                }
                if (groupBy.offset) {
                    properties.offset = TableStore.PlainBufferBuilder.serializeSearchValue(groupBy.offset, "groupByHistogram.offset");
                }
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy)
                return tsSearchProtos.GroupByHistogram.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_DATE_HISTOGRAM: {
                const properties = {
                    fieldName: groupBy.fieldName,
                    minDocCount: groupBy.minDocCount,
                };
                if (groupBy.sort) {
                    properties.sort = TableStore.encoder._makeGroupBySort(groupBy.sort);
                }
                if (groupBy.fieldRange) {
                    properties.fieldRange = TableStore.encoder._makeFieldRange(groupBy.fieldRange);
                }
                if (groupBy.interval) {
                    properties.interval = TableStore.encoder._makeDateTimeValue(groupBy.interval);
                }
                if (groupBy.missing) {
                    properties.missing = TableStore.PlainBufferBuilder.serializeSearchValue(groupBy.missing, "groupByDateHistogram.missing");
                }
                if (groupBy.offset) {
                    properties.offset = TableStore.encoder._makeDateTimeValue(groupBy.offset);
                }
                if (groupBy.timeZone) {
                    properties.timeZone = groupBy.timeZone;
                }
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByDateHistogram.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_GEO_GRID: {
                const properties = {
                    fieldName: groupBy.fieldName,
                };
                if (groupBy.precision) {
                    properties.precision = groupBy.precision;
                }
                if (groupBy.size) {
                    properties.size = groupBy.size;
                }
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByGeoGrid.create(properties);
            }
            case TableStore.GroupByType.GROUP_BY_COMPOSITE: {
                const properties = {};
                if (groupBy.nextToken) {
                    properties.nextToken = groupBy.nextToken;
                }
                if (groupBy.size) {
                    properties.size = groupBy.size;
                }
                if (groupBy.sources) {
                    properties.sources = TableStore.encoder._makeGroupBys(groupBy.sources);
                }
                TableStore.encoder._makeSubAggsAndSubGroupBys(properties, groupBy);
                return tsSearchProtos.GroupByComposite.create(properties);
            }
            default:
                throw new Error("not exist GroupByType: " + groupByType);
        }
    },
    _makeSubAggsAndSubGroupBys(properties, groupBy){
        if (groupBy.subAggs) {
            properties.subAggs = TableStore.encoder._makeAggregations(groupBy.subAggs);
        }
        if (groupBy.subGroupBys) {
            properties.subGroupBys = TableStore.encoder._makeGroupBys(groupBy.subGroupBys);
        }
    },
    _makeRange(aRanges) {
        let ranges = []
        TableStore.util.arrayEach(aRanges, function (range) {
            ranges.push(tsSearchProtos.Range.create(range));
        });
        return ranges;
    },
    _makeFieldRange(aFieldRange) {
        return {
            min: TableStore.PlainBufferBuilder.serializeSearchValue(aFieldRange.min, "FieldRange.min"),
            max: TableStore.PlainBufferBuilder.serializeSearchValue(aFieldRange.max, "FieldRange.max"),
        };
    },
    _constrctQueryParam(queryType, aQuery) {
        switch (queryType) {
            case TableStore.QueryType.MATCH_QUERY://1
                var properties = {
                    fieldName: aQuery.fieldName,
                    text: aQuery.text,
                    weight: aQuery.weight,
                };
                if (typeof aQuery.minimumShouldMatch === "number") {
                    properties.minimumShouldMatch = aQuery.minimumShouldMatch;
                }
                if (aQuery.operator) {
                    properties.operator = aQuery.operator
                }

                var matchQuery = tsSearchProtos.MatchQuery.create(properties);

                return matchQuery;
                break;
            case TableStore.QueryType.MATCH_PHRASE_QUERY://2
                var properties = {
                    fieldName: aQuery.fieldName,
                    text: aQuery.text,
                    weight: aQuery.weight,
                };
                var matchPhraseQuery = tsSearchProtos.MatchPhraseQuery.create(properties);

                return matchPhraseQuery;
                break;
            case TableStore.QueryType.TERM_QUERY://3
                var properties = {
                    fieldName: aQuery.fieldName,
                    term: TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.term, "term"),
                    weight: aQuery.weight,
                };
                var termQuery = tsSearchProtos.TermQuery.create(properties);

                return termQuery;
                break;
            case TableStore.QueryType.RANGE_QUERY://4
                var properties = {
                    fieldName: aQuery.fieldName
                };
                if (aQuery.rangeFrom !== undefined && aQuery.rangeFrom !== null) {
                    properties.rangeFrom= TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.rangeFrom, "rangeFrom");
                    if (aQuery.includeLower !== undefined) {
                        properties.includeLower = aQuery.includeLower;
                    }
                }
                if (aQuery.rangeTo !== undefined && aQuery.rangeTo !== null) {
                    properties.rangeTo= TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.rangeTo, "rangeTo");
                    if (aQuery.includeUpper !== undefined) {
                        properties.includeUpper = aQuery.includeUpper;
                    }
                }

                var rangeQuery = tsSearchProtos.RangeQuery.create(properties);

                return rangeQuery;
                break;
            case TableStore.QueryType.PREFIX_QUERY://5
                var properties = {
                    fieldName: aQuery.fieldName,
                    prefix: aQuery.prefix,
                    weight: aQuery.weight,
                };

                var prefixQuery = tsSearchProtos.PrefixQuery.create(properties);

                return prefixQuery;
                break;
            case TableStore.QueryType.BOOL_QUERY://6
                var properties = {};

                if (Object.prototype.toString.call(aQuery.mustQueries) === '[object Array]') {
                    properties.mustQueries = [];
                    TableStore.util.arrayEach(aQuery.mustQueries, function (query) {
                        properties.mustQueries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.mustNotQueries) === '[object Array]') {
                    properties.mustNotQueries = [];
                    TableStore.util.arrayEach(aQuery.mustNotQueries, function (query) {
                        properties.mustNotQueries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.filterQueries) === '[object Array]') {
                    properties.filterQueries = [];
                    TableStore.util.arrayEach(aQuery.filterQueries, function (query) {
                        properties.filterQueries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.shouldQueries) === '[object Array]') {
                    if (typeof aQuery.minimumShouldMatch !== 'number' || aQuery.minimumShouldMatch % 1 !== 0) {
                        throw new Error("Expect minimumShouldMatch which should be an int32 number");
                    }
                    properties.minimumShouldMatch = aQuery.minimumShouldMatch;
                    properties.shouldQueries = [];
                    TableStore.util.arrayEach(aQuery.shouldQueries, function (query) {
                        properties.shouldQueries.push(TableStore.encoder._makeQuery(query));
                    })
                }

                var boolQuery = tsSearchProtos.BoolQuery.create(properties);

                return boolQuery;
                break;
            case TableStore.QueryType.CONST_SCORE_QUERY://7
                var properties = {
                    filter: TableStore.encoder._makeQuery(aQuery.filter)
                };
                var constScoreQuery = tsSearchProtos.ConstScoreQuery.create(properties);

                return constScoreQuery;
                break;
            case TableStore.QueryType.FUNCTION_SCORE_QUERY://8
                var properties = {
                    query: TableStore.encoder._makeQuery(aQuery.query)
                };

                if (!aQuery.fieldValueFactor || typeof aQuery.fieldValueFactor.fieldName !== 'string') {
                    throw new Error("Except fieldValueFactor.fieldName which should be string");
                }
                var fieldValueFactorProperties = {
                    fieldName: aQuery.fieldValueFactor.fieldName
                };
                var fieldValueFactor = tsSearchProtos.FieldValueFactor.create(fieldValueFactorProperties);

                properties.fieldValueFactor = fieldValueFactor;

                var functionScoreQuery = tsSearchProtos.FunctionScoreQuery.create(properties);

                return functionScoreQuery;
                break;
            case TableStore.QueryType.NESTED_QUERY://9
                var properties = {
                    path: aQuery.path,
                    query: TableStore.encoder._makeQuery(aQuery.query),
                    scoreMode: aQuery.scoreMode ||  TableStore.ScoreMode.SCORE_MODE_AVG,
                    weight: aQuery.weight,
                };
                if (aQuery.innerHits) {
                    properties.innerHits = TableStore.encoder._makeInnerHits(aQuery.innerHits);
                }

                var nestedQeury = tsSearchProtos.NestedQuery.create(properties);

                return nestedQeury;
                break;
            case TableStore.QueryType.WILDCARD_QUERY://10
                var properties = {
                    fieldName: aQuery.fieldName,
                    value: aQuery.value,
                    weight: aQuery.weight,
                };

                var wildcardQuery = tsSearchProtos.WildcardQuery.create(properties);

                return wildcardQuery;
                break;
            case TableStore.QueryType.MATCH_ALL_QUERY://11
                var matchAllQuery = tsSearchProtos.MatchAllQuery.create();

                return matchAllQuery;
                break;
            case TableStore.QueryType.GEO_BOUNDING_BOX_QUERY://12
                var properties = {
                    fieldName: aQuery.fieldName,
                    topLeft: aQuery.topLeft,
                    bottomRight: aQuery.bottomRight
                };
                var geoBoundingBoxQuery = tsSearchProtos.GeoBoundingBoxQuery.create(properties);

                return geoBoundingBoxQuery;
                break;
            case TableStore.QueryType.GEO_DISTANCE_QUERY://13
                var properties = {
                    fieldName: aQuery.fieldName,
                    centerPoint: aQuery.centerPoint,
                    distance: aQuery.distance
                };
                var geoDistanceQuery = tsSearchProtos.GeoDistanceQuery.create(properties);

                return geoDistanceQuery;
                break;
            case TableStore.QueryType.GEO_POLYGON_QUERY://14
                var properties = {
                    fieldName: aQuery.fieldName,
                    points: aQuery.points
                };
                var geoPolygonQuery = tsSearchProtos.GeoPolygonQuery.create(properties);

                return geoPolygonQuery;
                break;
            case TableStore.QueryType.TERMS_QUERY://15
                var properties = {
                    fieldName: aQuery.fieldName,
                    terms: TableStore.encoder._makeTerms(aQuery.terms),
                    weight: aQuery.weight,
                };
                var termsQuery = tsSearchProtos.TermsQuery.create(properties);

                return termsQuery;
                break;
            case TableStore.QueryType.EXISTS_QUERY://16
                var properties = {
                    fieldName: aQuery.fieldName
                };
                var termsQuery = tsSearchProtos.TermsQuery.create(properties);

                return termsQuery;
                break;
            case TableStore.QueryType.KNN_VECTOR_QUERY://17
                var properties = {
                    fieldName: aQuery.fieldName,
                }
                if (aQuery.topK) {
                    properties.topK = aQuery.topK;
                }
                if (aQuery.float32QueryVector) {
                    properties.float32QueryVector = aQuery.float32QueryVector;
                }
                if (aQuery.filter) {
                    properties.filter = TableStore.encoder._makeQuery(aQuery.filter);
                }
                if (aQuery.weight) {
                    properties.weight = aQuery.weight;
                }
                var knnVectorQuery = tsSearchProtos.KnnVectorQuery.create(properties);

                return knnVectorQuery;
                break;
            case TableStore.QueryType.FUNCTIONS_SCORE_QUERY://18
                var properties = {};
                if(aQuery.query){
                    properties.query = TableStore.encoder._makeQuery(aQuery.query);
                }
                if(aQuery.minScore){
                    properties.minScore = aQuery.minScore;
                }
                if(aQuery.maxScore){
                    properties.maxScore = aQuery.maxScore;
                }
                if(aQuery.scoreMode){
                    properties.scoreMode = aQuery.scoreMode;
                }
                if(aQuery.combineMode){
                    properties.combineMode = aQuery.combineMode;
                }
                properties.functions = [];
                if(aQuery.functions){
                    TableStore.util.arrayEach(aQuery.functions, function (scoreFunction) {
                        var scoreFunctionProperties = {
                            weight: scoreFunction.weight || null,
                        }
                        if(scoreFunction.filter) {
                            scoreFunctionProperties.filter = TableStore.encoder._makeQuery(scoreFunction.filter);
                        }
                        if (scoreFunction.fieldValueFactorFunction) {
                            scoreFunctionProperties.fieldValueFactor = tsSearchProtos.FieldValueFactorFunction.create(scoreFunction.fieldValueFactorFunction);
                        }
                        if (scoreFunction.decayFunction) {
                            const paramBody = TableStore.encoder._constructDecayParam(scoreFunction.decayFunction.decayParamType, scoreFunction.decayFunction.decayParam);
                            const writer = Object.getPrototypeOf(paramBody).constructor.encode(paramBody);
                            var decayFunctionProperties = {
                                fieldName: scoreFunction.decayFunction.fieldName,
                                mathFunction: scoreFunction.decayFunction.mathFunction || null,
                                paramType: scoreFunction.decayFunction.decayParamType,
                                param: writer.finish(),
                                decay: scoreFunction.decayFunction.decay || null,
                                multiValueMode: scoreFunction.decayFunction.multiValueMode || null,
                            }
                            scoreFunctionProperties.decay = tsSearchProtos.DecayFunction.create(decayFunctionProperties);
                        }
                        if (scoreFunction.randomFunction) {
                            scoreFunctionProperties.random = tsSearchProtos.RandomScoreFunction.create(scoreFunction.randomFunction);
                        }
                        properties.functions.push(scoreFunctionProperties);
                    })
                }
                var functionsScoreQuery = tsSearchProtos.FunctionsScoreQuery.create(properties);

                return functionsScoreQuery;
                break;
            default:
                throw new Error("queryTypeExpectation not exist queryType: " + queryType);
        }
    },
    _constructDecayParam(type, param){
            if (type === TableStore.DecayFuncParamType.DF_DATE_PARAM) {
                return tsSearchProtos.DecayFuncDateParam.create(param);
            }
            if (type === TableStore.DecayFuncParamType.DF_GEO_PARAM) {
                return tsSearchProtos.DecayFuncGeoParam.create(param);
            }
            if (type === TableStore.DecayFuncParamType.DF_NUMERIC_PARAM) {
                return tsSearchProtos.DecayFuncNumericParam.create(param);
            }
            return null;
    },
    _makeColumnToGet(aColumnToGet) {
        var properties = {
            returnType: aColumnToGet.returnType
        };
        if (aColumnToGet.returnType === TableStore.ColumnReturnType.RETURN_SPECIFIED) {
            properties.columnNames = aColumnToGet.returnNames;
        }

        var columnsToGet = tsSearchProtos.ColumnsToGet.create(properties);

        return columnsToGet;
    },
    _makeRoutingValues(routingValues) {
        var values = [];
        TableStore.util.arrayEach(routingValues, function(primaryKey) {
            values.push(TableStore.PlainBufferBuilder.serializePrimaryKey(primaryKey))
        });

        return values;
    },
    // _makeSearchAfter(aSearchAfter) {
    //     var searchAfter = new tsSearchProtos.SearchAfter();
    //     var values = [];
    //
    //     TableStore.util.arrayEach(aSearchAfter.values, function(value) {
    //         values.push(TableStore.PlainBufferBuilder.serializeSearchValue(value, "searchAfter.value"))
    //     });
    //     searchAfter.values = values;
    //
    //     return searchAfter;
    // },
    _makeTerms(terms) {
        var theTerms = [];
        if (Object.prototype.toString.call(terms) !== '[object Array]') {
            return theTerms;
        }

        TableStore.util.arrayEach(terms, function (term) {
            var theTerm = TableStore.PlainBufferBuilder.serializeSearchValue(term, "term");
            theTerms.push(theTerm);
        });

        return theTerms;
    },
    _makeSort(aSort) {
        var properties = {
            sorter: []
        };

        TableStore.util.arrayEach(aSort.sorters, function(sorter) {
            var theSorter = TableStore.encoder._makeSorter(sorter);
            properties.sorter.push(theSorter);
        });

        var sort = tsSearchProtos.Sort.create(properties);

        return sort;
    },
    _makeSorter(aSorter) {
        const properties = {};

        if (aSorter.fieldSort) {
            var fieldSortProperties = {
                fieldName: aSorter.fieldSort.fieldName,
                order: aSorter.fieldSort.order,
                mode: aSorter.fieldSort.mode
            };
            if (aSorter.fieldSort.missingValue) {
                fieldSortProperties.missingValue = TableStore.PlainBufferBuilder.serializeSearchValue(aSorter.fieldSort.missingValue, "missingValue");
            } else if (aSorter.fieldSort.missing) {
                fieldSortProperties.missingValue = TableStore.PlainBufferBuilder.serializeSearchValue(aSorter.fieldSort.missing, "missing");
            }
            if (aSorter.fieldSort.nestedFilter) {
                var nestedFilterProperties = {
                    path: aSorter.fieldSort.nestedFilter.path,
                    filter: TableStore.encoder._makeQuery(aSorter.fieldSort.nestedFilter.filter)
                };
                fieldSortProperties.nestedFilter = tsSearchProtos.NestedFilter.create(nestedFilterProperties);
            }
            if (aSorter.fieldSort.missingField) {
                fieldSortProperties.missingField = aSorter.fieldSort.missingField;
            }
            properties.fieldSort = tsSearchProtos.FieldSort.create(fieldSortProperties);
        } else if (aSorter.geoDistanceSort) {
            var geoDistanceSortProperties = {
                fieldName: aSorter.geoDistanceSort.fieldName,
                points: aSorter.geoDistanceSort.points,
                order: aSorter.geoDistanceSort.order,
                mode: aSorter.geoDistanceSort.mode,
                distanceType: aSorter.geoDistanceSort.distanceType
            };
            if (aSorter.geoDistanceSort.nestedFilter) {
                var nestedFilterProperties = {
                    path: aSorter.geoDistanceSort.nestedFilter.path,
                    filter: TableStore.encoder._makeQuery(aSorter.geoDistanceSort.nestedFilter.filter)
                };

                geoDistanceSortProperties.nestedFilter = tsSearchProtos.NestedFilter.create(nestedFilterProperties);
            }

            var geoDistanceSort = tsSearchProtos.GeoDistanceSort.create(geoDistanceSortProperties);

            properties.geoDistanceSort = geoDistanceSort;
        } else if (aSorter.scoreSort) {
            var scoreSortProperties = {
                order: aSorter.scoreSort.order
            };
            var scoreSort = tsSearchProtos.ScoreSort.create(scoreSortProperties);

            properties.scoreSort = scoreSort;
        } else if (aSorter.primaryKeySort) {
            var primaryKeySortProperties = {
                order: aSorter.primaryKeySort.order
            };
            var primaryKeySort = tsSearchProtos.PrimaryKeySort.create(primaryKeySortProperties)

            properties.pkSort = primaryKeySort;
        } else if (aSorter.docSort) {
            var docSortProperties = {
                order: aSorter.docSort.order
            }
            var docSort = tsSearchProtos.DocSort.create(docSortProperties);

            properties.docSort = docSort;
        }

        return tsSearchProtos.Sorter.create(properties);
    },
    _makeGroupBySort: function(aSort) {
        const properties = {
            sorters: []
        };
        TableStore.util.arrayEach(aSort.sorters, function(sorter) {
            const theSorter = TableStore.encoder._makeGroupBySorter(sorter);
            properties.sorters.push(theSorter);
        });
        return tsSearchProtos.GroupBySort.create(properties);
    },
    _makeGroupBySorter(aSorter) {
        const properties = {};
        if (aSorter.groupKeySort) {
            const groupKeySortProperties = {
                order: aSorter.groupKeySort.order,
            };
            properties.groupKeySort = tsSearchProtos.GroupKeySort.create(groupKeySortProperties);
        } else if (aSorter.rowCountSort) {
            const rowCountSortProperties = {
                order: aSorter.rowCountSort.order,
            };
            properties.rowCountSort = tsSearchProtos.RowCountSort.create(rowCountSortProperties);
        } else if (aSorter.subAggSort) {
            const subAggSortProperties = {
                subAggName: aSorter.subAggSort.subAggName,
                order: aSorter.subAggSort.order,
            };
            properties.subAggSort = tsSearchProtos.SubAggSort.create(subAggSortProperties);
        }
        return tsSearchProtos.GroupBySorter.create(properties);
    },
    _makeDateTimeValue(dateTimeValue) {
        const properties = {
            value: dateTimeValue.value,
            unit: dateTimeValue.unit
        };
        return tsSearchProtos.DateTimeValue.create(properties);
    },
    _makeInnerHits(innerHits){
        var properties = {
            offset: innerHits.offset || null,
            limit : innerHits.limit || null,
        };
        if (innerHits.sort) {
            properties.sort = TableStore.encoder._makeSort(innerHits.sort);
        }
        if(innerHits.highlight) {
            properties.highlight = TableStore.encoder._makeHighlight(innerHits.highlight);
        }
        return tsSearchProtos.InnerHits.create(properties);
    },
    _makeHighlight(highlight) {
        var properties = {
            highlightEncoder: highlight.highlightEncoder,
            highlightParameters: highlight.highlightParameters
        }
        return tsSearchProtos.Highlight.create(properties);
    },
    encodeCreateIndex: function(params) {
        var request = tsProtos.CreateIndexRequest.create({
            mainTableName: params.mainTableName,
            includeBaseData: params.includeBaseData || false,
            indexMeta: new tsProtos.IndexMeta({
                name: params.indexMeta.name,
                primaryKey: params.indexMeta.primaryKey,
                definedColumn: params.indexMeta.definedColumn,
                indexUpdateMode: params.indexMeta.indexUpdateMode || TableStore.IndexUpdateMode.IUM_ASYNC_INDEX,//默认增量
                indexType: params.indexMeta.indexType || TableStore.IndexType.IT_GLOBAL_INDEX,//IT_GLOBAL_INDEX
            })
        });

        return request;
    },
    encodeDropIndex: function(params) {
        var request = tsProtos.DropIndexRequest.create({
            mainTableName: params.mainTableName,
            indexName: params.indexName
        });
        return request;
    },
    encodeStartLocalTransaction: function (params) {
        var request = tsProtos.StartLocalTransactionRequest.create({
            tableName: params.tableName,
            key: TableStore.PlainBufferBuilder.serializePrimaryKey(params.primaryKey)
        });
        return request;
    },
    encodeCommitTransaction: function (params) {
        var request = tsProtos.CommitTransactionRequest.create({
            transactionId: typeof params === 'string' ? params : params.transactionId
        });
        return request;
    },
    encodeAbortTransaction: function (params) {
        var request = tsProtos.AbortTransactionRequest.create({
            transactionId: typeof params === 'string' ? params : params.transactionId
        });
        return request;
    },
    encodeSQLQuery: function (params) {
        if (params.version && params.version !== TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS) {
            throw new Error("SQL payload version only support: 'TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS', " +
                "please use fixed tablestore node sdk version '5.2.2' to use 'TableStore.SQLPayloadVersion.SQL_PLAIN_BUFFER'");
        }
        const properties = {
            query: params.query,
            version: TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS,
        };
        return tsProtos.SQLQueryRequest.create(properties);
    },
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
    'batchWriteRow': TableStore.encoder.encodeBatchWriteRow,
    'listSearchIndex': TableStore.encoder.encodeListSearchIndex,
    'describeSearchIndex': TableStore.encoder.encodeDescribeSearchIndex,
    'updateSearchIndex': TableStore.encoder.encodeUpdateSearchIndex,
    'createSearchIndex': TableStore.encoder.encodeCreateSearchIndex,
    'deleteSearchIndex': TableStore.encoder.encodeDeleteSearchIndex,
    'search': TableStore.encoder.encodeSearch,
    'computeSplits': TableStore.encoder.encodeComputeSplits,
    'parallelScan': TableStore.encoder.encodeParallelScan,
    'createIndex': TableStore.encoder.encodeCreateIndex,
    'dropIndex': TableStore.encoder.encodeDropIndex,
    'startLocalTransaction': TableStore.encoder.encodeStartLocalTransaction,
    'commitTransaction': TableStore.encoder.encodeCommitTransaction,
    'abortTransaction': TableStore.encoder.encodeAbortTransaction,
    'SQLQuery': TableStore.encoder.encodeSQLQuery,
};
