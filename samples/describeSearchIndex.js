var client = require('./client');

client.describeSearchIndex({
    tableName: "nestedTag",
    indexName: "testIndex",
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

