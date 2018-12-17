var client = require('./client');
var TableStore = require('../index.js');


var params = {
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
};

(async () => {
  try {
    var data = await client.search(params);
    console.log(data);

    while (data.nextToken) {
      params.searchQuery.token = data.nextToken;
      data = await client.search(params);
      console.log(data);
    }
  } catch (error) {
      console.log(error);
  }
})()
