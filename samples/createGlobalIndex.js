var client = require('./client');

client.createIndex({
    mainTableName: "sdkGlobalTest",
    indexMeta: {
        name: "sdkIndex2",
        primaryKey: ["col1"],
        definedColumn: ["col2"]
    }
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

