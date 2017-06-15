var TableStore = require('./core');
var inherit = TableStore.util.inherit;

TableStore.Endpoint = inherit({

  constructor: function Endpoint(endpoint) {
    TableStore.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    }

    if (!endpoint.match(/^http/)) {
      throw new Error('错误的 endpoint 格式, 需要以 http 或者 https 开头');
    }

    TableStore.util.update(this, TableStore.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

TableStore.HttpRequest = inherit({

  constructor: function HttpRequest(endpoint, region) {
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
  },

  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  search: function search() {
    return this.path.split('?', 2)[1] || '';
  },

  debug: function () {
    if(process.env.DEBUG == 'aliyun') {
      console.log('-------- HttpRequest Start: --------');
      console.log('method:', this.method);
      console.log('path:', this.path);
      console.log('headers:');
      for(var i in this.headers) {
        if (i == 'constructor')
          continue;
        console.log(i, ':', this.headers[i]);
      };
    }
  }
});

TableStore.HttpResponse = inherit({

  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
  }
});


TableStore.HttpClient = inherit({});

TableStore.HttpClient.getInstance = function getInstance() {
  /*jshint newcap:false */
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};
