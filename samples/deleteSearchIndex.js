var client = require('./client');

client.deleteSearchIndex({
    tableName: "nestedTag",
    indexName: "testIndex"
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', data);
});

