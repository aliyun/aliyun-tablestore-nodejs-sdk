var TableStore = require('../core');

var BaseProto = require('./tablestore_compiled_proto.js');
var tsProtos = BaseProto.main.proto;
var tsFilterProtos = BaseProto.filter.proto;
var tsSearchProtos = BaseProto.search.proto;

const {flatbuffers} = require("flatbuffers");
const fbsSQLResponseColumns = require('./sql_generated.js').SQLResponseColumns;


TableStore.decoder = {
    decode: function (operation, buffers) {
        return tsMap[operation](buffers);
    },
    decodeCreateTable: function (buffers) {
        var response = tsProtos.CreateTableResponse.decode(buffers);
        return response;
    },
    decodeListTable: function (buffers) {
        var response = tsProtos.ListTableResponse.decode(buffers);
        return response;
    },
    decodeDeleteTable: function (buffers) {
        var response = tsProtos.DeleteTableResponse.decode(buffers);
        return response;
    },
    decodeUpdateTable: function (buffers) {
        var response = tsProtos.UpdateTableResponse.decode(buffers);
        return response;
    },
    decodeDescribeTable: function (buffers) {
        var response = tsProtos.DescribeTableResponse.decode(buffers);
        for (var i in response.indexMetas) {
            var indexMeta = response.indexMetas[i];
            if (indexMeta.indexSyncPhase === tsProtos.IndexSyncPhase.ISP_INCR) {
                response.indexMetas[i].indexSyncPhase = TableStore.SyncPhase.INCR;
            } else {
                response.indexMetas[i].indexSyncPhase = TableStore.SyncPhase.FULL;
            }
        }
        return response;
    },
    _parseRowItem: function (row) {
        row.limit = row.offset + row.length;
        if (row && row.limit > row.offset) {
            var inputStream = new TableStore.PlainBufferInputStream(row);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            row = codedInputStream.readRow();
        } else {
            row = {};
        }
        return row;
    },
    decodeGetRow: function (buffers) {
        var response = tsProtos.GetRowResponse.decode(buffers);
        response.row = TableStore.decoder._parseRowItem(response.row);
        return response;
    },
    decodePutRow: function (buffers) {
        var response = tsProtos.PutRowResponse.decode(buffers);
        response.row = TableStore.decoder._parseRowItem(response.row);
        return response;
    },
    decodeUpdateRow: function (buffers) {
        var response = tsProtos.UpdateRowResponse.decode(buffers);
        response.row = TableStore.decoder._parseRowItem(response.row);
        return response;
    },
    decodeDeleteRow: function (buffers) {
        var response = tsProtos.DeleteRowResponse.decode(buffers);
        return response;
    },
    decodeGetRange: function (buffers) {
        var returnResp = {};
        var response = tsProtos.GetRangeResponse.decode(buffers);

        returnResp.consumed = response.consumed;
        response.rows.limit = response.rows.offset + response.rows.length;
        if (response.rows && response.rows.limit > response.rows.offset) {
            var inputStream = new TableStore.PlainBufferInputStream(response.rows);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            returnResp.rows = codedInputStream.readRows();
        } else {
            returnResp.rows = [];
        }

        if (response.nextStartPrimaryKey && response.nextStartPrimaryKey.length > 0) {
            var nextPkInputStream = new TableStore.PlainBufferInputStream(response.nextStartPrimaryKey);
            var nextPkCodedInputStream = new TableStore.PlainBufferCodedInputStream(nextPkInputStream);
            var nextPk = nextPkCodedInputStream.readRow();
            returnResp.nextStartPrimaryKey = nextPk.primaryKey;
        } else {
            returnResp.nextStartPrimaryKey = null;
        }

        returnResp.compressType = response.compressType;
        returnResp.dataBlockType = response.dataBlockType;
        returnResp.nextToken = response.nextToken;

        return returnResp;
    },
    decodeBatchGetRow: function (buffers) {
        var response = tsProtos.BatchGetRowResponse.decode(buffers);
        return {
            tables: TableStore.decoder._parseBatchGetRow(response.tables),
        };
    },
    _parseBatchGetRow: function (tables) {
        var rows = [];
        for (var item in tables) {
            rows.push(TableStore.decoder._parseBatchGetRowItem(tables[item].rows, tables[item].tableName));
        }
        return rows;
    },
    _parseBatchGetRowItem: function (proto, tableName) {
        var rowList = []
        for (var item in proto) {
            var primaryKeyColumns = null;
            var attributeColumns = null;
            var errorCode = null;
            var errorMessage = null;

            if (proto[item].isOk) {
                if (proto[item].row && proto[item].row.length != 0) {
                    var inputStream = new TableStore.PlainBufferInputStream(proto[item].row);
                    var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
                    var result = codedInputStream.readRow();
                    primaryKeyColumns = result.primaryKey;
                    attributeColumns = result.attributes;
                }
            } else {
                errorCode = proto[item].error.code;
                errorMessage = proto[item].error.message;
            }
            var rowDataItem = {
                isOk: proto[item].isOk,
                errorCode: errorCode,
                errorMessage: errorMessage,
                tableName: tableName,
                capacityUnit: (proto[item].consumed == null ? '' : proto[item].consumed.capacityUnit),
                primaryKey: primaryKeyColumns,
                attributes: attributeColumns
            };
            rowList.push(rowDataItem);
        }

        return rowList;
    },
    decodeBatchWriteRow: function (buffers) {
        var response = tsProtos.BatchWriteRowResponse.decode(buffers);
        response.tables = TableStore.decoder._parseBatchWriteRow(response.tables);
        return response;
    },
    _parseBatchWriteRow: function (tables) {
        var rowList = [];
        for (var item in tables) {
            var tableName = tables[item].tableName;

            for (var row in tables[item].rows) {
                var row = TableStore.decoder._parseWriteRowItem(tables[item].rows[row], tableName);
                rowList.push(row);
            }
        }
        return rowList;
    },
    _parseWriteRowItem: function (rowItem, tableName) {
        var primaryKey = null;
        var attributes = null;
        var errorCode = null;
        var errorMessage = null;

        if (rowItem.isOk) {
            if (rowItem.row != null && rowItem.row.length != 0) {
                var inputStream = new TableStore.PlainBufferInputStream(rowItem.row);
                var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
                var result = codedInputStream.readRow();
                primaryKey = result.primaryKey;
                attributes = result.attributes;
            }
        } else {
            errorCode = rowItem.error.code;
            errorMessage = rowItem.error.message;
        }

        var writeRowItem = {
            isOk: rowItem.isOk,
            errorCode: errorCode,
            errorMessage: errorMessage,
            tableName: tableName,
            capacityUnit: (rowItem.consumed == null ? '' : rowItem.consumed.capacityUnit),
            primaryKey: primaryKey,
            attributes: attributes
        };

        return writeRowItem;
    },
    decodeListSearchIndex: function (buffers) {
        return tsSearchProtos.ListSearchIndexResponse.decode(buffers);
    },
    _parseSingleWordAnalyzerParameter: function (buffers) {
        return tsSearchProtos.SingleWordAnalyzerParameter.decode(buffers);
    },
    _parseSplitAnalyzerParameter: function (buffers) {
        return tsSearchProtos.SplitAnalyzerParameter.decode(buffers);
    },
    _parseFuzzyAnalyzerParameter: function (buffers) {
        const response = tsSearchProtos.FuzzyAnalyzerParameter.decode(buffers);
        return response;
    },
    decodeDescribeSearchIndex: function (buffers) {
        const response = tsSearchProtos.DescribeSearchIndexResponse.decode(buffers);
        for (let fieldSchema of response.schema.fieldSchemas) {
            if (fieldSchema.analyzer) {
                if (fieldSchema.analyzer === "single_word") {
                    fieldSchema.analyzerParameter = TableStore.decoder._parseSingleWordAnalyzerParameter(fieldSchema.analyzerParameter);
                }
                if (fieldSchema.analyzer === "split") {
                    fieldSchema.analyzerParameter = TableStore.decoder._parseSplitAnalyzerParameter(fieldSchema.analyzerParameter);
                }
                if (fieldSchema.analyzer === "fuzzy") {
                    fieldSchema.analyzerParameter = TableStore.decoder._parseFuzzyAnalyzerParameter(fieldSchema.analyzerParameter);
                }
            }
        }
        response.indexStatus = TableStore.decoder._parseIndexStatus(response.indexStatus);
        return response;
    },
    _parseIndexStatus: function (indexStatus) {
        var parseIndexStatus = {
            statusDescription: indexStatus.statusDescription
        }
        switch (indexStatus.status) {
            case tsSearchProtos.IndexStatusEnum.PENDING: {
                parseIndexStatus.status = TableStore.IndexStatus.PENDING;
                break;
            }
            case tsSearchProtos.IndexStatusEnum.FAILED: {
                parseIndexStatus.status = TableStore.IndexStatus.FAILED;
                break;
            }
            case tsSearchProtos.IndexStatusEnum.RUNNING: {
                parseIndexStatus.status = TableStore.IndexStatus.RUNNING;
                break;
            }
            default:
                parseIndexStatus.status = TableStore.IndexStatus.UNKNOWN;
        }
        return parseIndexStatus;
    },
    decodeUpdateSearchIndex: function (buffers) {
        return tsSearchProtos.UpdateSearchIndexResponse.decode(buffers);
    },
    decodeCreateSearchIndex: function (buffers) {
        var response = tsSearchProtos.CreateSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeDeleteSearchIndex: function (buffers) {
        var response = tsSearchProtos.DeleteSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeSearch: function (buffers) {
        var response = tsSearchProtos.SearchResponse.decode(buffers);
        var result = {};
        var totalCounts = response.totalHits.toString();
        if (totalCounts != "-1") {
            result.totalCounts = totalCounts;
        }
        result.isAllSucceeded = response.isAllSucceeded;
        result.nextToken = response.nextToken;

        var rows = [];
        TableStore.util.arrayEach(response.rows, function(aRow) {
            var inputStream = new TableStore.PlainBufferInputStream(aRow);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            var row = codedInputStream.readRow();
            rows.push(row);
        });
        result.rows = rows;
        if (response.aggs && response.aggs.length > 0) {
            result.aggs = TableStore.decoder._parseAggs(response.aggs);
        }
        if (response.groupBys && response.groupBys.length > 0) {
            result.groupBys = TableStore.decoder._parseGroupBys(response.groupBys);
        }

        result.searchHits = [];
        if(response.rows.length !== response.searchHits.length && response.searchHits.length !== 0) {
            console.log("the row count is not equal to search extra result item count in server response body, ignore the search extra result items.");
        } else {
            for (let i in response.searchHits) {
                result.searchHits.push(TableStore.decoder._parseSearchHit(response.searchHits[i], rows[i]));
            }
        }
        if (response.consumed) {
            result.consumed = response.consumed;
        }
        if (response.reservedConsumed) {
            result.reservedConsumed = response.reservedConsumed;
        }

        return result;
    },
    _parseSearchHit(searchHit, row) {
        var parseSearchHit = {
            row: row,
        }
        if (searchHit.nestedDocOffset) {
            parseSearchHit.nestedDocOffset = searchHit.nestedDocOffset;
        }
        if (searchHit.score) {
            parseSearchHit.score = searchHit.score;
        }
        if (searchHit.highlightResult) {
            parseSearchHit.highlightResultItem = TableStore.decoder._parseHighlightResultItem(searchHit);
        }
        parseSearchHit.searchInnerHits = new Map();
        for (var item in searchHit.searchInnerHits) {
            var searchInnerHit = searchHit.searchInnerHits[item];
            parseSearchHit.searchInnerHits.set(searchInnerHit.path, TableStore.decoder._parseSearchInnerHit(searchInnerHit))
        }
        return parseSearchHit;
    },
    _parseSearchInnerHit(searchInnerHit) {
        var parseSearchInnerHit = {
            path: searchInnerHit.path,
        }
        parseSearchInnerHit.subSearchHits = [];
        for (var item in searchInnerHit.searchHits) {
            parseSearchInnerHit.subSearchHits.push(this._parseSearchHit(searchInnerHit.searchHits[item], null));
        }
        return parseSearchInnerHit;
    },
    _parseHighlightResultItem(searchHit) {
        var highlightFields = new Map();
        for (var item in searchHit.highlightResult.highlightFields) {
            var parseHighlightField = {
                fragments: searchHit.highlightResult.highlightFields[item].fieldFragments,
            }
            highlightFields.set(searchHit.highlightResult.highlightFields[item].fieldName, parseHighlightField)
        }
        var parseHighlightResultItem={
            highlightFields: highlightFields
        }
        return parseHighlightResultItem;
    },
    _parseSearchVariant(bytes) {
        let inputStream = new TableStore.PlainBufferInputStream(bytes);
        let codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
        let value = codedInputStream.readSearchVariant();
        return value;
    },
    decodeComputeSplits: function (buffers) {
        return tsSearchProtos.ComputeSplitsResponse.decode(buffers);
    },
    _parseRows(aRows) {
        let rows = [];
        TableStore.util.arrayEach(aRows, function (aRow) {
            let inputStream = new TableStore.PlainBufferInputStream(aRow);
            let codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            let row = codedInputStream.readRow();
            rows.push(row);
        });
        return rows;
    },
    _parseSQLRows(aRows) {
        let inputStream = new TableStore.PlainBufferInputStream(aRows);
        let codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
        return codedInputStream.readRows();
    },
    decodeParallelScan: function (buffers) {
        let response = tsSearchProtos.ParallelScanResponse.decode(buffers);
        let result = {};
        result.nextToken = response.nextToken;
        result.rows = TableStore.decoder._parseRows(response.rows);
        return result;
    },
    _parseAggs(aggs){
        let aggResultArray = [];
        let aggsResult = TableStore.decoder._isBuffer(aggs) ? tsSearchProtos.AggregationsResult.decode(aggs) : aggs;
        TableStore.util.arrayEach(aggsResult.aggResults, function (agg) {
            let aggResult = TableStore.decoder._parseAgg(agg);
            aggResultArray.push(aggResult);
        });
        return {
            aggResults: aggResultArray
        };
    },
    _isBuffer: function (str) {
        return str && typeof str === "object" && Buffer.isBuffer(str)
    },
    _parseAgg(agg) {
        return {
            name: agg.name,
            type: agg.type,
            aggResult: TableStore.decoder._parseAggResult(agg.type, agg.aggResult),
        };
    },
    _parseAggResult(aggType, aggResultBody) {
        switch (aggType) {
            case tsSearchProtos.AggregationType.AGG_AVG: {
                return tsSearchProtos.AvgAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_MAX: {
                return tsSearchProtos.MaxAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_MIN: {
                return tsSearchProtos.MinAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_SUM: {
                return tsSearchProtos.SumAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_COUNT: {
                return tsSearchProtos.CountAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_DISTINCT_COUNT: {
                return tsSearchProtos.DistinctCountAggregationResult.decode(aggResultBody);
            }
            case tsSearchProtos.AggregationType.AGG_TOP_ROWS: {
                let topRowsAggregationResult = tsSearchProtos.TopRowsAggregationResult.decode(aggResultBody);
                return {
                    rows: TableStore.decoder._parseRows(topRowsAggregationResult.rows),
                }
            }
            case tsSearchProtos.AggregationType.AGG_PERCENTILES: {
                let percentilesAggregationResult = tsSearchProtos.PercentilesAggregationResult.decode(aggResultBody);
                let percentilesAggregationItems = [];
                for (let percentilesAggregationItem of percentilesAggregationResult.percentilesAggregationItems) {
                    percentilesAggregationItems.push({
                        item: {
                            key: percentilesAggregationItem.key,
                            value: TableStore.decoder._parseSearchVariant(percentilesAggregationItem.value),
                        },
                    });
                }
                return {
                    items: percentilesAggregationItems,

                };
            }
            default:
                throw new Error("not exist AggregationType: " + aggType);
        }
    },
    _parseGroupBys(groupBys) {
        let groupByArray = [];
        let groupBysResult = TableStore.decoder._isBuffer(groupBys) ? tsSearchProtos.GroupBysResult.decode(groupBys) : groupBys;
        TableStore.util.arrayEach(groupBysResult.groupByResults, function (agg) {
            let groupByResult = TableStore.decoder._parseGroupBy(agg);
            groupByArray.push(groupByResult);
        });
        return {
            groupByResults: groupByArray,
        };
    },
    _parseGroupBy(groupBy) {
        return {
            name: groupBy.name,
            type: groupBy.type,
            groupByResult: TableStore.decoder._parseGroupByResult(groupBy.type, groupBy.groupByResult),
        };
    },
    _parseSubAggAndGroupByResult(itemResult, item) {
        if (item.subAggsResult) {
            itemResult.subAggsResult = TableStore.decoder._parseAggs(item.subAggsResult);
        }
        if (item.subGroupBysResult) {
            itemResult.subGroupBysResult = TableStore.decoder._parseGroupBys(item.subGroupBysResult);
        }
    },
    _parseGroupByResult(groupByType, groupByResultBody) {
        switch (groupByType) {
            case tsSearchProtos.GroupByType.GROUP_BY_FIELD: {
                let groupByFieldResult = tsSearchProtos.GroupByFieldResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByFieldResult.groupByFieldResultItems, function (item) {
                    let itemResult = {
                        key: item.key,
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_RANGE: {
                let groupByRangeResult = tsSearchProtos.GroupByRangeResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByRangeResult.groupByRangeResultItems, function (item) {
                    let itemResult = {
                        from: item.from,
                        to: item.to,
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_FILTER: {
                let groupByFilterResult = tsSearchProtos.GroupByFilterResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByFilterResult.groupByFilterResultItems, function (item) {
                    let itemResult = {
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_GEO_DISTANCE: {
                let groupByGeoDistanceResult = tsSearchProtos.GroupByGeoDistanceResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByGeoDistanceResult.groupByGeoDistanceResultItems, function (item) {
                    let itemResult = {
                        from: item.from,
                        to: item.to,
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_HISTOGRAM: {
                let groupByHistogramResult = tsSearchProtos.GroupByHistogramResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByHistogramResult.groupByHistogramItems, function (item) {
                    let itemResult = {
                        key: TableStore.decoder._parseSearchVariant(item.key),
                        value: item.value,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_DATE_HISTOGRAM: {
                let groupByDateHistogramResult = tsSearchProtos.GroupByDateHistogramResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByDateHistogramResult.groupByDateHistogramItems, function (item) {
                    let itemResult = {
                        timeStamp: item.timestamp,
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_GEO_GRID: {
                let groupByGeoGridResult = tsSearchProtos.GroupByGeoGridResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByGeoGridResult.groupByGeoGridResultItems, function (item) {
                    let itemResult = {
                        key: item.key,
                        rowCount: item.rowCount,
                        geoGrid: item.geoGrid,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    items: resultItems,
                };
            }
            case tsSearchProtos.GroupByType.GROUP_BY_COMPOSITE: {
                let groupByCompositeResult = tsSearchProtos.GroupByCompositeResult.decode(groupByResultBody);
                let resultItems = [];
                TableStore.util.arrayEach(groupByCompositeResult.groupByCompositeResultItems, function (item) {
                    let itemResult = {
                        keys: item.keys,
                        rowCount: item.rowCount,
                    };
                    TableStore.decoder._parseSubAggAndGroupByResult(itemResult, item);
                    resultItems.push(itemResult);
                });
                return {
                    sourceNames: groupByCompositeResult.sourceGroupByNames,
                    nextToken: groupByCompositeResult.nextToken || null,
                    items: resultItems,
                };
            }
            default:
                throw new Error("not exist groupByType: " + groupByType);
        }
    },
    decodeCreateIndex: function (buffers) {
        var response = tsSearchProtos.CreateSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeDropIndex: function (buffers) {
        var response = tsSearchProtos.DeleteSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeStartLocalTransaction: function (buffers) {
        var response = tsProtos.StartLocalTransactionResponse.decode(buffers);
        response.transactionId = response.transactionId;
        return response;
    },
    decodeCommitTransaction: function (buffers) {
        var response = tsProtos.CommitTransactionResponse.decode(buffers);
        return response;
    },
    decodeAbortTransaction: function (buffers) {
        var response = tsProtos.AbortTransactionRequest.decode(buffers);
        return response;
    },
    decodeSQLQuery: function (buffers) {
        const response = tsProtos.SQLQueryResponse.decode(buffers);
        const result = {};
        if (response.consumes) {
            result.consumes = response.consumes;
        }
        if (response.version) {
            result.version = response.version;
        }
        if (response.rows) {
            switch (response.version) {
                case tsProtos.SQLPayloadVersion.SQL_FLAT_BUFFERS: {
                    let buf = new flatbuffers.ByteBuffer(response.rows);
                    let sqlResponseColumns = fbsSQLResponseColumns.getRootAsSQLResponseColumns(buf);
                    result.sqlRows = new TableStore.SQLRows(sqlResponseColumns);
                    break;
                }
                default:
                    throw new Error("not exist SQLPayloadVersion: " + response.version);
            }
        }
        if (response.type) {
            result.type = response.type;
        }
        return result;
    },
};

var tsMap = {
    'createTable': TableStore.decoder.decodeCreateTable,
    'listTable': TableStore.decoder.decodeListTable,
    'deleteTable': TableStore.decoder.decodeDeleteTable,
    'updateTable': TableStore.decoder.decodeUpdateTable,
    'describeTable': TableStore.decoder.decodeDescribeTable,
    'getRow': TableStore.decoder.decodeGetRow,
    'putRow': TableStore.decoder.decodePutRow,
    'updateRow': TableStore.decoder.decodeUpdateRow,
    'deleteRow': TableStore.decoder.decodeDeleteRow,
    'getRange': TableStore.decoder.decodeGetRange,
    'batchGetRow': TableStore.decoder.decodeBatchGetRow,
    'batchWriteRow': TableStore.decoder.decodeBatchWriteRow,
    'listSearchIndex': TableStore.decoder.decodeListSearchIndex,
    'describeSearchIndex': TableStore.decoder.decodeDescribeSearchIndex,
    'updateSearchIndex': TableStore.decoder.decodeUpdateSearchIndex,
    'createSearchIndex': TableStore.decoder.decodeCreateSearchIndex,
    'deleteSearchIndex': TableStore.decoder.decodeDeleteSearchIndex,
    'search': TableStore.decoder.decodeSearch,
    'computeSplits': TableStore.decoder.decodeComputeSplits,
    'parallelScan': TableStore.decoder.decodeParallelScan,
    'createIndex': TableStore.decoder.decodeCreateIndex,
    'dropIndex': TableStore.decoder.decodeDropIndex,
    'startLocalTransaction': TableStore.decoder.decodeStartLocalTransaction,
    'commitTransaction': TableStore.decoder.decodeCommitTransaction,
    'abortTransaction': TableStore.decoder.decodeAbortTransaction,
    'SQLQuery': TableStore.decoder.decodeSQLQuery,
};
