var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
    tableName: "orderHistory",
    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST, null),
    primaryKey: [{ 'order_id': "order_id_001" }],
    updateOfAttributeColumns: [
        { 'INCREMENT': [{ 'increment': Long.fromNumber(1)}] }
    ],
    returnContent: {
        returnColumns: ["increment"],
        returnType: TableStore.ReturnType.AfterModify
    }
};
client.updateRow(params,
    function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', JSON.stringify(data, null, 2));
    });


var batchParams = {
    tables: [
        {
            tableName: 'orderHistory',
            rows: [
                {
                    type: 'UPDATE',
                    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST, null),
                    primaryKey: [{ 'order_id': "order_id_001" }],
                    attributeColumns: [{ 'INCREMENT': [{ 'increment': Long.fromNumber(1)}] }],
                    returnContent: {
                        returnColumns: ["increment"],
                        returnType: TableStore.ReturnType.AfterModify
                    }
                }
            ]
        },
    ],
};

client.batchWriteRow(batchParams,
    function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }

        console.log('success:', JSON.stringify(data, null, 2));
    });
