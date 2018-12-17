var client = require('./client');

client.dropIndex({
  mainTableName: "sdkGlobalTest",
  indexName: "sdkIndex1"
}, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log('success:', JSON.stringify(data, null, 2));
});

