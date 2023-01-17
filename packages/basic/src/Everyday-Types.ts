/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-16 12:59:55
 * @LastEditTime: 2023-01-17 21:16:49
 * @LastEditors: wsy
 */

export const s: string = '1'
export const n: number = 1
export const b: boolean = true
export const array: number[] = [1, 2, 3]

export const obj: { a: any } = { a: 1 }

export function greet(name: string): string
export function greet(name: number): number
export function greet(name: string | number) {
  return name
}

type a = ReturnType<typeof greet>


interface Params {
  url: string,
  method: 'GET' | 'POST'
}

declare function handleRequest({ url, method }: { url: string, method: 'GET' }): void;

const req = { url: "https://example.com", method: "GET" } satisfies Params

handleRequest(req); // OK!



// let str: string = "666";
// str = null
// str = undefined


function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;


const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(num => num > 2) as number;


type objType = {
  readonly name: string,
}

const objTest: objType = {
  name: 'wsy',
}
// Error 无法为“name”赋值，因为它是只读属性
// @ts-expect-error
objTest.name = 'wsy2'

let str = 'wsy' // string


let ss1 = {
  name: 'wsy',
  age: 18,
} as const


const ss2 = {
  name: 'wsy',
  age: 18,
} as const


type Union1 = string | number
type Union2 = string | number | boolean

// type isChildren = Union1 extends Union2 ? true : false

type obj1 = {
  name: string,
}

type obj2 = {
  name: string,
  age: number,
}

type isChildren = obj2 extends obj1 ? true : false
