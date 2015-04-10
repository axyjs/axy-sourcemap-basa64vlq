/**
 * Transform signed integers to unsigned for further VQL-coding
 *
 * The sign bit is transferred to the end of the number.
 * 5 -> 00000101 -> 00001010 -> 10
 * -5 -> unsigned, shift and + sign -> 00001011 -> 11
 *
 * The class may not work properly with big numbers (about 10^9 for 32-bit system).
 */
"use strict";
/**
 * Encodes a signed integer
 *
 * @param {number} signed
 * @return {number}
 */
function encode(signed) {
    var encoded = signed * 2;
    if (encoded < 0) {
        encoded = 1 - encoded;
    }
    return encoded;
}
exports.encode = encode;
/**
 * Decodes an encoded integer to the original signed integer
 *
 * @param {number} encoded
 * @return {number}
 */
function decode(encoded) {
    var signed = (encoded >> 1);
    if ((encoded & 1) === 1) {
        signed = -signed;
    }
    return signed;
}
exports.decode = decode;
/**
 * Encodes a block of signed integers
 *
 * @param {number[]} sBlock
 * @return {number[]}
 */
function encodeBlock(sBlock) {
    return sBlock.map(encode);
}
exports.encodeBlock = encodeBlock;
/**
 * Decodes a block of encoded integers
 *
 * @param {number[]} eBlock
 * @return {number[]}
 */
function decodeBlock(eBlock) {
    return eBlock.map(decode);
}
exports.decodeBlock = decodeBlock;
