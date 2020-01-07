var TableStore = require('../core');
var Int64buf = require("int64-buffer");
var inherit = TableStore.util.inherit;

TableStore.PlainBufferCodedInputStream = inherit({
    constructor: function (inputStream) {
        this.inputStream = inputStream;
    },

    readTag: function () {
        return this.inputStream.readTag();
    },

    checkLastTagWas: function (tag) {
        return this.inputStream.checkLastTagWas(tag);
    },

    getLastTag: function () {
        return this.inputStream.getLastTag();
    },

    readHeader: function () {
        return this.inputStream.readInt32();
    },

    readPrimaryKeyValue: function (cellCheckSum) {
        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL_VALUE)) {
            throw new Error('Expect TAG_CELL_VALUE but it was' + this.getLastTag());
        }
        this.inputStream.readRawLittleEndian32();
        var columnType = this.inputStream.readRawByte();

        var pkVal = undefined;
        if (columnType === TableStore.plainBufferConsts.VT_INTEGER) {
            var int64 = this.inputStream.readInt64();
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INTEGER);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
            this.readTag();
            pkVal = int64;
        } else if (columnType === TableStore.plainBufferConsts.VT_STRING) {
            var value_size = this.inputStream.readInt32();
            var string_value = this.inputStream.readUtfString(value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_STRING);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, string_value);
            this.readTag();
            pkVal = string_value;
        } else if (columnType === TableStore.plainBufferConsts.VT_BLOB) {
            var value_size = this.inputStream.readInt32();
            var binary_value = this.inputStream.readBytes(value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BLOB);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, binary_value);
            this.readTag();
            pkVal = binary_value;
        } else {
            throw new Error('Unsupported primary key type' + columnType);
        }
        return { pkVal: pkVal, cellCheckSum: cellCheckSum };
    },

    readColumnValue: function (cellCheckSum) {
        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL_VALUE)) {
            throw new Error('Expect TAG_CELL_VALUE but it was' + this.getLastTag());
        }
        var columnVal = undefined;
        this.inputStream.readRawLittleEndian32();
        var columnType = this.inputStream.readRawByte();
        if (columnType == TableStore.plainBufferConsts.VT_INTEGER) {
            var int64 = this.inputStream.readInt64();
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INTEGER);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
            this.readTag();
            columnVal = int64;
        } else if (columnType == TableStore.plainBufferConsts.VT_STRING) {
            var value_size = this.inputStream.readInt32();
            var string_value = this.inputStream.readUtfString(value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_STRING);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, string_value);
            this.readTag();
            columnVal = string_value;
        } else if (columnType == TableStore.plainBufferConsts.VT_BLOB) {
            var value_size = this.inputStream.readInt32();
            var binary_value = this.inputStream.readBytes(value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BLOB);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, value_size);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, binary_value);
            this.readTag();
            columnVal = binary_value;
        } else if (columnType == TableStore.plainBufferConsts.VT_BOOLEAN) {
            var bool_value = this.inputStream.readBoolean();
            var cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BOOLEAN);
            var bool_int8 = bool_value == true;
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, bool_int8);
            this.readTag();
            columnVal = bool_value;
        } else if (columnType == TableStore.plainBufferConsts.VT_DOUBLE) {
            var result = this.inputStream.readDoubleAndInt64();
            var int64 = result.int64LE;
            var doubleVal = result.doubleVal;
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_DOUBLE);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
            this.readTag();

            columnVal = doubleVal;
        } else {
            throw new Error("Unsupported column type: " + columnType);
        }
        return { columnVal: columnVal, cellCheckSum: cellCheckSum };
    },

    readPrimaryKeyColumn: function (rowCheckSum) {
        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL)) {
            throw new Error("Expect TAG_CELL but it was " + this.getLastTag());
        }
        this.readTag();

        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL_NAME)) {
            throw new Error("Expect TAG_CELL_NAME but it was " + this.getLastTag());
        }

        var cellCheckSum = 0;
        var name_size = this.inputStream.readRawLittleEndian32();
        var columnName = this.inputStream.readUtfString(name_size);
        var cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, columnName);
        this.readTag();

        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL_VALUE)) {
            throw new Error("Expect TAG_CELL_VALUE but it was " + this.getLastTag());
        }
        var primaryKeyValue, cellCheckSum;
        var result = this.readPrimaryKeyValue(cellCheckSum);
        primaryKeyValue = result.pkVal;
        cellCheckSum = result.cellCheckSum;

        if (this.getLastTag() == TableStore.plainBufferConsts.TAG_CELL_CHECKSUM) {
            var checkSum = this.inputStream.readRawByte();
            if (checkSum != cellCheckSum) {
                throw new Error("Checksum mismatch. expected:" + checkSum + ",actual:" + cellCheckSum);
            }
            this.readTag();
        } else {
            throw new Error("Expect TAG_CELL_CHECKSUM but it was " + this.getLastTag());
        }
        var rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, cellCheckSum);
        return {
            columnName: columnName,
            primaryKeyValue: primaryKeyValue,
            rowCheckSum: rowCheckSum
        };
    },

    readColumn: function (rowCheckSum) {
        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL)) {
            throw new Error("Expect TAG_CELL but it was " + this.getLastTag());
        }
        this.readTag();

        if (!this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL_NAME)) {
            throw new Error("Expect TAG_CELL_NAME but it was " + this.getLastTag());
        }
        var cellCheckSum = 0;
        var columnName = null;
        var columnValue = null;
        var timestamp = null;
        var name_size = this.inputStream.readRawLittleEndian32();
        var columnName = this.inputStream.readUtfString(name_size);
        var cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, columnName);
        this.readTag();

        if (this.getLastTag() == TableStore.plainBufferConsts.TAG_CELL_VALUE) {
            var columnVal = this.readColumnValue(cellCheckSum);
            columnValue = columnVal.columnVal;
            cellCheckSum = columnVal.cellCheckSum;
        }
        //# skip CELL_TYPE
        if (this.getLastTag() == TableStore.plainBufferConsts.TAG_CELL_TYPE) {
            cell_type = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, cell_type);
            this.readTag();
        }

        if (this.getLastTag() == TableStore.plainBufferConsts.TAG_CELL_TIMESTAMP) {
            var int64 = this.inputStream.readInt64();
            timestamp = int64;
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
            this.readTag();
        }
        if (this.getLastTag() == TableStore.plainBufferConsts.TAG_CELL_CHECKSUM) {
            var checkSum = this.inputStream.readRawByte();
            if (checkSum != cellCheckSum) {
                throw new Error("Checksum mismatch.");
            }
            this.readTag();
        } else {
            throw new Error("Expect TAG_CELL_CHECKSUM but it was " + this.getLastTag());
        }
        var rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, cellCheckSum);
        return {
            columnName: columnName,
            columnValue: columnValue,
            timestamp: timestamp,
            rowCheckSum: rowCheckSum
        };
    },

    readRowWithoutHeader: function () {
        var rowCheckSum = 0;
        var primaryKey = [];
        var attributes = [];

        if (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_ROW_PK)) {
            this.readTag();

            while (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL)) {
                var pkColumn = this.readPrimaryKeyColumn(rowCheckSum);
                primaryKey.push({ name: pkColumn.columnName, value: pkColumn.primaryKeyValue });
                rowCheckSum = pkColumn.rowCheckSum;
            }
        }

        if (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_ROW_DATA)) {
            this.readTag();
            while (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_CELL)) {
                var attrColumn = this.readColumn(rowCheckSum);
                attributes.push({
                    columnName: attrColumn.columnName,
                    columnValue: attrColumn.columnValue,
                    timestamp: attrColumn.timestamp
                });
                rowCheckSum = attrColumn.rowCheckSum;
            }
        }
        if (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_DELETE_ROW_MARKER)) {
            this.readTag();
            rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 1);
        } else {
            rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 0);
        }

        if (this.checkLastTagWas(TableStore.plainBufferConsts.TAG_ROW_CHECKSUM)) {
            var checkSum = this.inputStream.readRawByte();
            if (checkSum != rowCheckSum) {
                throw new Error("Checksum is mismatch.");
            }
            this.readTag();
        } else {
            throw new Error("Expect TAG_ROW_CHECKSUM but it was " + this.getLastTag());
        }
        //return primaryKey, attributes;
        return { primaryKey: primaryKey, attributes: attributes };
    },

    readRow: function () {
        if (this.readHeader() != TableStore.plainBufferConsts.HEADER) {
            throw new Error("Invalid header from plain buffer.");
        }
        this.readTag();
        return this.readRowWithoutHeader();
    },

    readRows: function () {
        if (this.readHeader() != TableStore.plainBufferConsts.HEADER) {
            throw new Error("Invalid header from plain buffer.");
        }
        this.readTag();

        var rowList = [];
        while (!this.inputStream.isAtEnd()) {
            var result = this.readRowWithoutHeader();
            rowList.push({ primaryKey: result.primaryKey, attributes: result.attributes });
        }
        return rowList;
    },


});

