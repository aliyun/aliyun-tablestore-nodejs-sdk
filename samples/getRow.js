var TableStore = require('../index.js');
var Long = TableStore.Long;
var client = require('./client');

//公用参数
var params = {
  tableName: "sampleTable",
  primaryKey: [{ 'gid': Long.fromNumber(20013) }, { 'uid': Long.fromNumber(20013) }],
};


//示例1：读取一行，设置读取最新版本，设置ColumsToGet
function getRowSample1() {
  //设置读取最新版本，默认为1
  params.maxVersions = 1;
  //设置读取指定的列
  params.columnsToGet = ["col1", "col2"];
  client.getRow(params, function (err, data) {
    if (err) {
      console.log('error:', err);
      return;
    }
    console.log('success:', data);
  });
}

//示例2：设置过滤器
/*
TableStore.LogicalOperator支持的操作包括：AND、NOT、OR
TableStore.ComparatorType支持的操作包括：EQUAL、NOT_EQUAL、GREATER_THAN、GREATER_EQUAL、LESS_THAN、LESS_EQUAL
*/
function getRowSample2() {
  //设置过滤器，当name = john 而且 addr = china 时返回该行
  var condition = new TableStore.CompositeCondition(TableStore.LogicalOperator.AND);
  condition.addSubCondition(new TableStore.SingleColumnCondition('col1', '表格存储', TableStore.ComparatorType.EQUAL));
  condition.addSubCondition(new TableStore.SingleColumnCondition('col5', Long.fromNumber(123456789), TableStore.ComparatorType.EQUAL));

  params.columnFilter = condition;

  //设置按列进行翻页，用于读取宽行，两个参数为：limit,offset
  //params.columnFilter = new TableStore.ColumnPaginationFilter(2, 0);
  client.getRow(params, function (err, data) {
    if (err) {
      console.log('error:', err);
      return;
    }
    console.log('success:', data);
  });
}

getRowSample2();
