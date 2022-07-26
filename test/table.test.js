const client = require('../samples/client');
const assert = require("assert");
const otsTestUtils = require("./ots_test_utils");

describe('table_test', () => {
    it('allowUpdate', async function () {
        this.timeout(30000);
        const tableName = "js_test_table"
        await otsTestUtils.deleteTable(tableName)

        const params = {
            tableMeta: {
                tableName: tableName,
                primaryKey: [
                    {
                        name: 'gid',
                        type: 'INTEGER'
                    },
                    {
                        name: 'uid',
                        type: 'INTEGER'
                    }
                ]
            },
            reservedThroughput: {
                capacityUnit: {
                    read: 0,
                    write: 0
                }
            },
            tableOptions: {
                timeToLive: -1,
                maxVersions: 1,
                allowUpdate: false,
            },
        };
        // 创建allowUpdate=false
        await new Promise(function (resolve, reject) {
            client.createTable(params, function (err, data) {
                if (err) {
                    console.log('error:', err);
                    reject(err);
                } else {
                    console.log('success:', data);
                    resolve(data)
                }
            })
        })

        {
            let info = await otsTestUtils.describeTable(tableName)
            console.log(info)
            assert.equal(false, info.tableOptions.allowUpdate)
        }

        // 更新allowUpdate=true
        await new Promise(function (resolve, reject) {
            client.updateTable({
                tableName: tableName,
                tableOptions: {
                    allowUpdate: true,
                }
            }, function (err, data) {
                if (err) {
                    console.log('error:', err);
                    reject(err);
                } else {
                    console.log('success:', data);
                    resolve(data)
                }
            })
        })
        {
            let info = await otsTestUtils.describeTable(tableName)
            console.log(info)
            assert.equal(true, info.tableOptions.allowUpdate)
        }
        return otsTestUtils.emptyPromise
    });
});



