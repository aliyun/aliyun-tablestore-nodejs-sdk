var TableStore = require('../core');
var Int64buf = require("int64-buffer");

TableStore.PlainBufferBuilder = {
    computePrimaryKeyValueSize: function (value) {
        var size = 1;  // # TAG_CELL_VALUE
        size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1; // length + type

        if ((value === TableStore.INF_MIN) || (value === TableStore.INF_MAX) || (value === TableStore.PK_AUTO_INCR)) {
            size += 1;
            return size;
        }
        if (value instanceof Int64buf.Int64LE) {
            size += 8;
        } else if (typeof (value) === 'string') {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
            size += TableStore.util.string.byteLength(value);
        } else if (value instanceof Buffer) {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
            size += value.length;
        } else {
            throw new Error("Unsupported primary key type:" + typeof (value));
        }
        return size;
    },

    computeVariantValueSize: function (value) {
        return this.computePrimaryKeyValueSize(value) - TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE - 1;
    },

    computePrimaryKeyColumnSize: function (pk_name, pk_value) {
        var size = 1;
        size += 1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
        size += pk_name.length;
        size += this.computePrimaryKeyValueSize(pk_value);
        size += 2;
        return size;
    },

    computeColumnValueSize: function (value) {
        var size = 1
        size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1;

        if (typeof (value) === 'number') {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE;
        } else if (typeof (value) === 'string') {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
            size += TableStore.util.string.byteLength(value);
        } else if (value instanceof Buffer) {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
            size += value.length;
        } else if (typeof (value) === 'boolean') {
            size += 1;
        } else if (value instanceof Int64buf.Int64LE) {
            size += TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE;
        } else {
            throw new Error("Unsupported column type: " + typeof (value));
        }
        return size;
    },

    computeVariantValueSize: function (columnValue) {
        return this.computeColumnValueSize(columnValue) - TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE - 1;
    },

    computeColumnSize: function (columnName, columnValue, timestamp) {
        var size = 1;
        size += 1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
        size += TableStore.util.string.byteLength(columnName);
        if (columnValue !== null) {
            size += this.computeColumnValueSize(columnValue);
        }
        if (timestamp !== undefined) {
            size += 1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE;
        }
        size += 2;
        return size;
    },

    computeUpdateColumnSize: function (columnName, columnValue, updateType) {
        var size = this.computeColumnSize(columnName, columnValue);
        if (updateType === TableStore.UpdateType.DELETE
            || updateType === TableStore.UpdateType.DELETE_ALL
            || updateType === TableStore.UpdateType.INCREMENT
        ) {
            size += 2;
        }
        return size;
    },

    computePrimaryKeySize: function (primaryKeys) {
        var size = 1;
        for (var i = 0; i < primaryKeys.length; i++) {
            for (key in primaryKeys[i]) {
                size += this.computePrimaryKeyColumnSize(key, primaryKeys[i][key]);
            }
        }
        return size;
    },

    computePutRowSize: function (primaryKey, attributeColumns) {
        var size = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
        size += this.computePrimaryKeySize(primaryKey);
        if (attributeColumns && attributeColumns.length != 0) {
            size += 1;
            for (var i = 0; i < attributeColumns.length; i++) {
                if (attributeColumns[i].timestamp === undefined) {
                    for (var k in attributeColumns[i]) {
                        size += this.computeColumnSize(k, attributeColumns[i][k]);
                    }
                } else {
                    for (var k in attributeColumns[i]) {
                        size += this.computeColumnSize(k, attributeColumns[i][k], attributeColumns[i].timestamp);
                        break;//注意 break不能省略
                    }
                }
            }
        }
        size += 2;
        return size;
    },

    computeUpdateRowSize: function (primaryKey, attributeColumns) {
        var size = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
        size += this.computePrimaryKeySize(primaryKey);

        if (attributeColumns.length != 0) {
            size += 1;

            for (var i = 0; i < attributeColumns.length; i++) {
                for (var updateType in attributeColumns[i]) {
                    var columns = attributeColumns[i][updateType];
                    if (!columns instanceof Array) {
                        throw new Error("Unsupported column type:" + typeof (columns));
                    }
                    for (var obj in columns) {
                        if (updateType === TableStore.UpdateType.DELETE_ALL) {
                            size += this.computeUpdateColumnSize(columns[obj], null, updateType);
                        } else if (
                            updateType === TableStore.UpdateType.PUT
                            || updateType === TableStore.UpdateType.DELETE
                            || updateType === TableStore.UpdateType.INCREMENT
                        ) {
                            for (var o in columns[obj]) {
                                size += this.computeUpdateColumnSize(o, columns[obj][o], updateType);
                            }
                        } else {
                            throw new Error('Expect TableStore.UpdateType but it was:' + updateType);
                        }
                    }
                    break;
                }
            }
        }
        size += 2;
        return size;
    },

    computeDeleteRowSize: function (primaryKey) {
        size = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE
        size += this.computePrimaryKeySize(primaryKey)
        size += 3
        return size
    },

    serializePrimaryKeyValue: function (value) {
        var bufSize = this.computeVariantValueSize(value);
        var stream = new TableStore.PlainBufferOutputStream(bufSize);
        var coded_stream = new TableStore.PlainBufferCodedOutputStream(stream);

        coded_stream.writePrimaryKeyValue(value);
        return stream.getBuffer();
    },

    serializeColumnValue: function (value) {
        var bufSize = this.computeVariantValueSize(value);
        var stream = new TableStore.PlainBufferOutputStream(bufSize);
        var coded_stream = new TableStore.PlainBufferCodedOutputStream(stream);

        coded_stream.writeColumnValue(value);
        return stream.getBuffer();
    },

    serializePrimaryKey: function (primaryKey) {
        var bufSize = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE;
        bufSize += this.computePrimaryKeySize(primaryKey);
        bufSize += 2;

        var outputStream = new TableStore.PlainBufferOutputStream(bufSize);
        var codedOutputStream = new TableStore.PlainBufferCodedOutputStream(outputStream);

        var rowCheckSum = 0;
        codedOutputStream.writeHeader();

        rowCheckSum = codedOutputStream.writePrimaryKey(primaryKey, rowCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 0);
        codedOutputStream.writeRowChecksum(rowCheckSum);
        return outputStream.getBuffer();
    },

    serializeForPutRow: function (primaryKey, attributeColumns) {
        var bufSize = this.computePutRowSize(primaryKey, attributeColumns);
        var outputStream = new TableStore.PlainBufferOutputStream(bufSize);
        var codedOutputStream = new TableStore.PlainBufferCodedOutputStream(outputStream);

        var rowCheckSum = 0;
        codedOutputStream.writeHeader();
        rowCheckSum = codedOutputStream.writePrimaryKey(primaryKey, rowCheckSum);
        rowCheckSum = codedOutputStream.writeColumns(attributeColumns, rowCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 0);
        codedOutputStream.writeRowChecksum(rowCheckSum);
        return outputStream.getBuffer();
    },

    serializeForUpdateRow: function (primaryKey, attributeColumns) {
        var bufSize = this.computeUpdateRowSize(primaryKey, attributeColumns);
        var outputStream = new TableStore.PlainBufferOutputStream(bufSize);
        var codedOutputStream = new TableStore.PlainBufferCodedOutputStream(outputStream);

        var rowCheckSum = 0;
        codedOutputStream.writeHeader();
        rowCheckSum = codedOutputStream.writePrimaryKey(primaryKey, rowCheckSum);
        rowCheckSum = codedOutputStream.writeUpdateColumns(attributeColumns, rowCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 0);
        codedOutputStream.writeRowChecksum(rowCheckSum);
        return outputStream.getBuffer();
    },

    serializeForDeleteRow: function (primaryKey) {
        var bufSize = this.computeDeleteRowSize(primaryKey);
        var outputStream = new TableStore.PlainBufferOutputStream(bufSize);
        var codedOutputStream = new TableStore.PlainBufferCodedOutputStream(outputStream);

        var rowCheckSum = 0;
        codedOutputStream.writeHeader();
        rowCheckSum = codedOutputStream.writePrimaryKey(primaryKey, rowCheckSum);
        rowCheckSum = codedOutputStream.writeDeleteMarker(rowCheckSum);
        codedOutputStream.writeRowChecksum(rowCheckSum);
        return outputStream.getBuffer();
    },
    serializeSearchValue: function (value, field) {
        if (value === undefined || value === null) {
            throw new Error('Expect [' + field +  '] but it was: ' + value);
        }
        var bufSize = this.computeVariantValueSize(value);
        var stream = new TableStore.PlainBufferOutputStream(bufSize);
        var coded_stream = new TableStore.PlainBufferCodedOutputStream(stream);

        coded_stream.writeSearchValue(value);
        return stream.getBuffer();
    },
};
