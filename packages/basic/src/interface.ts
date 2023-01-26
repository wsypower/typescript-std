/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-26 18:23:43
 * @LastEditTime: 2023-01-26 19:09:33
 * @LastEditors: wsy
 */
interface A {
  f(x: boolean): string;       // 方法签名
}

interface B {
  f: { (x: boolean): string }; // 属性签名和对象类型字面量
}

interface C {
  f: (x: boolean) => string;   // 属性签名和函数类型字面量
}


const test1: A['f'] = function () {
  return '1'
}
const test2: B['f'] = function () {
  return '1'
}
const test3: C['f'] = function () {
  return '1'
}

interface IndexName {
  'c': () => void;
  [prop: symbol]: number;
}

const cc: IndexName = {
  [Symbol()]: 1,
  [Symbol()]: 2,
  [Symbol()]: 3,
  'c': () => undefined,
}

interface IndexNameNumber {
  [prop: number]: string;
}
const NumberIndex: IndexNameNumber = {
  '1': '1',
  ['2']: '2',
}
interface A {
  [prop: string]: 0 | 1;
  // @ts-expect-error
  [prop: number]: number; // 编译错误
}

interface PropertyKeyName {
  [props: symbol]: number;
  [props: string]: number;
  [props: number]: number;
}
const aaa = 'a'
const PropertyKeyName1: PropertyKeyName = {
  [aaa]: 1
}
type ccc = typeof PropertyKeyName1

export { }
