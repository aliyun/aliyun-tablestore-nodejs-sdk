# Aliyun TableStore SDK for Node.js

[![License Status](https://img.shields.io/badge/license-apache2-brightgreen.svg)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![GitHub version](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk.svg)](https://badge.fury.io/gh/aliyun%2Faliyun-tablestore-nodejs-sdk)
[![Build Status](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk.svg?branch=master)](https://travis-ci.org/aliyun/aliyun-tablestore-nodejs-sdk)
[![Coverage Status](https://coveralls.io/repos/github/aliyun/aliyun-tablestore-nodejs-sdk/badge.svg?branch=master)](https://coveralls.io/github/aliyun/aliyun-tablestore-nodejs-sdk?branch=master)

## [Click here for the English README](README-EN.md)

## 关于
 - 此NodeJs SDK基于[阿里云表格存储服务](http://www.aliyun.com/product/ots/) API构建。
 - 阿里云表格存储是阿里云自主研发的NoSQL数据存储服务，提供海量结构化数据的存储和实时访问。

## 版本
 - 当前版本：5.0.6

## 版本特性
 - 升级protobufjs依赖（4.1.2 -> 6.8.8）
 - 请求参数向前兼容，返回参数字段改变：下划线变为驼峰式（与request保持一致)

## 历史版本
 - 版本：4.3.2
## 版本特性
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

### 扫码加入TableStore钉钉讨论群，和我们直接交流讨论
![Image text](img/QRCode.JPG)
