const TableStore = require('../index.js');
const client = require('./client');

const tableName = "sample"
const primaryKey = [{
    "id": "a6ef32e3-e058-4b71-b39b-16ad2f6b1afb"
}]

async function init() {
    await client.putRow({
        tableName,
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey,
        attributeColumns: [{
            col: 'inited'
        }]
    })
}

async function update(transactionId) {
    await client.putRow({
        tableName,
        condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
        primaryKey,
        attributeColumns: [{
            col: 'updated'
        }],
        transactionId
    })
}

(async () => {
    try {
        // 写入初始数据
        await init()

        // 创建局部事务
        const request = await client.startLocalTransaction({
            tableName,
            primaryKey
        })
        const transactionId = request.transactionId

        // 数据操作
        // ...
        await update(transactionId)

        // 提交事务
        await client.commitTransaction({
            transactionId
        })
        // or client.commitTransaction(transactionId)

        // 或丢弃事务
        // await client.abortTransaction({
        //     transactionId
        // })
        // or client.abortTransaction(transactionId)
    } catch (e) {
        console.error(e)
    }
})()
