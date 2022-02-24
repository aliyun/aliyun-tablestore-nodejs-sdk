var client = require('./client');
var TableStore = require('../index.js');

client.createIndex({
    mainTableName: "sdkGlobalTest",
    indexMeta: {
        name: "sdkIndex2",
        primaryKey: ["col1"],
        definedColumn: ["col2"],
        includeBaseData: false,
        indexUpdateMode: TableStore.IndexUpdateMode.IUM_ASYNC_INDEX,//默认增量
        indexType: TableStore.IndexType.IT_GLOBAL_INDEX,//IT_GLOBAL_INDEX
    }
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

