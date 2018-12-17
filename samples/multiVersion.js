var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var tableName = 'maxVersionsTestTable';
var primaryKey = [{ 'pk1': 'pk1val' }, { 'pk2': 'pk2val' }];

var getRow = function () {
    var getRowParams = {
        tableName: tableName,
        primaryKey: primaryKey,
        timeRange: {
            startTime: '0',
            endTime: new Date().getTime().toString()
        },
        maxVersions: 10
    };
    client.getRow(getRowParams, function (err, data) {
        
    });
};

var batchWriteRow = function () {
    var params = {
        tables: [{
            tableName: tableName,
            rows: [],
        }],
    };

    for (var i = 0; i < 10; i++) {
        params.tables[0].rows.push({
            type: 'UPDATE',
            condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
            primaryKey: primaryKey,
            attributeColumns: [{ "PUT": [{ 'multiVersionCol': '第' + i + '次更新', 'timestamp': Long.fromNumber(new Date().getTime() + i) }] }]
        });
    }
    client.batchWriteRow(params, function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }

        getRow();
    });

};

var putRow = function () {
    var putRowParams = {
        tableName: tableName,
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey: primaryKey,
        attributeColumns: [{ 'multiVersionCol': '插入原始数据' }]
    };

    client.putRow(putRowParams, function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }
        batchWriteRow();
    });
};

var createTable = function () {
    var params = {
        tableMeta: {
            tableName: tableName,
            primaryKey: [{ name: 'pk1', type: 'STRING' }, { name: 'pk2', type: 'STRING' }]
        },
        reservedThroughput: {
            capacityUnit: { read: 0, write: 0 }
        },
        tableOptions: {
            timeToLive: -1,// 数据的过期时间, 单位秒, -1代表永不过期. 假如设置过期时间为一年, 即为 365 * 24 * 3600.
            maxVersions: 10// 保存的最大版本数, 设置为1即代表每列上最多保存一个版本(保存最新的版本).
        }
    };

    client.createTable(params, function (err, data) {
        putRow();
    });

};

//createTable();
getRow();


