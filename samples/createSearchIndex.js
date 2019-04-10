var client = require('./client');
var TableStore = require('../index.js');

client.createSearchIndex({
    tableName: "nestedTag",// 设置表名
    indexName: "testIndex",// 设置索引名
    schema: {
        fieldSchemas: [
            {
                fieldName: "pic_id",
                fieldType: TableStore.FieldType.KEYWORD,// 设置字段名、类型
                index: true,// 设置开启索引
                enableSortAndAgg: true,// 设置开启排序和统计功能
                store: false,
                isAnArray: false
            },
            {
                fieldName: "count",
                fieldType: TableStore.FieldType.LONG,
                index: true,
                enableSortAndAgg: true,
                store: true,
                isAnArray: false
            },
            {
                fieldName: "time_stamp",
                fieldType: TableStore.FieldType.LONG,
                index: true,
                enableSortAndAgg: false,
                store: true,
                isAnArray: false,
            },
            {
                fieldName: "pic_description",
                fieldType: TableStore.FieldType.TEXT,
                index: true,
                enableSortAndAgg: false,
                store: true,
                isAnArray: false,
            },
            {
                fieldName: "pos",
                fieldType: TableStore.FieldType.GEO_POINT,
                index: true,
                enableSortAndAgg: true,
                store: true,
                isAnArray: false,
            },
            {
                fieldName: "pic_tag",
                fieldType: TableStore.FieldType.NESTED,
                index: false,
                enableSortAndAgg: false,
                store: false,
                fieldSchemas: [
                    {
                        fieldName: "sub_tag_name",
                        fieldType: TableStore.FieldType.KEYWORD,
                        index: true,
                        enableSortAndAgg: true,
                        store: false,
                    },
                    {
                        fieldName: "tag_name",
                        fieldType: TableStore.FieldType.KEYWORD,
                        index: true,
                        enableSortAndAgg: true,
                        store: false,
                    }
                ]
            }
        ],
        indexSetting: {//optional
            "routingFields": ["count", "pic_id"],//仅支持主键
            "routingPartitionSize": null
        },
        // indexSort: {//不支持含含NESTED的索引
        //     sorters: [
        //         // {//不设置时默认PrimaryKeySort（正序）
        //         //     primaryKeySort: {
        //         //         order: TableStore.SortOrder.SORT_ORDER_DESC
        //         //     }
        //         // },
        //         {
        //             fieldSort: {
        //                 fieldName: "pic_id",
        //                 order: TableStore.SortOrder.SORT_ORDER_DESC
        //             }
        //         }
        //     ]
        // }
    }
}, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('success:', JSON.stringify(data, null, 2));
});

