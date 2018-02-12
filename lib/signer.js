var TableStore = require('./core');
var inherit = TableStore.util.inherit;

/**
 * @api private
 */
TableStore.Signer = inherit({
  constructor: function Signer(request) {
    this.request = request;
  },

  addAuthorization: function addAuthorization(credentials, date) {
    this.request.headers['x-ots-date'] = TableStore.util.date.iso8601(date);
    this.request.headers['x-ots-accesskeyid'] = credentials.accessKeyId;
    if(credentials.securityToken){
      this.request.headers['x-ots-ststoken'] = credentials.securityToken;
    }
    delete this.request.headers['x-ots-signature'];
    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    this.request.headers['x-ots-signature'] = signature;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];

    parts.push(r.path);

    parts.push(r.method + '\n');

    var headers = this.canonicalizedHeaders();
    if (headers) parts.push(headers);

    return parts.join('\n') + '\n';
  },

  canonicalizedHeaders: function canonicalizedHeaders() {

    var headers = [];

    TableStore.util.each(this.request.headers, function (name) {
      if (name.match(/^x-ots-/i))
        headers.push(name);
    });

    headers.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    TableStore.util.arrayEach.call(this, headers, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  sign: function sign(secret, string) {
    if(process.env.DEBUG == 'aliyun') {
      console.log('----------- sign string start -----------');
      console.log(string);
      console.log('----------- sign string end -----------');
    }
    return TableStore.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

module.exports = TableStore.Signer;
