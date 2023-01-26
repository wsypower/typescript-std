/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-26 20:35:22
 * @LastEditTime: 2023-01-26 20:40:00
 * @LastEditors: wsy
 */
const a: 'a' = 'a';
const b: 0 = 0;
const c: unique symbol = Symbol();
let obj: {
  [a]: boolean;
  [b]: boolean;
  [c]: boolean;
  [1]: boolean;
};


const f = 'f';
const fc = Symbol()
interface A {
  [f](x: boolean): string;
  [fc](): void
}

const acc: unique symbol = Symbol();

interface WithUniqueSymbol {
  // 必须使用readonly修饰符
  readonly b: unique symbol;
}
