# Aliyun TableStore SDK for Node.js

[![License Status](https://img.shields.io/badge/license-apache2-brightgreen.svg)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![GitHub version](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk.svg)](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk)
[![Build Status](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk.svg?branch=master)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![Coverage Status](https://coveralls.io/repos/github/aliyun/aliyun-tablestore-nodejs-sdk/badge.svg?branch=master)](https://coveralls.io/github/aliyun/aliyun-tablestore-nodejs-sdk?branch=master)

## [Click here for the English README](README-EN.md)

## 关于
 - 此NodeJs SDK基于[阿里云表格存储服务](http://www.aliyun.com/product/ots/) API构建。
 - 阿里云表格存储是阿里云自主研发的NoSQL数据存储服务，提供海量结构化数据的存储和实时访问。
 

## 版本特性
- 版本：5.4.1
  - 修复默认重试策略中的默认值
- 版本：5.3.1
  - proto 不再使用废弃的web标准，以兼容 Deno
- 版本：5.3.0
  - SQL 序列化协议去除对 SQL_PLAIN_BUFFER 的支持，使用性能更好的 SQL_FLAT_BUFFERS
- 版本：5.2.2
  - Search 支持折叠功能
- 版本：5.2.1
  - SQL使用默认序列化协议SQL_FLAT_BUFFERS
- 版本：5.2.0
  - 新增 SQL 接口
  - Search 新增：统计聚合功能
  - Search ColumnReturnType 支持 RETURN_ALL_FROM_INDEX
  - Search 部分 Query 支持 weight 参数
  - 新增 ComputeSplits 接口
  - 新增 ParallelScan 接口
  - 新增 UpdateSearchIndex 接口
  - DescribeSearchIndex 可以获取: 计量、创建时间、TTL 等信息
  - 创建 SearchIndex 支持: 动态修改schema、TTL
  - 主表支持 allowUpdate 的修改
  - 默认重试策略支持 Search 和 SQLQuery
  - 出错时携带 RequestId
- 版本：5.1.2
  - 修复 创建含增量二级索引问题修复
- 版本：5.1.1
  - 修复 10_000引入的低版本node不识别问题
- 版本：5.1.0
  - 多元索引支持日期类型
  - 多元索引查询SearchAPI支持设置单独的timeout
  - 多元索引排序支持missing
  - 创建多元索引支持设置分词、分词参数、虚拟列
- 版本：5.0.6
   - 升级protobufjs依赖（4.1.2 -> 6.8.8）
   - 请求参数向前兼容，返回参数字段改变：下划线变为驼峰式（与request保持一致)
- 版本：4.3.2
  - 修复Query不支持Long类型查询问题
  - 支持SearchIndex
  - 支持GlobalIndex
  - 支持原子加
  - 支持事务
  - 支持ExistsQuery

## 安装

```sh
npm install tablestore
```

## 使用方法
参考在samples目录下的代码示例，将samples/client.js文件中的相关参数修改为自己实例的参数即可。

## 贡献代码
 - 我们非常欢迎大家为TableStore NodeJs SDK以及其他TableStore SDK贡献代码

## 联系我们
- [阿里云TableStore官方网站](http://www.aliyun.com/product/ots)
- [阿里云TableStore官方论坛](http://bbs.aliyun.com)
- [阿里云TableStore官方文档中心](https://help.aliyun.com/product/8315004_ots.html)
- [阿里云云栖社区](http://yq.aliyun.com)
- [阿里云工单系统](https://workorder.console.aliyun.com/#/ticket/createIndex)

### 扫码加入TableStore钉钉讨论群(群号:23307953)，和我们直接交流讨论
![Image text](img/QRCode.png)
