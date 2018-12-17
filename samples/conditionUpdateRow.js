var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
    tableName: "sampleTable",
    primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }],
    updateOfAttributeColumns: [{ 'PUT': [{ 'col1': 'test6' }] }]
};

/*
条件更新使用说明：
1、期望行是否存在
RowExistenceExpectation.IGNORE 表示不管此行是否已经存在，都会插入新数据，如果之前有会被覆盖。
RowExistenceExpectation.EXPECT_EXIST 表示只有此行存在时，才会插入新数据，此时，原有数据也会被覆盖。
RowExistenceExpectation.EXPECT_NOT_EXIST 表示只有此行不存在时，才会插入数据，否则不执行。
2、条件组合
TableStore.SingleColumnCondition 只有一个条件的时候使用
TableStore.CompositeCondition 有多个条件的时候使用
*/

//示例：指定条件 期望行存在，并且name=john,addr=china
var condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
condition.addSubCondition(new TableStore.SingleColumnCondition('name', 'john', TableStore.ComparatorType.EQUAL));
condition.addSubCondition(new TableStore.SingleColumnCondition('addr', 'china', TableStore.ComparatorType.EQUAL));

params.condition = new TableStore.Condition(TableStore.RowExistenceExpectation.EXPECT_EXIST, condition);

client.updateRow(params,
    function (err, data) {
        if (err) {
            console.log('error:', err);
            return;
        }
        console.log('success:', data);
    });

