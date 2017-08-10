var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "sampleTable",
  direction: TableStore.Direction.FORWARD,
  inclusiveStartPrimaryKey: [{ "gid": TableStore.INF_MIN }, { "uid": TableStore.INF_MIN }],
  exclusiveEndPrimaryKey: [{ "gid": TableStore.INF_MAX }, { "uid": TableStore.INF_MAX }],
  limit: 2
};

var resultRows = []

var getRange = function () {
  client.getRange(params, function (err, data) {
    if (err) {
      console.log('error:', err);
      return;
    }
    resultRows = resultRows.concat(data.rows)

    //如果data.next_start_primary_key不为空，说明需要继续读取
    if (data.next_start_primary_key) {
      params.inclusiveStartPrimaryKey = [
        { "gid": data.next_start_primary_key[0].value },
        { "uid": data.next_start_primary_key[1].value }
      ]
      getRange()
    } else {
      console.log(resultRows)
    }
  });
}

getRange()
