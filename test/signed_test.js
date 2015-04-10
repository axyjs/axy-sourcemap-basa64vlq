"use strict";

var signed = require("../signed.js");

module.exports = {

    testEncode: function (test) {
        test.strictEqual(signed.encode(0), 0);
        test.strictEqual(signed.encode(1), 2);
        test.strictEqual(signed.encode(10), 20);
        test.strictEqual(signed.encode(123456), 246912);
        test.strictEqual(signed.encode(-1), 3);
        test.strictEqual(signed.encode(-123456), 246913);
        test.done();
    },

    testDecode: function (test) {
        test.strictEqual(signed.encode(0), 0);
        test.strictEqual(signed.decode(2), 1);
        test.strictEqual(signed.decode(20), 10);
        test.strictEqual(signed.decode(246912), 123456);
        test.strictEqual(signed.decode(3), -1);
        test.strictEqual(signed.decode(246913), -123456);
        test.done();
    },

    testEncodeBlock: function (test) {
        test.deepEqual(signed.encodeBlock([1, -234, 0, 134]), [2, 469, 0, 268]);
        test.done();
    },

    testDecodeBlock: function (test) {
        test.deepEqual(signed.decodeBlock([2, 469, 0, 268]), [1, -234, 0, 134]);
        test.done();
    }
};
