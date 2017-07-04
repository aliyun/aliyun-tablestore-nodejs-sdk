var client = require('./client');
var TableStore = require('../index.js');
var Long = TableStore.Long;

var params = {
    tables: [{
        tableName: 'sampleTable',
        rows: [{
            type: 'PUT',
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey: [{ 'gid': Long.fromNumber(8) }, { 'uid': Long.fromNumber(80) }],
            attributeColumns: [{ 'attrCol1': 'test1' }, { 'attrCol2': 'test2' }],
            returnContent: { returnType: TableStore.ReturnType.Primarykey }
        }],
    }],
};

client.batchWriteRow(params, function (err, data) {
    
    if (err) {
        console.log('error:', err);
        return;
    }

    console.log('success:', data);
});
