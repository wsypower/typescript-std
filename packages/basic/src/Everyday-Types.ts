/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-16 12:59:55
 * @LastEditTime: 2023-01-17 20:14:34
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




declare function handleRequest(method: "GET" | "POST"): void;


interface Request {
  url: string;
  method: "GET" | "POST";
}

const req: Request = { url: "https://example.com", method: "GET" }
const a = req.method

handleRequest(req.method);



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

type fun = object
const afn: fun = () => { }


let lowerCaseObject: Object;
lowerCaseObject = 1; // ts(2322)
lowerCaseObject = 'a'; // ts(2322)
lowerCaseObject = true; // ts(2322)
// @ts-expect-error
lowerCaseObject = null; // ts(2322)
// @ts-expect-error
lowerCaseObject = undefined; // ts(2322)
lowerCaseObject = {}; // ok


let testObject1: Object;
testObject1 = { a: 1 }
let testObject2: {}
testObject2 = { a: 1 }


const tmp30: Object = { name: 'linbudu', age: 1 };

type voidFunc = () => void;


const v1: voidFunc = function () {
  return true;
}
