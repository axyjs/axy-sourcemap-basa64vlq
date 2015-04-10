/**
 * Convert binary-to-text
 */
"use strict";

interface IChar2Int {
    [index: string]: number;
}

var alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    char2int: IChar2Int,
    isArray: typeof Array.isArray = Array.isArray;

/**
 * Encodes a block of numbers to a base64-string
 *
 * @param {number[]} $numbers
 * @return {string}
 * @throws {Error}
 */
export function encode(numbers: number[]): string {
    var chars: string[] = [];
    numbers.forEach(function (num: number): void {
        var char: string = alphabet[num];
        if (char === void 0) {
            throw new Error("Invalid number for Base-64: " + num);
        }
        chars.push(char);
    });
    return chars.join("");
}

/**
 * Decodes a base64-string to a block of numbers
 *
 * @param {string|string[]} based
 * @return {number[]}
 */
export function decode(based: string|string[]): number[] {
    var numbers: number[] = [];
    if (!char2int) {
        char2int = {};
        alphabet.forEach(function (char: string, num: number): void {
            char2int[char] = num;
        });
    }
    if (!isArray(based)) {
        based = (<string>based).split("");
    }
    (<string[]>based).forEach(function (char: string): void {
        var num: number = char2int[char];
        if (num === void 0) {
            throw new Error("Invalid Base-64 symbol '" + char + "'");
        }
        numbers.push(num);
    });
    return numbers;
}
