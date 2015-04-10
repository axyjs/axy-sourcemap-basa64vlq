/**
 * Convert binary-to-text
 */
"use strict";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), char2int, isArray = Array.isArray;
/**
 * Encodes a block of numbers to a base64-string
 *
 * @param {number[]} $numbers
 * @return {string}
 * @throws {Error}
 */
function encode(numbers) {
    var chars = [];
    numbers.forEach(function (num) {
        var char = alphabet[num];
        if (char === void 0) {
            throw new Error("Invalid number for Base-64: " + num);
        }
        chars.push(char);
    });
    return chars.join("");
}
exports.encode = encode;
/**
 * Decodes a base64-string to a block of numbers
 *
 * @param {string|string[]} based
 * @return {number[]}
 */
function decode(based) {
    var numbers = [];
    if (!char2int) {
        char2int = {};
        alphabet.forEach(function (char, num) {
            char2int[char] = num;
        });
    }
    if (!isArray(based)) {
        based = based.split("");
    }
    based.forEach(function (char) {
        var num = char2int[char];
        if (num === void 0) {
            throw new Error("Invalid Base-64 symbol '" + char + "'");
        }
        numbers.push(num);
    });
    return numbers;
}
exports.decode = decode;
