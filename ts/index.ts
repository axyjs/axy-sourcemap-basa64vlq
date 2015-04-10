/**
 * Codec for VLQ in Base64
 */
"use strict";

import base64 = require("./base64");
import vlq = require("./vlq");

/**
 * Encodes a block of numbers
 *
 * @param {number[]} numbers
 * @return {string}
 * @throws {Error}
 */
export function encode(numbers: number[]): string {
    return base64.encode(vlq.encode(numbers));
}

/**
 * Decodes an encoded string to a block of numbers
 *
 * @param {string|string[]} encoded
 * @return {number[]}
 * @throws {Error}
 */
export function decode(encoded: string|string[]): number[] {
    return vlq.decode(base64.decode(encoded));
}