TableStore.PlainBufferCodedOutputStream = inherit({
    constructor: function (outputStream) {
        this.outputStream = outputStream;
    },
    writeHeader: function () {
        this.outputStream.writeRawLittleEndian32(TableStore.plainBufferConsts.HEADER);
    },
    writeTag: function (tag) {
        this.outputStream.writeRawByte(tag);
    },
    writeCellName: function (name, cellCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_NAME);
        this.outputStream.writeRawLittleEndian32(name.length);
        this.outputStream.writeBytes(name);
        cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, name);
        return cellCheckSum;
    },

    writePrimaryKeyValue: function (value, cellCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_VALUE);
        if (value === TableStore.INF_MIN) {
            this.outputStream.writeRawLittleEndian32(1);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INF_MIN);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INF_MIN);
        } else if (value === TableStore.INF_MAX) {
            this.outputStream.writeRawLittleEndian32(1);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INF_MAX);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INF_MAX);
        } else if (value === TableStore.PK_AUTO_INCR) {
            this.outputStream.writeRawLittleEndian32(1);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_AUTO_INCREMENT);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_AUTO_INCREMENT);
        } else if (value instanceof Int64buf.Int64LE) {
            this.outputStream.writeRawLittleEndian32(1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INTEGER);
            this.outputStream.writeInt64LE(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INTEGER);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, value.toBuffer());
        } else if (typeof (value) === 'string') {
            var string_value = value;
            var stringValueLength = TableStore.util.string.byteLength(string_value);
            var prefix_length = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1;
            this.outputStream.writeRawLittleEndian32(prefix_length + stringValueLength);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_STRING);
            this.outputStream.writeRawLittleEndian32(stringValueLength);

            this.outputStream.writeBytes(string_value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_STRING);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, stringValueLength);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, string_value);
        } else if (value instanceof Buffer) {
            var binary_value = value;
            var prefix_length = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1;

            this.outputStream.writeRawLittleEndian32(prefix_length + binary_value.length);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BLOB);
            this.outputStream.writeRawLittleEndian32(binary_value.length);
            this.outputStream.writeBytes(binary_value);

            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BLOB);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, binary_value.length);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, binary_value);
        } else {
            throw new Error("Unsupported primary key type: " + typeof (value));
        }
        return cellCheckSum;

    },

    writeColumnValueWithChecksum: function (value, cellCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_VALUE);
        if (value instanceof Int64buf.Int64LE) {
            this.outputStream.writeRawLittleEndian32(1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INTEGER);
            this.outputStream.writeInt64LE(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_INTEGER);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, value.toBuffer());
        } else if (typeof (value) === 'string') {
            var stringValueLength = TableStore.util.string.byteLength(value);
            var prefix_length = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1;
            this.outputStream.writeRawLittleEndian32(prefix_length + stringValueLength);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_STRING);
            this.outputStream.writeRawLittleEndian32(stringValueLength);
            this.outputStream.writeBytes(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_STRING);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, stringValueLength);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, value);
        } else if (value instanceof Buffer) {
            prefix_length = TableStore.plainBufferConsts.LITTLE_ENDIAN_32_SIZE + 1
            this.outputStream.writeRawLittleEndian32(prefix_length + value.length);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BLOB);
            this.outputStream.writeRawLittleEndian32(value.length);
            this.outputStream.writeBytes(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BLOB);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt32(cellCheckSum, value.length);
            cellCheckSum = TableStore.plainBufferCrc8.crcString(cellCheckSum, value);
        } else if (typeof (value) === 'boolean') {
            this.outputStream.writeRawLittleEndian32(2);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BOOLEAN);
            this.outputStream.writeBoolean(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_BOOLEAN);
            if (value) {
                cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, 1);
            } else {
                cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, 0);
            }
        } else if (typeof (value) === 'number') {
            var int64 = TableStore.util.Int64.doubleToRawLongBits(value);
            this.outputStream.writeRawLittleEndian32(1 + TableStore.plainBufferConsts.LITTLE_ENDIAN_64_SIZE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_DOUBLE);
            this.outputStream.writeDouble(value);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.VT_DOUBLE);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
        } else {
            throw new Error("Unsupported column type " + typeof (value));
        }
        return cellCheckSum;
    },

    writeColumnValue: function (value) {
        if (value instanceof Int64buf.Int64LE) {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INTEGER);
            this.outputStream.writeInt64LE(value);
        } else if (typeof (value) === 'string') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_STRING);
            this.outputStream.writeRawLittleEndian32(TableStore.util.string.byteLength(value));
            this.outputStream.writeBytes(value);
        } else if (value instanceof Buffer) {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BLOB);
            this.outputStream.writeRawLittleEndian32(value.length);
            this.outputStream.writeBytes(value);
        } else if (typeof (value) === 'boolean') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BOOLEAN);
            this.outputStream.writeBoolean(value);
        } else if (typeof (value) === 'number') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_DOUBLE);
            this.outputStream.writeDouble(value);
        } else {
            throw new Error("Unsupported column type: " + typeof (value));
        }

    },

    writePrimaryKeyColumn: function (pkName, pkValue, rowCheckSum) {
        var cellCheckSum = 0;
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL);
        cellCheckSum = this.writeCellName(pkName, cellCheckSum);
        cellCheckSum = this.writePrimaryKeyValue(pkValue, cellCheckSum);
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_CHECKSUM);
        this.outputStream.writeRawByte(cellCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, cellCheckSum);
        return rowCheckSum;
    },

    writeColumn: function (columnName, columnValue, timestamp, rowCheckSum) {
        var cellCheckSum = 0;
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL);
        cellCheckSum = this.writeCellName(columnName, cellCheckSum);
        cellCheckSum = this.writeColumnValueWithChecksum(columnValue, cellCheckSum);

        if (timestamp !== undefined && timestamp !== null) {
            this.writeTag(TableStore.plainBufferConsts.TAG_CELL_TIMESTAMP);
            var int64 = TableStore.Long.fromNumber(timestamp);
            this.outputStream.writeInt64LE(int64);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
        }
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_CHECKSUM);
        this.outputStream.writeRawByte(cellCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, cellCheckSum);
        return rowCheckSum;
    },

    writeUpdateColumn: function (updateType, columnName, columnValue, rowCheckSum) {
        var cellCheckSum = 0;
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL);
        var cellCheckSum = this.writeCellName(columnName, cellCheckSum);
        var timestamp = null;
        if (columnValue != null) {
            if (columnValue instanceof Array) {
                if (columnValue[0] != null) {
                    cellCheckSum = this.writeColumnValueWithChecksum(columnValue[0], cellCheckSum);
                }
                if (columnValue[1] != null) {
                    timestamp = columnValue[1];
                }
            } else {
                cellCheckSum = this.writeColumnValueWithChecksum(columnValue, cellCheckSum);
            }
        }
        if (updateType === TableStore.UpdateType.DELETE) {
            this.writeTag(TableStore.plainBufferConsts.TAG_CELL_TYPE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.DELETE_ONE_VERSION);
        } else if (updateType == TableStore.UpdateType.DELETE_ALL) {
            this.writeTag(TableStore.plainBufferConsts.TAG_CELL_TYPE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.DELETE_ALL_VERSION);
        } else if (updateType == TableStore.UpdateType.INCREMENT) {
            this.writeTag(TableStore.plainBufferConsts.TAG_CELL_TYPE);
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.INCREMENT);
        }
        if (timestamp != null) {
            this.writeTag(TableStore.plainBufferConsts.TAG_CELL_TIMESTAMP);

            var int64 = TableStore.Long.fromNumber(timestamp);
            this.outputStream.writeInt64LE(int64);
        }
        if (timestamp != null) {
            var int64 = TableStore.Long.fromNumber(timestamp);
            cellCheckSum = TableStore.plainBufferCrc8.crcInt64Buf(cellCheckSum, int64.toBuffer());
        }
        if (updateType === TableStore.UpdateType.DELETE) {
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.DELETE_ONE_VERSION);
        }
        if (updateType === TableStore.UpdateType.DELETE_ALL) {
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.DELETE_ALL_VERSION);
        }
        if (updateType === TableStore.UpdateType.INCREMENT) {
            cellCheckSum = TableStore.plainBufferCrc8.crcInt8(cellCheckSum, TableStore.plainBufferConsts.INCREMENT);
        }
        this.writeTag(TableStore.plainBufferConsts.TAG_CELL_CHECKSUM);
        this.outputStream.writeRawByte(cellCheckSum);
        rowCheckSum = TableStore.plainBufferCrc8.crcInt8(rowCheckSum, cellCheckSum);
        return rowCheckSum;
    },

    writePrimaryKey: function (primaryKeys, rowCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_ROW_PK);
        for (var i = 0; i < primaryKeys.length; i++) {
            for (var pk in primaryKeys[i]) {
                rowCheckSum = this.writePrimaryKeyColumn(pk, primaryKeys[i][pk], rowCheckSum);
            }
        }

        return rowCheckSum;
    },

    writeColumns: function (columns, rowCheckSum) {
        if (columns != null && columns.length != 0) {
            this.writeTag(TableStore.plainBufferConsts.TAG_ROW_DATA);
            for (var i = 0; i < columns.length; i++) {
                for (var k in columns[i]) {
                    rowCheckSum = this.writeColumn(k, columns[i][k], columns[i].timestamp, rowCheckSum);
                    break;//注意 break不能省略
                }
            }
        }
        return rowCheckSum;
    },

    writeUpdateColumns: function (attributeColumns, rowCheckSum) {
        if (attributeColumns.length == 0) {
            return rowCheckSum;
        }

        this.writeTag(TableStore.plainBufferConsts.TAG_ROW_DATA);
        for (var i = 0; i < attributeColumns.length; i++) {
            for (var updateType in attributeColumns[i]) {
                var columns = attributeColumns[i][updateType];
                for (var attr in columns) {
                    if (TableStore.UpdateType.DELETE_ALL === updateType) {
                        rowCheckSum = this.writeUpdateColumn(updateType, columns[attr], null, rowCheckSum);
                    } else if (TableStore.UpdateType.DELETE === updateType) {
                        for (var k in columns[attr]) {
                            rowCheckSum = this.writeUpdateColumn(updateType, k, [null, columns[attr][k]], rowCheckSum);
                        }
                    } else if (TableStore.UpdateType.PUT === updateType) {
                        //PUT有可能带timestamp
                        if (columns[attr].timestamp !== undefined) {
                            for (var k in columns[attr]) {
                                rowCheckSum = this.writeUpdateColumn(updateType, k, [columns[attr][k], columns[attr].timestamp], rowCheckSum);
                                break;
                            }
                        } else {
                            for (var k in columns[attr]) {
                                rowCheckSum = this.writeUpdateColumn(updateType, k, columns[attr][k], rowCheckSum);
                                break;
                            }
                        }
                    } else if (TableStore.UpdateType.INCREMENT === updateType) {
                        //increment 有可能带timestamp
                        if (columns[attr].timestamp !== undefined) {
                            for (var k in columns[attr]) {
                                rowCheckSum = this.writeUpdateColumn(updateType, k, [columns[attr][k], columns[attr].timestamp], rowCheckSum);
                                break;
                            }
                        } else {
                            for (var k in columns[attr]) {
                                rowCheckSum = this.writeUpdateColumn(updateType, k, columns[attr][k], rowCheckSum);
                                break;
                            }
                        }
                    }
                }
            }
        }
        return rowCheckSum;
    },

    writeDeleteMarker: function (rowCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_DELETE_ROW_MARKER);
        return TableStore.plainBufferCrc8.crcInt8(rowCheckSum, 1);
    },
    writeRowChecksum: function (rowCheckSum) {
        this.writeTag(TableStore.plainBufferConsts.TAG_ROW_CHECKSUM);
        this.outputStream.writeRawByte(rowCheckSum);
    },
    writeSearchValue: function(value) {
        if (value instanceof Int64buf.Int64LE) {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_INTEGER);
            this.outputStream.writeInt64LE(value);
        } else if (typeof (value) === 'string') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_STRING);
            this.outputStream.writeRawLittleEndian32(TableStore.util.string.byteLength(value));
            this.outputStream.writeBytes(value);
        } else if (typeof (value) === 'boolean') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_BOOLEAN);
            this.outputStream.writeBoolean(value);
        } else if (typeof (value) === 'number') {
            this.outputStream.writeRawByte(TableStore.plainBufferConsts.VT_DOUBLE);
            this.outputStream.writeDouble(value);
        } else {
            throw new Error("Unsupported column type: " + typeof (value));
        }
    }
});
