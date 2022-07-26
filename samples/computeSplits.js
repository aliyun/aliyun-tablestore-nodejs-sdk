const client = require('./client');

client.computeSplits({
    tableName: "tableName",
    searchIndexSplitsOptions: {
        indexName: "indexName",
    }
}, function (err, data) {
    if (err) {
        console.log('computeSplits error:', err.toString());
    } else {
        console.log('computeSplits success:', data);
    }
})