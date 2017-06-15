var client = require('./client');

var params = {
    tableName: 'sampleTable',
    reservedThroughput: {
        capacityUnit: {
            read: 1000,
            write: 1000
        }
    },
    tableOptions: {
        maxVersions: 2,
    }
};

client.updateTable(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

