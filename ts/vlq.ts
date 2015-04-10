/**
 * Creating sequence of "VLQ digits" for integers
 *
 * Example: 12345
 * Binary: 11000000111001
 * After sign-transform: 110000001110010
 * Groups (5 bit): 11000 00011 10010
 * Revert groups and continuation bit: 110010 100011 011000
 * VLQ-digits: 50, 35, 24
 */
"use strict";

import signed = require("./signed");

/**
 * Encodes a block of numbers to a VLQ-sequence
 *
 * @param {number[]} numbers
 * @return {number[]}
 */
export function encode(numbers: number[]): number[] {
    var digits: number[] = [];
    signed.encodeBlock(numbers).forEach(function (n: number): void {
        var digit: number;
        do {
            digit = (n % 32);
            n >>= 5;
            if (n > 0) {
                digit += 32;
            }
            digits.push(digit);
        } while (n > 0);
    });
    return digits;
}

/**
 * Decodes a VLQ-sequence to a block of numbers
 *
 * @param {number[]} digits
 * @return {number[]}
 * @throws {Error}
 */
export function decode(digits: number[]): number[] {
    var result: number[] = [],
        current: number = 0,
        shift: number = 0;
    digits.forEach(function (digit: number): void {
        current += ((digit % 32) << shift);
        if (digit < 32) {
            result.push(current);
            current = 0;
            shift = 0;
        } else {
            shift += 5;
        }
    });
    if (current > 0) {
        throw new Error("Invalid VLQ sequence: " + digits.join(","));
    }
    return signed.decodeBlock(result);
}
