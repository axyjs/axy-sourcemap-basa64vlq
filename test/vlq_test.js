"use strict";

var vlq = require("../vlq.js");

module.exports = {

    testEncode: function (test) {
        test.deepEqual(vlq.encode([12345]), [50, 35, 24]);
        test.deepEqual(vlq.encode([3, 12345, 0, -100, 27]), [6, 50, 35, 24, 0, 41, 6, 54, 1]);
        test.done();
    },

    testDecode: function (test) {
        test.deepEqual(vlq.decode([6, 50, 35, 24, 0, 49, 6, 54, 1]), [3, 12345, 0, -104, 27]);
        test.throws(function () {
            test.decode([1, 50]);
        });
        test.done();
    }
};
