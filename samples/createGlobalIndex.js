var client = require('./client');
var TableStore = require('../index.js');

client.createIndex({
    mainTableName: "sdkGlobalTest",
    includeBaseData: false,
    indexMeta: {
        name: "noBase",
        primaryKey: ["col1"],
        definedColumn: ["col2"],
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

client.createIndex({
    mainTableName: "sdkGlobalTest",
    includeBaseData: true,
    indexMeta: {
        name: "hasBase",
        primaryKey: ["col1"],
        definedColumn: ["col2"],
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

