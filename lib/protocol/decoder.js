var TableStore = require('../core');
var tsProtos = require('./tablestore_proto.js').tablestore.proto;
var tsFilterProtos = require('./tablestore_filter_proto.js').tablestore.filter.proto;

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
    decodeGetRow: function (buffers) {
        var response = tsProtos.GetRowResponse.decode(buffers);
        if (response.row && response.row.limit > response.row.offset) {
            var inputStream = new TableStore.PlainBufferInputStream(response.row);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            response.row = codedInputStream.readRow();
        } else {
            response.row = {};
        }
        return response;
    },
    decodePutRow: function (buffers) {
        var response = tsProtos.UpdateRowResponse.decode(buffers);
        if (response.row && response.row.limit > response.row.offset) {
            var inputStream = new TableStore.PlainBufferInputStream(response.row);
            var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
            response.row = codedInputStream.readRow();
        } else {
            response.row = {};
        }
        return response;
    },
    decodeUpdateRow: function (buffers) {
        var response = tsProtos.UpdateRowResponse.decode(buffers);
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
            rows.push(TableStore.decoder._parseGetRowItem(tables[item].rows, tables[item].table_name));
        }
        return rows;
    },
    _parseGetRowItem: function (proto, tableName) {
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
            rowList[tableName] = [];

            for (var row in tables[item].rows) {
                var row = TableStore.decoder._parseWriteRowItem(tables[item].rows[row]);
                rowList[tableName].push(row);
            }
        }
        return rowList;
    },
    _parseWriteRowItem: function (rowItem) {
        var primaryKey = null;
        var errorCode = null;
        var errorMessage = null;

        if (rowItem.is_ok) {
            if (rowItem.row != null && rowItem.row.length != 0) {
                var inputStream = new TableStore.PlainBufferInputStream(rowItem.row);
                var codedInputStream = new TableStore.PlainBufferCodedInputStream(inputStream);
                var result = codedInputStream.readRow();
                primaryKey = result.primaryKey;
            }
        } else {
            errorCode = rowItem.error.code;
            errorMessage = rowItem.error.message;
        }

        var writeRowItem = {
            isOk: rowItem.is_ok,
            errorCode: errorCode,
            errorMessage: errorMessage,
            capacityUnit: (rowItem.consumed == null ? '' : rowItem.consumed.capacity_unit),
            primaryKey: primaryKey
        };

        return writeRowItem;
    }
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
    'batchWriteRow': TableStore.decoder.decodeBatchWriteRow
};