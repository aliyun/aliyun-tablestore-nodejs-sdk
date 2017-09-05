var TableStore = require('../index.js');

var client = new TableStore.Client({
  accessKeyId: '<your access key id>',
  secretAccessKey: '<your access key secret>',
  stsToken: '<your stsToken>', /*When you use the STS authorization, you need to fill in. ref:https://help.aliyun.com/document_detail/27364.html*/
  endpoint: '<your endpoint>',
  instancename: '<your instance name>'
});

module.exports = client;
