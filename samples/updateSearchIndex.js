const client = require('./client');


let params = {
    tableName: tableName,
    indexName: indexName,
    timeToLive: 8000000,
}
client.updateSearchIndex(params, function (err, data) {
    if (err) {
        console.log('updateSearchIndex error:', err.toString());
    } else {
        console.log('updateSearchIndex success:', data);
    }
});