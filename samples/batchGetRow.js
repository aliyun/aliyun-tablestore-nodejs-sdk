var client = require('./client');
var TableStore = require('../index.js');
var Long = TableStore.Long;

var params = {
    tables: [{
        tableName: 'sampleTable',
        primaryKey: [
            [{ 'gid': Long.fromNumber(20008) }, { 'uid': Long.fromNumber(20008) }],
            [{ 'gid': Long.fromNumber(20007) }, { 'uid': Long.fromNumber(20007) }]
        ],
        startColumn: "col2",
        endColumn: "col4"
    },
    {
        tableName: 'notExistTable',
        primaryKey: [
            [{ 'gid': Long.fromNumber(10001) }, { 'uid': Long.fromNumber(10001) }]
        ]
    }
    ],
};

client.batchGetRow(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});
