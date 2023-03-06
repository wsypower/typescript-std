/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-02 19:11:09
 * @LastEditTime: 2023-03-06 21:25:14
 * @LastEditors: wsy
 */
interface Foo {
  bar?: 'a' | 'b';
}

declare const a: Foo;

a.bar = 'a';
a.bar = 'b';
a.bar = undefined


function test(a: number, b?: number) {
  return a
}

export { }
