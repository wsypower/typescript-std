/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-25 17:07:46
 * @LastEditTime: 2023-01-25 18:04:10
 * @LastEditors: wsy
 */
let s = Symbol('foo');
let s1 = Symbol('foo');
const s3: unique symbol = Symbol('foo');



const x: unique symbol = Symbol('key');
const y: symbol = Symbol('key');

interface Foo {
  [x]: string; // 正确
  // @ts-expect-error
  [y]: string;
}

const a: unique symbol = Symbol();

const b: symbol = a;

const v: unique symbol = Symbol('key')

interface Foo1 {
  [v]: number
}
const dd: Foo1 = {
  [v]: 1
}

// s = s1
export { }
