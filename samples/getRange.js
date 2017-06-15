var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "sampleTable",
  direction: TableStore.Direction.FORWARD,
  inclusiveStartPrimaryKey: [{ "gid": TableStore.INF_MIN }, { "uid": TableStore.INF_MIN }],
  exclusiveEndPrimaryKey: [{ "gid": TableStore.INF_MAX }, { "uid": TableStore.INF_MAX }],
  limit: 50
};

client.getRange(params, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }

  //如果data.next_start_primary_key不为空，说明需要继续读取
  if (data.next_start_primary_key) {

  }

  console.log('success:', data);
});
