# Aliyun Tablestore SDK for Node.js

[![License Status](https://img.shields.io/badge/license-apache2-brightgreen.svg)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![GitHub version](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk.svg)](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk)
[![Build Status](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk.svg?branch=master)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![Coverage Status](https://coveralls.io/repos/github/aliyun/aliyun-tablestore-nodejs-sdk/badge.svg?branch=master)](https://coveralls.io/github/aliyun/aliyun-tablestore-nodejs-sdk?branch=master)

## [中文版 (Link to the Chinese README)](README.md)

## About
 - This NodeJs SDK is a client library for the [Alibaba Cloud Tablestore Service](http://www.aliyun.com/product/ots/) API.
 - Alibaba Cloud Tablestore is a NoSQL database service built on Alibaba Cloud’s Apsara distributed operating system that can store and access large volumes of structured data in real time.
 

## Version Feature Updates
- Version: 5.4.1
  - fix wrong time unit in default_retry_policy.js
- Version: 5.3.1
    - Modified the writing style of some js, compatible with Deno
- Version: 5.3.0
    - SQLPayloadVersion no longer supports SQL_PLAIN_BUFFER
- Version: 5.2.2
    - Search Support Collapse
- Version: 5.2.1
    - SQL use default SQLPayloadVersion SQL_FLAT_BUFFERS
- Version: 5.2.0
    - Added Support for SQL
    - Added Support for Search Agg and GroupBy
    - Added Support for Search ColumnReturnType RETURN_ALL_FROM_INDEX
    - Added Support for Search Query Weight Parameter
    - Added Support for ComputeSplits
    - Added Support for ParallelScan
    - Added Support for UpdateSearchIndex
    - UpdateSearchIndex supports the return of measurement, TTL, createTime and other information
    - CreateSearchIndex supports dynamic schema modification and TTL
    - Added Support for Table allowUpdate Parameter
    - Modified Retry Policy
    - Carry RequestId in Error
- Version: 4.3.2 
  - Bug fixed: Queries are now supported using the "Long" datatype
  - Added Support for SearchIndex
  - Added Support for GlobalIndex
  - Added Support for Atomic Addition
  - Added Support for Transactions
  - Added Support for ExistsQuery

## Installation

```sh
npm install tablestore
```

## Getting Started
To get started, we recommend taking a look at the samples found in the "samples/" directory. 
You can configure the samples for use by setting the correct relevant parameters for your Tablestore instance by modifying the "samples/client.js" file (modify the values for 'accessKeyId', 'secretAccessKey', 'endpoint' and 'instancename' accordingly).



## Contributing
 - We welcome everyone to contribute code to the Tablestore NodeJs SDK and other Tablestore SDKs.

## Contact US
- [Alibaba Cloud Tablestore Official Product Page](https://www.alibabacloud.com/product/table-store)
- [Alibaba Cloud Official Support Forum](https://www.alibabacloud.com/forum?)
- [Alibaba Cloud Tablestore Official Documentation](https://www.alibabacloud.com/help/product/27278.htm)
- [Alibaba Cloud Official Blog](https://www.alibabacloud.com/blog)
- [Create Alibaba Cloud Support Ticket (Must be logged in)](https://workorder.console.aliyun.com/#/ticket/createIndex)

### Join our Tablestore Chat Group(GroupNumber:23307953) on [DingDing Talk](https://www.dingtalk.com/en)
![Image text](img/QRCode-EN.png)
