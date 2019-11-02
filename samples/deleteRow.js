var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
    tableName: "sampleTable",
    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
    primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }]
};

client.deleteRow(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }

    console.log('success:', data);
});
