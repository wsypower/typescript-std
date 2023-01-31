/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-30 20:00:18
 * @LastEditTime: 2023-01-31 14:24:41
 * @LastEditors: wsy
 */
function identity<T>(arg: T): T {
  return arg;
}

const a = identity('123'); // type is 123
let b = identity('123');   // type is string

class People {
  name = 'wsy'
}

function create<T>(Constructor: { new(...args: any): T }) {
  return new Constructor();
}
const people = create(People); // type is People

interface GenericIdentityFn {
  (arg: number): number;
}

function identityTest(arg: number) {
  return arg;
}

let myIdentity: GenericIdentityFn = identityTest;

export { }
