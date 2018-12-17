var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "index1",
  primaryKey: [ {'pk2': Long.fromNumber(2)}, {'pk1': Long.fromNumber(1)}]
};

client.getRow(params, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log('success:', JSON.stringify(data, null, 2));
});
