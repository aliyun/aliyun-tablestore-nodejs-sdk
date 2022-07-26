const TableStore = require('./core');
const {DataType, DataTypeName} = require('./protocol/sql_generated.js')

TableStore.SQLPayloadVersion = {
    SQL_FLAT_BUFFERS: 2,
};

TableStore.SQLStatementType = {
    SQL_SELECT: 1,
    SQL_CREATE_TABLE: 2,
    SQL_SHOW_TABLE: 3,
    SQL_DESCRIBE_TABLE: 4,
    SQL_DROP_TABLE: 5,
    SQL_ALTER_TABLE: 6,
};

TableStore.SQLDataType = DataType
TableStore.SQLDataTypeName = DataTypeName

TableStore.SQLRows = function (columns) {
    this.rowCount = columns.rowCount();
    this.columnCount = columns.columnsLength();
    this._columnNames = [];
    this._columnTypes = [];
    this._columnTypeNames = [];
    this._columnValues = [];
    this._rleStringValues = [];
    for (let i = 0; i < columns.columnsLength(); i++) {
        let column = columns.columns(i);
        this._columnNames[i] = column.columnName();
        this._columnTypes[i] = column.columnType();
        this._columnTypeNames[i] = TableStore.SQLDataTypeName[column.columnType()];
        this._columnValues[i] = column.columnValue();
        this._rleStringValues[i] = this._columnValues[i].rleStringValues();
    }
    this.get = function (rowIndex, columnIndex) {
        if (rowIndex >= this.rowCount || rowIndex < 0) {
            throw new Error("Row index " + columnIndex + " out of range");
        }
        if (columnIndex >= this.columnCount || columnIndex < 0) {
            throw new Error("Column index " + columnIndex + " out of range");
        }
        let columnType = this._columnTypes[columnIndex];
        let columnValue = this._columnValues[columnIndex];
        switch (columnType) {
            case TableStore.SQLDataType.LONG:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    return columnValue.longValues(rowIndex);
                }
            case TableStore.SQLDataType.BOOLEAN:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    return columnValue.boolValues(rowIndex);
                }
            case TableStore.SQLDataType.DOUBLE:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    return columnValue.doubleValues(rowIndex);
                }
            case TableStore.SQLDataType.STRING:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    return columnValue.stringValues(rowIndex);
                }
            case TableStore.SQLDataType.BINARY:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    return columnValue.binaryValues(rowIndex);
                }
            case TableStore.SQLDataType.STRING_RLE:
                if (columnValue.isNullvalues(rowIndex)) {
                    return null;
                } else {
                    let rleStringValue = this._rleStringValues[columnIndex];
                    return this._resolveRLEString(rleStringValue, rowIndex);
                }
            default:
                throw new Error("not supported column type in flatBuffers: " + columnType);
        }
    };

    this._resolveRLEString = function (rleStringValue, rowIndex) {
        return rleStringValue.array(rleStringValue.indexMapping(rowIndex));
    }

    this._resolveSQLTableMetaFromColumns = function () {
        let schemas = [];
        let columnsMap = {};
        for (let i = 0; i < this.columnCount; i++) {
            let schema = {
                name: this._columnNames[i],
                type: this._columnTypes[i],
                typeName: this._columnTypeNames[i],

            };
            schemas.push(schema);
            columnsMap[this._columnNames[i]] = i;
        }
        return {
            schemas: schemas,
            columnsMap: columnsMap,
        };
    };
    this.sqlTableMeta = this._resolveSQLTableMetaFromColumns();
}
