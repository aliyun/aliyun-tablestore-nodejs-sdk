var TableStore = require('../core');
var tsProtos = require('./tablestore_proto.js').tablestore.proto;
var tsFilterProtos = require('./tablestore_filter_proto.js').tablestore.filter.proto;
var tsSearchProtos = require('./tablestore_search_proto.js').tablestore.search.proto;

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
        return response;
    },
    _parseRowItem: function (row) {
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
        var response = tsProtos.UpdateRowResponse.decode(buffers);
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
        var response = tsProtos.GetRangeResponse.decode(buffers);
        if (response.rows && response.rows.limit > response.rows.offset) {
            var inputStream = new TableStore.PlainBufferInputStream(response.rows);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            response.rows = codedInputStream.readRows();
        } else {
            response.rows = [];
        }

        if (response.next_start_primary_key != null) {
            var nextPkInputStream = new TableStore.PlainBufferInputStream(response.next_start_primary_key);
            var nextPkCodedInputStream = new TableStore.PlainBufferCodedInputStream(nextPkInputStream);
            var nextPk = nextPkCodedInputStream.readRow();
            response.next_start_primary_key = nextPk.primaryKey;
        }

        return response;
    },
    decodeBatchGetRow: function (buffers) {
        var response = tsProtos.BatchGetRowResponse.decode(buffers);
        response.tables = TableStore.decoder._parseBatchGetRow(response.tables);
        return response;
    },
    _parseBatchGetRow: function (tables) {
        var rows = [];
        for (var item in tables) {
            rows.push(TableStore.decoder._parseBatchGetRowItem(tables[item].rows, tables[item].table_name));
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

            if (proto[item].is_ok) {
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
                isOk: proto[item].is_ok,
                errorCode: errorCode,
                errorMessage: errorMessage,
                tableName: tableName,
                capacityUnit: (proto[item].consumed == null ? '' : proto[item].consumed.capacity_unit),
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
            var tableName = tables[item].table_name;

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

        if (rowItem.is_ok) {
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
            isOk: rowItem.is_ok,
            errorCode: errorCode,
            errorMessage: errorMessage,
            tableName: tableName,
            capacityUnit: (rowItem.consumed == null ? '' : rowItem.consumed.capacity_unit),
            primaryKey: primaryKey,
            attributes: attributes
        };

        return writeRowItem;
    },
    decodeListSearchIndex: function (buffers) {
        var response = tsSearchProtos.ListSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeDescribeSearchIndex: function (buffers) {
        var response = tsSearchProtos.DescribeSearchIndexResponse.decode(buffers);
        if (response.sync_stat && response.sync_stat.current_sync_timestamp) {//nino second
            response.sync_stat.current_sync_timestamp = response.sync_stat.current_sync_timestamp.toString();
        }

        return response;
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
        var totalCounts = response.total_hits.toString();
        if (totalCounts != "-1") {
            result.totalCounts = totalCounts;
        }
        result.isAllSucceeded = response.is_all_succeeded;
        result.nextToken = response.next_token;

        var rows = [];
        TableStore.util.arrayEach(response.rows, function(aRow) {
            var inputStream = new TableStore.PlainBufferInputStream(aRow);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            var row = codedInputStream.readRow();
            rows.push(row);
        });
        result.rows = rows;

        return result;
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
        response.transactionId = response.transaction_id;
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
    'createSearchIndex': TableStore.decoder.decodeCreateSearchIndex,
    'deleteSearchIndex': TableStore.decoder.decodeDeleteSearchIndex,
    'search': TableStore.decoder.decodeSearch,
    'createIndex': TableStore.decoder.decodeCreateIndex,
    'dropIndex': TableStore.decoder.decodeDropIndex,
    'startLocalTransaction': TableStore.decoder.decodeStartLocalTransaction,
    'commitTransaction': TableStore.decoder.decodeCommitTransaction,
    'abortTransaction': TableStore.decoder.decodeAbortTransaction,
};
