/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-25 17:04:19
 * @LastEditTime: 2023-01-25 17:05:51
 * @LastEditors: wsy
 */
const max = Number.MAX_SAFE_INTEGER;

const max1 = max + 1
const max2 = max + 2

console.log(max1 === max2); // true

const maxBigInt = BigInt(max);

const max1BigInt = maxBigInt + 1n;
const max2BigInt = maxBigInt + 2n;

console.log(max1BigInt === max2BigInt); // false
