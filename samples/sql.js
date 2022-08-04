const client = require('./client');

const params = {
    query: "select * from test_table",
}

client.sqlQuery(params, function (err, data) {
    if (err) {
        console.log('sqlQuery error:', err.toString());
    } else {
        console.log('sqlQuery success:', data);
        console.log(data.sqlRows.rowCount.toFloat64());
        console.log(data.sqlRows.columnCount);
        console.log(data.sqlRows.sqlTableMeta)
        for (let i = 0; i < data.sqlRows.rowCount.toFloat64(); i++) {
            for (let j = 0; j < data.sqlRows.columnCount; j++) {
                let data = data.sqlRows.get(i, j);
                console.log("i:" + i, ", j:" + j + ":" + data);
            }
        }
    }
});