var TableStore = require('../core');

var BaseProto = require('./tablestore_compiled_proto.js');
var tsProtos = BaseProto.main.proto;
var tsFilterProtos = BaseProto.filter.proto;
var tsSearchProtos = BaseProto.search.proto;


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
        var response = tsSearchProtos.ListSearchIndexResponse.decode(buffers);
        return response;
    },
    decodeDescribeSearchIndex: function (buffers) {
        var response = tsSearchProtos.DescribeSearchIndexResponse.decode(buffers);
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
