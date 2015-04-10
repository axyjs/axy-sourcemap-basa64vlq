/**
 * Codec for VLQ in Base64
 */
"use strict";
var base64 = require("./base64");
var vlq = require("./vlq");
/**
 * Encodes a block of numbers
 *
 * @param {number[]} numbers
 * @return {string}
 * @throws {Error}
 */
function encode(numbers) {
    return base64.encode(vlq.encode(numbers));
}
exports.encode = encode;
/**
 * Decodes an encoded string to a block of numbers
 *
 * @param {string|string[]} encoded
 * @return {number[]}
 * @throws {Error}
 */
function decode(encoded) {
    return vlq.decode(base64.decode(encoded));
}
exports.decode = decode;
