var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "sampleTable",
  direction: TableStore.Direction.FORWARD,
  maxVersions: 10,
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
    console.log(JSON.stringify(data, null, 4));
    resultRows = resultRows.concat(data.rows)

    //如果data.next_start_primary_key不为空，说明需要继续读取
    if (data.nextStartPrimaryKey) {
      params.inclusiveStartPrimaryKey = [
        { "gid": data.nextStartPrimaryKey[0].value },
        { "uid": data.nextStartPrimaryKey[1].value }
      ];
      getRange()
    } else {
      console.log(JSON.stringify(resultRows));
    }
  });
}

getRange()
