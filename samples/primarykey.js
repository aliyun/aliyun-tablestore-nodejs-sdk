var client = require('./client');

var currentTimeStamp = Date.now();
var putParams = {
  tableName: "sampleTable",
  condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
  primaryKey: [{ 'gid': Long.fromNumber(2017001) }, { 'uid': Long.fromNumber(70615) }],
  attributeColumns: [
    { 'col1': 'col1val' }
  ],
  returnContent: { returnType: TableStore.ReturnType.Primarykey }
};

client.putRow(putParams, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data);
});


var createParams = {
  tableMeta: {
    tableName: 'autoIncTable',
    primaryKey: [
      {
        name: 'stringPK',
        type: 'STRING'
      },
      {
        name: 'integerPK',
        type: 'INTEGER'
      },
      {
        name: 'binaryPK',
        type: 'BINARY'
      },
      {
        name: 'autoIncPK',
        type: 'INTEGER',
        option: 'AUTO_INCREMENT'//自增列，指定otpion为AUTO_INCREMENT
      },
    ]
  },
  reservedThroughput: {
    capacityUnit: {
      read: 0,
      write: 0
    }
  },
  tableOptions: {
    timeToLive: -1,// 数据的过期时间, 单位秒, -1代表永不过期. 假如设置过期时间为一年, 即为 365 * 24 * 3600.
    maxVersions: 1// 保存的最大版本数, 设置为1即代表每列上最多保存一个版本(保存最新的版本).
  }
};

client.createTable(createParams, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log('success:', data);
});

