var client = require('./client');
var TableStore = require('../index.js');
var Long = TableStore.Long;

var params = {

    tables: [
        {
            tableName: 'sampleTable',
            rows: [
                {
                    type: 'UPDATE',
                    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                    primaryKey: [{ 'gid': Long.fromNumber(8) }, { 'uid': Long.fromNumber(80) }],
                    attributeColumns: [{ 'PUT': [{ 'attrCol1': 'test3' }, { 'attrCol2': 'test4' }] }],
                    returnContent: { returnType: 1 }
                },
                {
                    type: 'PUT',
                    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
                    primaryKey: [{ 'gid': Long.fromNumber(8) }, { 'uid': Long.fromNumber(81) }],
                    attributeColumns: [{ 'attrCol1': 'test1' }, { 'attrCol2': 'test2' }],
                    returnContent: { returnType: TableStore.ReturnType.Primarykey }
                }
            ]
        }
    ],
};

client.batchWriteRow(params, function (err, data) {

    if (err) {
        console.log('error:', err);
        return;
    }

    console.log('success:', data);
});
