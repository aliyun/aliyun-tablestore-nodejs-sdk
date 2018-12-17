var client = require('./client');

client.listSearchIndex({
    tableName: "nestedTag"
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

