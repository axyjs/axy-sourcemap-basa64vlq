"use strict";

var base64 = require("../base64.js");

module.exports = {

    testEncode: function (test) {
        test.strictEqual(base64.encode([53, 12, 0, 25, 11, 63]), "1MAZL/");
        test.throws(function () {
            base64.encode([1, 112, 3]);
        });
        test.done();
    },

    testDecode: function (test) {
        test.deepEqual(base64.decode("1MAZL/"), [53, 12, 0, 25, 11, 63]);
        test.deepEqual(base64.decode(["1", "M", "A", "Z", "L", "/"]), [53, 12, 0, 25, 11, 63]);
        test.throws(function () {
            base64.decode("A*3");
        });
        test.done();
    }
};
