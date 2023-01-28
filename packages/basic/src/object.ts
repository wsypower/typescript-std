/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-28 18:00:04
 * @LastEditTime: 2023-01-28 19:53:02
 * @LastEditors: wsy
 */

const obj: Record<string, unknown> & Object = {
  a: 1,
}

obj.a = 1

let upperCaseObject: Object;
upperCaseObject = 1; // ok
upperCaseObject = 'a'; // ok
upperCaseObject = true; // ok
// @ts-ignore
upperCaseObject = null; // ok
// @ts-ignore
upperCaseObject = undefined; // ok
upperCaseObject = {}; // ok



let ObjectLiteral: {};
ObjectLiteral = 1; // ok
ObjectLiteral = 'a'; // ok
ObjectLiteral = true; // ok
// @ts-ignore
ObjectLiteral = null; // ts(2322)
// @ts-ignore
ObjectLiteral = undefined; // ts(2322)
ObjectLiteral = {}; // ok
type isLiteralCaseObjectExtendsUpperCaseObject = {} extends Object ? true : false; // true
type isUpperCaseObjectExtendsLiteralCaseObject = Object extends {} ? true : false; // true
upperCaseObject = ObjectLiteral;
ObjectLiteral = upperCaseObject;

interface PointX {
  x: number
}

interface PointX {
  y: number
}

const a: PointX = {
  x: 1,
  y: 2
}

export { }
