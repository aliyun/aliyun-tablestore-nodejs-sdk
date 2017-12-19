## 在浏览器端使用

现在 tablestore-js-sdk 只支持特定的实例在浏览器端调用, 如果需要在浏览器中使用，请通过钉钉联系我们，将您的实例在后端做一下处理。
使用方式请参考 sample/browser/index.html。

### 如何 build

目前在浏览器端运行的 sdk 还在测试阶段, 如果有问题请随时提出, 如果需要自己转换js sdk请按照以下步骤操作:

- git clone https://github.com/aliyun/aliyun-tablestore-nodejs-sdk.git
- cd aliyun-tablestore-nodejs-sdk
- npm install
- bower install
- npm install -g browserify

```sh
browserify browser.js > tablestore-js-sdk.js
```

使用uglifyjs压缩：
```sh
uglifyjs tablestore-js-sdk.js -o tablestore-js-sdk.min.js
```

## 初始化

考虑安全问题，请使用 STS token 初始化 TableStore Client

```javascript
var stsTokenClient = new TableStore.Client({
  accessKeyId: "sts token 中的 accessKeyId",
  secretAccessKey: "sts token 中的 secretAccessKey",
  stsToken: "sts token 中的 securityToken",
  endpoint: ' <your endpoint>',
  instancename: '<your instance name>'
});
```

