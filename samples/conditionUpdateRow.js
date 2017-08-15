var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
    tableName: "sampleTable",
    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST
        , new TableStore.SingleColumnCondition("col1", 'test5', TableStore.ComparatorType.EQUAL)),
    primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }],
    updateOfAttributeColumns: [{ 'PUT': [{ 'col1': 'test6' }] }]
};

client.updateRow(params,
    function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', data);
    });

