var TableStore = require('../index.js');

var accessKeyId = process.env.accessKeyId;
var secretAccessKey = process.env.secretAccessKey;
var endpoint = process.env.endpoint;
var instancename = process.env.instancename;

var client = new TableStore.Client({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  endpoint: endpoint,
  instancename: instancename
});

module.exports = client;
