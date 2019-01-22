var TableStore = require('../core');
var tsProtos = require('./tablestore_proto.js').tablestore.proto;
var tsFilterProtos = require('./tablestore_filter_proto.js').tablestore.filter.proto;
var tsSearchProtos = require('./tablestore_search_proto.js').tablestore.search.proto;

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
        if (Object.prototype.toString.call(params.tableMeta.definedColumn) === '[object Array]') {
            request.table_meta.defined_column = params.tableMeta.definedColumn;
        }
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
        if (params.streamSpecification) {
            request.stream_spec = {
                enable_stream: params.streamSpecification.enableStream,
                expiration_time: params.streamSpecification.expirationTime
            }
        }
        if (Object.prototype.toString.call(params.indexMetas) === '[object Array]') {
            var indexMetas = [];
            TableStore.util.arrayEach(params.indexMetas, function(meta) {
                indexMetas.push({
                    name: meta.name,
                    primary_key: meta.primaryKey,
                    defined_column: meta.definedColumn,
                    index_update_mode: 0,//IUM_ASYNC_INDEX
                    index_type: 0,//IT_GLOBAL_INDEX
                });
            });
            request.index_metas = indexMetas;
        }
        return request;
    },
    encodeListTable: function () {
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
        if (params.streamSpecification) {
            request.stream_spec = {
                enable_stream: params.streamSpecification.enableStream,
                expiration_time: params.streamSpecification.expirationTime
            }
        }

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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

        if (params.transactionId) {
            request.transaction_id = params.transactionId
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

    _makeSingleColumnCondition: function (condition) {
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

    _makeColumnPaginationFilter: function (condition) {
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
    },
    encodeListSearchIndex: function (params) {
        var request = new tsSearchProtos.ListSearchIndexRequest();
        request.table_name = params.tableName;
        return request;
    },
    encodeDescribeSearchIndex: function (params) {
        var request = new tsSearchProtos.DescribeSearchIndexRequest();
        request.table_name = params.tableName;
        request.index_name = params.indexName;
        return request;
    },
    encodeCreateSearchIndex: function (params) {
        var request = new tsSearchProtos.CreateSearchIndexRequest();
        request.table_name = params.tableName;
        request.index_name = params.indexName;
        request.schema = TableStore.encoder._makeIndexSchema(params.schema);

        return request;
    },
    _makeIndexSchema: function(schema) {
        var indexSchema = new tsSearchProtos.IndexSchema();
        indexSchema.field_schemas = TableStore.encoder._makeFieldSchemaArray(schema.fieldSchemas);
        indexSchema.index_setting = TableStore.encoder._makeIndexSetting(schema.indexSetting);
        if (schema.indexSort) {
            indexSchema.index_sort = TableStore.encoder._makeSort(schema.indexSort);
        }

        return indexSchema;
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
        var fieldSchema = new tsSearchProtos.FieldSchema({
            field_name: aFieldSchema.fieldName,
            field_type: aFieldSchema.fieldType
        });
        fieldSchema.index_options = aFieldSchema.indexOptions || null;
        fieldSchema.analyzer = aFieldSchema.analyzer || null;
        fieldSchema.index = aFieldSchema.index || null;
        fieldSchema.doc_values = aFieldSchema.enableSortAndAgg || null;
        fieldSchema.store = aFieldSchema.store || null;
        fieldSchema.is_array = aFieldSchema.isAnArray || null;
        fieldSchema.field_schemas = TableStore.encoder._makeFieldSchemaArray(aFieldSchema.fieldSchemas);

        return fieldSchema;
    },
    _makeIndexSetting: function(aIndexSetting) {
        var indexSetting = new tsSearchProtos.IndexSetting({
            number_of_shards: 1,
            routing_fields: aIndexSetting && aIndexSetting.routingFields || null,
            routing_partition_size: aIndexSetting && aIndexSetting.routingPartitionSize || null
        });

        return indexSetting;
    },
    encodeDeleteSearchIndex: function (params) {
        var request = new tsSearchProtos.DeleteSearchIndexRequest();
        request.table_name = params.tableName;
        request.index_name = params.indexName;
        return request;
    },
    encodeSearch: function (params) {
        var request = new tsSearchProtos.SearchRequest();
        request.table_name = params.tableName;
        request.index_name = params.indexName;
        request.search_query = TableStore.encoder._makeSearchQuery(params.searchQuery);
        request.columns_to_get = TableStore.encoder._makeColumnToGet(params.columnToGet);
        if (Object.prototype.toString.call(params.routingValues) === '[object Array]') {
            request.routing_values = TableStore.encoder._makeRoutingValues(params.routingValues);
        }

        return request;
    },
    _makeSearchQuery(aSearchQuery) {
        var searchQuery = new tsSearchProtos.SearchQuery();
        searchQuery.offset = aSearchQuery.offset;
        searchQuery.limit = aSearchQuery.limit;
        searchQuery.query = TableStore.encoder._makeQuery(aSearchQuery.query);
        searchQuery.getTotalCount = aSearchQuery.getTotalCount || false;
        if (aSearchQuery.token) {
            searchQuery.token = aSearchQuery.token;
        }
        if (aSearchQuery.sort) {
            searchQuery.sort = TableStore.encoder._makeSort(aSearchQuery.sort);
        }
        return searchQuery.toBuffer();
    },
    _makeQuery(aQuery) {
        var query = new tsSearchProtos.Query();
        query.type = aQuery.queryType;
        query.query = TableStore.encoder._constrctQueryParam(aQuery.queryType, aQuery.query).toBuffer();

        return query;
    },
    _constrctQueryParam(queryType, aQuery) {
        switch (queryType) {
            case TableStore.QueryType.MATCH_QUERY://1
                var matchQuery = new tsSearchProtos.MatchQuery({
                    field_name: aQuery.fieldName,
                    text: aQuery.text
                });
                if (typeof aQuery.minimumShouldMatch === "number") {
                    matchQuery.minimum_should_match = aQuery.minimumShouldMatch;
                }
                if (aQuery.operator) {
                    matchQuery.operator = aQuery.operator
                }

                return matchQuery;
                break;
            case TableStore.QueryType.MATCH_PHRASE_QUERY://2
                var matchPhraseQuery = new tsSearchProtos.MatchPhraseQuery({
                    field_name: aQuery.fieldName,
                    text: aQuery.text
                });

                return matchPhraseQuery;
                break;
            case TableStore.QueryType.TERM_QUERY://3
                var termQuery = new tsSearchProtos.TermQuery({
                    field_name: aQuery.fieldName,
                    term: TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.term, "term")
                });

                return termQuery;
                break;
            case TableStore.QueryType.RANGE_QUERY://4
                var rangeQuery =  new tsSearchProtos.RangeQuery({
                    field_name: aQuery.fieldName
                });
                if (aQuery.rangeFrom !== undefined && aQuery.rangeFrom !== null) {
                    rangeQuery.range_from= TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.rangeFrom, "rangeFrom");
                    if (aQuery.includeLower !== undefined) {
                        rangeQuery.include_lower = aQuery.includeLower;
                    }
                }
                if (aQuery.rangeTo !== undefined && aQuery.rangeTo !== null) {
                    rangeQuery.range_to= TableStore.PlainBufferBuilder.serializeSearchValue(aQuery.rangeTo, "rangeTo");
                    if (aQuery.includeUpper !== undefined) {
                        rangeQuery.include_upper = aQuery.includeUpper;
                    }
                }

                return rangeQuery;
                break;
            case TableStore.QueryType.PREFIX_QUERY://5
                var prefixQuery = new tsSearchProtos.PrefixQuery({
                    field_name: aQuery.fieldName,
                    prefix: aQuery.prefix
                });

                return prefixQuery;
                break;
            case TableStore.QueryType.BOOL_QUERY://6
                var boolQuery = new tsSearchProtos.BoolQuery();
                if (Object.prototype.toString.call(aQuery.mustQueries) === '[object Array]') {
                    boolQuery.must_queries = [];
                    TableStore.util.arrayEach(aQuery.mustQueries, function (query) {
                        boolQuery.must_queries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.mustNotQueries) === '[object Array]') {
                    boolQuery.must_not_queries = [];
                    TableStore.util.arrayEach(aQuery.mustNotQueries, function (query) {
                        boolQuery.must_not_queries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.filterQueries) === '[object Array]') {
                    boolQuery.filter_queries = [];
                    TableStore.util.arrayEach(aQuery.filterQueries, function (query) {
                        boolQuery.filter_queries.push(TableStore.encoder._makeQuery(query));
                    })
                }
                if (Object.prototype.toString.call(aQuery.shouldQueries) === '[object Array]') {
                    if (typeof aQuery.minimumShouldMatch !== 'number' || aQuery.minimumShouldMatch % 1 !== 0) {
                        throw new Error("Expect minimumShouldMatch which should be an int32 number");
                    }
                    boolQuery.minimum_should_match = aQuery.minimumShouldMatch;
                    boolQuery.should_queries = [];
                    TableStore.util.arrayEach(aQuery.shouldQueries, function (query) {
                        boolQuery.should_queries.push(TableStore.encoder._makeQuery(query));
                    })
                }

                return boolQuery;
                break;
            case TableStore.QueryType.CONST_SCORE_QUERY://7
                var constScoreQuery = new tsSearchProtos.ConstScoreQuery();
                constScoreQuery.filter = TableStore.encoder._makeQuery(aQuery.filter);

                return constScoreQuery;
                break;
            case TableStore.QueryType.FUNCTION_SCORE_QUERY://8
                var functionScoreQuery = new tsSearchProtos.FunctionScoreQuery();
                functionScoreQuery.query = TableStore.encoder._makeQuery(aQuery.query);

                if (!aQuery.fieldValueFactor || typeof aQuery.fieldValueFactor.fieldName !== 'string') {
                    throw new Error("Except fieldValueFactor.fieldName which should be string");
                }
                var fieldValueFactor = new tsSearchProtos.FieldValueFactor();
                fieldValueFactor.field_name = aQuery.fieldValueFactor.fieldName;
                functionScoreQuery.field_value_factor = fieldValueFactor;

                return functionScoreQuery;
                break;
            case TableStore.QueryType.NESTED_QUERY://9
                var nestedQeury = new tsSearchProtos.NestedQuery();
                nestedQeury.path = aQuery.path;
                nestedQeury.query = TableStore.encoder._makeQuery(aQuery.query);
                nestedQeury.score_mode = aQuery.scoreMode ||  TableStore.ScoreMode.SCORE_MODE_AVG;

                return nestedQeury;
                break;
            case TableStore.QueryType.WILDCARD_QUERY://10
                var wildcardQuery = new tsSearchProtos.WildcardQuery({
                    field_name: aQuery.fieldName,
                    value: aQuery.value
                });

                return wildcardQuery;
                break;
            case TableStore.QueryType.MATCH_ALL_QUERY://11
                var matchAllQuery = new tsSearchProtos.MatchAllQuery();

                return matchAllQuery;
                break;
            case TableStore.QueryType.GEO_BOUNDING_BOX_QUERY://12
                var geoBoundingBoxQuery = new tsSearchProtos.GeoBoundingBoxQuery({
                    field_name: aQuery.fieldName,
                    top_left: aQuery.topLeft,
                    bottom_right: aQuery.bottomRight
                });

                return geoBoundingBoxQuery;
                break;
            case TableStore.QueryType.GEO_DISTANCE_QUERY://13
                var geoDistanceQuery = new tsSearchProtos.GeoDistanceQuery({
                    field_name: aQuery.fieldName,
                    center_point: aQuery.centerPoint,
                    distance: aQuery.distance
                });

                return geoDistanceQuery;
                break;
            case TableStore.QueryType.GEO_POLYGON_QUERY://14
                var geoPolygonQuery = new tsSearchProtos.GeoPolygonQuery({
                    field_name: aQuery.fieldName,
                    points: aQuery.points
                });

                return geoPolygonQuery;
                break;
            case TableStore.QueryType.TERMS_QUERY://15
                var termsQuery = new tsSearchProtos.TermsQuery({
                    field_name: aQuery.fieldName,
                    terms: TableStore.encoder._makeTerms(aQuery.terms)
                });

                return termsQuery;
                break;
            default:
                throw new Error("queryTypeExpectation not exist queryType: " + queryType);
        }
    },
    _makeColumnToGet(aColumnToGet) {
        var columnsToGet = new tsSearchProtos.ColumnsToGet();
        columnsToGet.return_type = aColumnToGet.returnType;
        if (aColumnToGet.returnType === TableStore.ColumnReturnType.RETURN_SPECIFIED) {
            columnsToGet.column_names = aColumnToGet.returnNames;
        }
        return columnsToGet;
    },
    _makeRoutingValues(routingValues) {
        var values = [];
        TableStore.util.arrayEach(routingValues, function(primaryKey) {
            values.push(TableStore.PlainBufferBuilder.serializePrimaryKey(primaryKey))
        });

        return values;
    },
    _makeSearchAfter(aSearchAfter) {
        var searchAfter = new tsSearchProtos.SearchAfter();
        var values = [];

        TableStore.util.arrayEach(aSearchAfter.values, function(value) {
            values.push(TableStore.PlainBufferBuilder.serializeSearchValue(value, "searchAfter.value"))
        });
        searchAfter.values = values;

        return searchAfter;
    },
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
        var sort = new tsSearchProtos.Sort();
        var sorters = [];
        TableStore.util.arrayEach(aSort.sorters, function(sorter) {
            var theSorter = TableStore.encoder._makeSorter(sorter);
            sorters.push(theSorter);
        });
        sort.sorter = sorters;

        return sort;
    },
    _makeSorter(aSorter) {
        var sorter = new tsSearchProtos.Sorter();
        if (aSorter.fieldSort) {
            var fieldSort = new tsSearchProtos.FieldSort({
                field_name: aSorter.fieldSort.fieldName,
                order: aSorter.fieldSort.order,
                mode: aSorter.fieldSort.mode
            });

            if (aSorter.fieldSort.nestedFilter) {
                fieldSort.nested_filter = new tsSearchProtos.NestedFilter({
                    path: aSorter.fieldSort.nestedFilter.path,
                    filter: TableStore.encoder._makeQuery(aSorter.fieldSort.nestedFilter.filter)
                });
            }

            sorter.field_sort = fieldSort;
        } else if (aSorter.geoDistanceSort) {
            var geoDistanceSort = new tsSearchProtos.GeoDistanceSort({
                field_name: aSorter.geoDistanceSort.fieldName,
                points: aSorter.geoDistanceSort.points,
                order: aSorter.geoDistanceSort.order,
                mode: aSorter.geoDistanceSort.mode,
                distance_type: aSorter.geoDistanceSort.distanceType
            });

            if (aSorter.geoDistanceSort.nestedFilter) {
                geoDistanceSort.nested_filter = new tsSearchProtos.NestedFilter({
                    path: aSorter.geoDistanceSort.nestedFilter.path,
                    filter: TableStore.encoder._makeQuery(aSorter.geoDistanceSort.nestedFilter.filter)
                });
            }

            sorter.geo_distance_sort = geoDistanceSort;
        } else if (aSorter.scoreSort) {
            var scoreSort = new tsSearchProtos.ScoreSort({
                order: aSorter.scoreSort.order
            });
            sorter.score_sort = scoreSort;
        } else if (aSorter.primaryKeySort) {
            var primaryKeySort = new tsSearchProtos.PrimaryKeySort({
                order: aSorter.primaryKeySort.order
            })
            sorter.pk_sort = primaryKeySort;
        }

        return sorter;
    },
    encodeCreateIndex: function(params) {
        var request = new tsProtos.CreateIndexRequest({
            main_table_name: params.mainTableName,
            index_meta: new tsProtos.IndexMeta({
                name: params.indexMeta.name,
                primary_key: params.indexMeta.primaryKey,
                defined_column: params.indexMeta.definedColumn,
                index_update_mode: 0,//IUM_ASYNC_INDEX
                index_type: 0,//IT_GLOBAL_INDEX
            })
        });

        return request;
    },
    encodeDropIndex: function(params) {
        var request = new tsProtos.DropIndexRequest({
            main_table_name: params.mainTableName,
            index_name: params.indexName
        });
        return request;
    },
    encodeStartLocalTransaction: function (params) {
        var request = new tsProtos.StartLocalTransactionRequest({
            table_name: params.tableName,
            key: TableStore.PlainBufferBuilder.serializePrimaryKey(params.primaryKey)
        });
        return request;
    },
    encodeCommitTransaction: function (params) {
        var request = new tsProtos.CommitTransactionRequest({
            transaction_id: typeof params === 'string' ? params : params.transactionId
        });
        return request;
    },
    encodeAbortTransaction: function (params) {
        var request = new tsProtos.AbortTransactionRequest({
            transaction_id: typeof params === 'string' ? params : params.transactionId
        });
        return request;
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
    'createSearchIndex': TableStore.encoder.encodeCreateSearchIndex,
    'deleteSearchIndex': TableStore.encoder.encodeDeleteSearchIndex,
    'search': TableStore.encoder.encodeSearch,
    'createIndex': TableStore.encoder.encodeCreateIndex,
    'dropIndex': TableStore.encoder.encodeDropIndex,
    'startLocalTransaction': TableStore.encoder.encodeStartLocalTransaction,
    'commitTransaction': TableStore.encoder.encodeCommitTransaction,
    'abortTransaction': TableStore.encoder.encodeAbortTransaction,
};
