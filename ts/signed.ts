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
export function encode(signed: number): number {
    var encoded: number = signed * 2;
    if (encoded < 0) {
        encoded = 1 - encoded;
    }
    return encoded;
}

/**
 * Decodes an encoded integer to the original signed integer
 *
 * @param {number} encoded
 * @return {number}
 */
export function decode(encoded: number): number {
    var signed: number = (encoded >> 1);
    if ((encoded & 1) === 1) {
        signed = -signed;
    }
    return signed;
}

/**
 * Encodes a block of signed integers
 *
 * @param {number[]} sBlock
 * @return {number[]}
 */
export function encodeBlock(sBlock: number[]): number[] {
    return sBlock.map(encode);
}

/**
 * Decodes a block of encoded integers
 *
 * @param {number[]} eBlock
 * @return {number[]}
 */
export function decodeBlock(eBlock: number[]): number[] {
    return eBlock.map(decode);
}
