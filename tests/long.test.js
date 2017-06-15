var TableStore = require('../index.js');
var Long = TableStore.Long;
var assert = require("assert");

describe('Long', function () {
    describe('#fromNumber', function () {
        it('int64.toNumber() should equal num', function () {
            var num = 123456789;
            var int64 = Long.fromNumber(num);
            assert.equal(int64.toNumber(), num);
        })
    })
})