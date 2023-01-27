/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 16:10:34
 * @LastEditTime: 2023-01-27 16:19:27
 * @LastEditors: wsy
 */
class ClassName {
  #radio: number = 1
  constructor() {
    this.#radio = 2
  }
}

const a = new ClassName()

// @ts-ignore
a.#radio = 1

export { }
