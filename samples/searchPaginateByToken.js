var client = require('./client');
var TableStore = require('../index.js');


client.search({
    tableName: "nestedTag",
    indexName: "testIndex",
    searchQuery: {
        offset: 0,
        limit: 10,
        query: {
            queryType: TableStore.QueryType.MATCH_ALL_QUERY
        },
        getTotalCount: true
    },
    columnToGet: {
        returnType: TableStore.ColumnReturnType.RETURN_NONE,
        returnNames: ["pic_tag", "pic_description", "time_stemp", "pos"]
    }
}, function (err, data) {
    var nextToken = data.nextToken;

    console.log('success:', JSON.stringify(data, null, 2));
    client.search({
        tableName: "nestedTag",
        indexName: "testIndex",
        searchQuery: {
            offset: 0,
            limit: 10,
            query: {
                queryType: TableStore.QueryType.MATCH_ALL_QUERY
            },
            getTotalCount: true,
            token: nextToken//nextToken包含sort+searchAfter信息，后续不需要提供
        },
        columnToGet: {
            returnType: TableStore.ColumnReturnType.RETURN_NONE,
            returnNames: ["pic_tag", "pic_description", "time_stemp", "pos"]
        }
    }, function (err, data) {
        console.log('token success:', JSON.stringify(data, null, 2));
    })
});

