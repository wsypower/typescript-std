/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-30 18:21:58
 * @LastEditTime: 2023-01-30 19:37:51
 * @LastEditors: wsy
 */
type Point = { x: number; y: number };
type P = keyof Point;

// type P = keyof Point

type Arrayish = { [n: number]: unknown, a: 1 };
type A = keyof Arrayish;
type B = A extends number | 'a' ? true : false;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number

const NumericObject = {
  [1]: "一号",
  [2]: "二号",
  [3]: "三号"
};

type result1 = keyof typeof NumericObject

// 例子一
class Person {
  name = "冴羽"
}

type result2 = keyof Person;
// type result = "name"

enum UserResponse {
  No = 0,
  Yes = 1,
}
type result3 = typeof UserResponse;
type resultKey = keyof result3;
const a: result3 = {
  No: 0,
  Yes: 1,
  0: "No",
  1: "Yes",
}

type Test1 = {
  a: number;
  b?: string;
}
type Test2 = keyof Test1;

type Test3 = Test2 extends 'a' | 'b' ? true : false;
const TestC: Test2 = 'b'
export { }
