"use strict";

var encoder = require("../index.js");

module.exports = {

    testEncode: function (test) {
        test.strictEqual(encoder.encode([35, -123451, 0, 9234, -546, 3333]), "mC3jxHAkhSliBqwG");
        test.done();
    },

    testDecode: function (test) {
        test.deepEqual(encoder.decode("mC3jxHAkhSliBqwG"), [35, -123451, 0, 9234, -546, 3333]);
        test.throws(function () {
            encoder.decode("A*5");
        });
        test.done();
    }
};
