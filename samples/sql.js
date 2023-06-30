const client = require('./client');

const params = {
    query: "select * from test_table",
}

client.sqlQuery(params, function (err, resp) {
    if (err) {
        console.log('sqlQuery error:', err.toString());
    } else {
        console.log('sqlQuery success:', resp);
        console.log(resp.sqlRows.rowCount.toFloat64());
        console.log(resp.sqlRows.columnCount);
        console.log(resp.sqlRows.sqlTableMeta)
        for (let i = 0; i < resp.sqlRows.rowCount.toFloat64(); i++) {
            for (let j = 0; j < resp.sqlRows.columnCount; j++) {
                let data = resp.sqlRows.get(i, j);
                // 处理binary类型
                if (resp.sqlRows.sqlTableMeta.schemas[j].typeName === "BINARY") {
                    let int8Array = data.valueArray();
                    console.log(int8Array);
                }
                // 处理Long类型
                if (resp.sqlRows.sqlTableMeta.schemas[j].typeName === "LONG") {
                    console.log(data.toFloat64());
                }
                console.log("i:" + i, ", j:" + j + ":" + data);
            }
        }
    }
});