/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-26 14:46:27
 * @LastEditTime: 2023-01-26 17:49:11
 * @LastEditors: wsy
 */
function buildName(firstName: string, lastName: string = '1') {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
console.log(tomcat);
let tom = buildName('Tom');
console.log(tom);


function add(x: number, y: number) {
  return x + y;
}


function test(x: number): void {
  // @ts-ignore
  return x;
}

type Test3 = (x: number) => void;


interface Test2 {
  (x: number): void
}

const Test2: Test3 = function (x) {
  return 1
}

function vo(a: number): number
// @ts-expect-error
function vo(a: string = '1'): undefined
function vo(a: number | string) {
  return a
}

function f() {
  // @ts-expect-error
  this.a = true;
  // @ts-expect-error
  this.b++;
  // @ts-expect-error
  this.c = () => { };
}

export { }
