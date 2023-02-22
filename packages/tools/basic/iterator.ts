/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-22 19:52:35
 * @LastEditTime: 2023-02-22 19:58:39
 * @LastEditors: wsy
 */
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}

interface Obj {
  [Symbol.iterator](): IterableIterator<number>;
  [k: string]: number;
}

interface IterableIterator<T> {
  next(value?: any): IteratorResult<T>;
}
interface IteratorResult<T> {
  value: T | undefined;
}

const a: Obj = {
  'k': 1,
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return {
            value: i++,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
      }
    }
  }
}

for (const iterator of a) {
  console.log('iterator', iterator);
}

export { }
