/**
 * 使用token翻页示例（同步+异步）。
 *
 */
var client = require('./client');
var TableStore = require('../index.js');
var params = {
	tableName: "actable", //设置数据表名称。
	indexName: "actable_index001", //设置多元索引名称。
	searchQuery: {
		offset: 0,
		limit: 2,
		token: null,//获取nextToken作为下一页起点（数据类型为字节流）。
		query: {
			queryType: TableStore.QueryType.MATCH_ALL_QUERY
		},
		getTotalCount: true
	},
	columnToGet: {
		returnType: TableStore.ColumnReturnType.RETURN_SPECIFIED,//RETURN_NONE
		returnNames: ["monitor", "tearch", "name", "className"]
	}
};

/**
 * 使用token翻页示例（同步）。
 */
(async () => { //同步示例代码。
	try {
		var data = await client.search(params);
		console.log(data);
		
		while (data.nextToken && data.nextToken.length) { //当存在nextToken时，表示还有未读取的数据。
			console.log("Origin: ", data.nextToken);
			// var nextToken = data.nextToken.toString("base64", data.nextToken.offset, data.nextToken.length + data.nextToken.offset);
			var nextToken = data.nextToken.toString("base64");
			var token =  Buffer.from(nextToken, "base64");
			
			console.log("After: ", token)
			params.searchQuery.token = token;//翻页更新token值。
			data = await client.search(params);
			console.log(data);
			
		}
	} catch (error) {
		console.log(error);
	}
})()
