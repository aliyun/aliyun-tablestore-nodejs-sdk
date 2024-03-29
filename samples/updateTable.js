var client = require('./client');

var params = {
    tableName: 'sampleTable',
    reservedThroughput: {
        capacityUnit: {
            read: 0,
            write: 0
        }
    },
    tableOptions: {
        maxVersions: 10,
        allowUpdate: true, // 是否允许"UpdateRow"相关写入操作
    }
};

client.updateTable(params, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

