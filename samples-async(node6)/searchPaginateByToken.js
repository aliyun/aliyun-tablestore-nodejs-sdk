var client = require('../samples/client');
var TableStore = require('../index.js');


var params = {
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
};

(async () => {
  try {
    var data = await client.search(params);
    console.log(data);
    delete params.searchQuery.sort.sorts;

    while (data.nextToken) {
        var nextToken = data.nextToken.toString("base64", data.nextToken.offset, data.nextToken.limit);
        var token = new Buffer(nextToken, "base64");
      params.searchQuery.token = token;
      data = await client.search(params);
      console.log(data);
    }
  } catch (error) {
      console.log(error);
  }
})()
