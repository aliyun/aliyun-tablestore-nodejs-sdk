var TableStore = require('./core');
var Int64buf = require("int64-buffer");

TableStore.Long = {
    fromNumber: function (num) {
        this.int64 = new Int64buf.Int64LE(num);
        return this.int64;
    },
    fromString: function (str) {
        this.int64 = new Int64buf.Int64LE(str, 10);
        return this.int64;
    },
    toBuffer: function () {
        return this.int64.toBuffer();
    },
    toNumber: function () {
        return this.int64.toNumber();
    }
};


