var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

var params = {
  tableName: "sampleTable",
  primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }],
};
var condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
condition.addSubCondition(new TableStore.SingleColumnCondition('name', 'john', TableStore.ComparatorType.EQUAL));
condition.addSubCondition(new TableStore.SingleColumnCondition('addr', 'china', TableStore.ComparatorType.EQUAL));

params.columnFilter = condition;

//ColumnPaginationFilter Sample
//params.columnFilter = new TableStore.ColumnPaginationFilter(2, 0);

client.getRow(params, function (err, data) {
  if (err) {
    console.log('error:', err);
    return;
  }
  console.log('success:', data);
});
