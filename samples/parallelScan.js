const client = require('./client');
const TableStore = require("../index");


// 1. 获取sessionId
let computeSplits = await new Promise((resolve, reject) => {
    client.computeSplits({
        tableName: tableName,
        searchIndexSplitsOptions: {
            indexName: indexName,
        }
    }, function (err, data) {
        if (err) {
            console.log('computeSplits error:', err.toString());
            reject(err);
        } else {
            console.log('computeSplits success:', data);
            resolve(data)
        }
    })
})

// 2. 构造query
const scanQuery = {
    query: {
        queryType: TableStore.QueryType.MATCH_ALL_QUERY,
    },
    limit: 1000,
    aliveTime: 30,
    token: undefined,
    currentParallelId: 0,
    maxParallel: 1,
}

// 3. 构造ParallelScan请求(该示例为了方便用同步请求进行展示，业务可改为异步)
const parallelScanPromise = function () {
    return new Promise(function (resolve, reject) {
        client.parallelScan({
            tableName: tableName,
            indexName: indexName,
            columnToGet: {
                returnType: TableStore.ColumnReturnType.RETURN_ALL_FROM_INDEX,
            },
            sessionId: computeSplits.sessionId,
            scanQuery: scanQuery,
        }, function (err, data) {
            if (err) {
                console.log('parallelScan error:', err.toString());
                reject(err);
            } else {
                console.log("parallelScan, rows:", data.rows.length)
                resolve(data)
            }
        });
    })
}
let totalCount = 0
let parallelScanResponse = await parallelScanPromise()
totalCount = totalCount + parallelScanResponse.rows.length
// 4. 迭代拉取数据，直到拉取所有数据结束
while (parallelScanResponse.nextToken !== null && parallelScanResponse.nextToken.length > 0) {
    scanQuery.token = parallelScanResponse.nextToken
    parallelScanResponse = await parallelScanPromise()
    totalCount += parallelScanResponse.rows.length
}
console.log("total rows:", totalCount)