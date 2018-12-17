var TableStore = require('./core');

TableStore.Config = TableStore.util.inherit({

  constructor: function Config(options) {
    if (options === undefined) options = {};

    TableStore.util.each.call(this, this.keys, function (key, value) {
      var optionVal = options[key];
      if (typeof (options[key]) === 'string') {
        optionVal = options[key].replace(/^\s+/g, '');
      }
      this.set(key, optionVal, value);
    });
  },

  clear: function clear() {
    /*jshint forin:false */
    TableStore.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    // reset credential provider
    this.set('credentials', undefined);
    this.set('credentialProvider', undefined);
  },

  getCredentials: function getCredentials() {
    return {
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey || this.accessKeySecret,
      securityToken: this.stsToken || this.securityToken
    };
  },

  /**
   * Sets a property on the configuration object, allowing for a
   * default value
   * @api private
   */
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (typeof defaultValue === 'function') {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else {
      this[property] = value;
    }
  },

  keys: {
    accessKeyId: null,
    secretAccessKey: null,
    accessKeySecret: null, //the same with  secretAccessKey
    stsToken: null,
    securityToken: null, // the same with stsToken
    logger: null,
    endpoint: undefined,
    httpOptions: {},//timeout,maxSockets。default maxSockets = 300 
    maxRetries: undefined,
    instancename: undefined,
    computeChecksums: true,
  }
});
