/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-16 12:59:55
 * @LastEditTime: 2023-01-17 17:01:50
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


// function 

interface SearchFunc {
  (source: string, subString: string): boolean;
}

const searchFunc: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

type IsSubString = (source: string, subString: string) => boolean;
const isSubString: IsSubString = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}


interface Desc {
  description: string;
  (someArg: number): boolean;
};
function otherProperty(fn: Desc) {
  console.log(fn.description + " returned " + fn(6));
}


function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s1 = firstElement(["a", "b", "c"]);
const n1 = firstElement([1, 2, 3]);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// function map<string, number>(arr: string[], func: (arg: string) => number): number[]
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

interface s {
  a: number
}

type s23 = number[] extends { length: number } ? 1 : 2


type s24 = { length: number }
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // @ts-expect-error
    return { length: minimum };
  }
}

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

const az = filter2([1, 2, 3], (n) => n < 3);
const cz = filter1([1, 2, 3], (n) => n < 3);


function buildName(firstName: string, lastName?: string): string {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom', undefined);

function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a, i) => {

});


function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);


function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK


const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
