var client = require('./client');
var TableStore = require('../index.js');


client.search({
    tableName: "nestedTag",
    indexName: "testIndex",
    searchQuery: {
        offset: 0,
        limit: 1,
        query: {
            queryType: TableStore.QueryType.MATCH_ALL_QUERY
        },
        sort: {
            sorters: [
                {
                    fieldSort: {
                        fieldName: "pic_id",
                        order: TableStore.SortOrder.SORT_ORDER_DESC,
                    }
                }
            ]
        },
        getTotalCount: true
    },
    columnToGet: {
        returnType: TableStore.ColumnReturnType.RETURN_NONE,
        returnNames: ["pic_tag", "pic_description", "time_stamp", "pos"]
    }
}, function (err, data) {
    var nextToken = data.nextToken.toString("base64");
    var token = new Buffer(nextToken, "base64");

    console.log('success:', JSON.stringify(data, null, 2));
    console.log('token:', nextToken);

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
            token: token//nextToken包含sort+searchAfter信息，后续不需要提供
        },
        columnToGet: {
            returnType: TableStore.ColumnReturnType.RETURN_NONE,
            returnNames: ["pic_tag", "pic_description", "time_stamp", "pos"]
        }
    }, function (err, data) {
        var nextToken = data.nextToken.toString("base64");
        var token = new Buffer(nextToken, "base64");

        console.log('token success:', JSON.stringify(data, null, 2));
        console.log('token:', nextToken);
    })
});

