var TableStore = require('../index.js');

var client = new TableStore.Client({
  accessKeyId: '<your access key id>',
  secretAccessKey: '<your access key secret>',
  endpoint: '<your endpoint>',
  instancename: '<your instance name>'
});

module.exports = client;
