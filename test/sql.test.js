const assert = require("assert");
const otsTestUtils = require("./ots_test_utils");
const TableStore = require("../index");
const Long = TableStore.Long;


describe('sql', function () {
    this.timeout(30000);
    const tableName = "js_sql";
    it('1) createTable', async function () {
        await otsTestUtils.deleteTable(tableName);
        await otsTestUtils.createTable(tableName);
        await otsTestUtils.sleep(2000);
        return otsTestUtils.emptyPromise;
    });

    it('2) putSomeData', async function () {
        // 写几行数据
        for (let i = 0; i < 30; i++) {
            await otsTestUtils.putRow(tableName, i + "", [
                {'col_keyword': i % 4 + "_aaa"},
                {'col_long': Long.fromNumber(i)},
                {'col_bool': i % 2 !== 0},
                {'col_double': i * 0.3},
                {'col_binary': new Buffer('binary')},
            ]);
        }
        return otsTestUtils.emptyPromise;
    });

    it('3) sql:drop table', async function () {
        {
            const query = "drop MAPPING table  " + tableName + " ;";
            const resp = await otsTestUtils.sqlQuery(query, TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS)
            console.log(JSON.stringify(resp))
        }
        return otsTestUtils.emptyPromise;
    });

    it('4) sql:create table', async function () {
        {
            const query = "create table " + tableName + " (pk1 varchar(1024), col_long bigint, col_keyword mediumtext, col_bool bool, col_double double, col_binary MEDIUMBLOB, primary key(pk1))";
            const resp = await otsTestUtils.sqlQuery(query, TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS)
            console.log(JSON.stringify(resp))
        }
        return otsTestUtils.emptyPromise;
    });

    it('5) sql:show tables', async function () {
        {
            const query = "show tables";
            const resp = await otsTestUtils.sqlQuery(query, TableStore.SQLPayloadVersion.SQL_FLAT_BUFFERS)
            console.log(JSON.stringify(resp, null, "\t"));
        }
        return otsTestUtils.emptyPromise;
    });

    it('6) sql:describe test_table', async function () {
        {
            const query = "describe " + tableName;
            const resp = await otsTestUtils.sqlQuery(query)
            console.log(JSON.stringify(resp, null, "\t"));
        }
        return otsTestUtils.emptyPromise;
    });

    it('7) sql: sql', async function () {
        {
            const query = "select * from " + tableName + " where col_long>5 limit 4";
            const resp = await otsTestUtils.sqlQuery(query)
            assert.equal(4, resp.sqlRows.rowCount.toFloat64());
            assert.equal(6, resp.sqlRows.columnCount);
            assert.ok(resp.sqlRows.sqlTableMeta.schemas.length === 6)
            for (let i = 0; i < resp.sqlRows.rowCount.toFloat64(); i++) {
                for (let j = 0; j < resp.sqlRows.columnCount; j++) {
                    let data = resp.sqlRows.get(i, j);
                    console.log("i:" + i, ", j:" + j + ":" + data);
                }
            }
            console.log(JSON.stringify(resp.sqlRows.sqlTableMeta, null, "\t"));
        }
        return otsTestUtils.emptyPromise;
    });
});


