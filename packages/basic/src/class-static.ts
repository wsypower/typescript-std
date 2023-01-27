/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 18:45:11
 * @LastEditTime: 2023-01-27 19:16:43
 * @LastEditors: wsy
 */

class ClassStatic {
  name1: string = 'wsy'
  constructor() {
  }
  static {
    try {
    } catch (error) {

    }
  }
}
const a = new ClassStatic()


class Test {
  constructor(public age: number, public name?: string) {
  }
}

const cz = new Test(1)
console.log(cz);
export { }
