var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "sampleTable",
  primaryKey: [{ 'gid': Long.fromNumber(20004) }, { 'uid': Long.fromNumber(20004) }],
  maxVersions: 2
};
var condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
condition.addSubCondition(new TableStore.SingleColumnCondition('name', 'john', TableStore.ComparatorType.EQUAL));
condition.addSubCondition(new TableStore.SingleColumnCondition('addr', 'china', TableStore.ComparatorType.EQUAL));

params.columnFilter = condition;

client.getRow(params, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }
  debugger
  console.log('success:', data);
});
