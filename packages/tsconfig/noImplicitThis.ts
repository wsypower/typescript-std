/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 19:17:52
 * @LastEditTime: 2023-03-01 19:23:19
 * @LastEditors: wsy
 */
class Person {
  weight: number;
  height: number;
  constructor(weight: number, height: number) {
    this.weight = weight;
    this.height = height;
  }
  getBodyMassIndex() {
    return function () {
      // @ts-expect-error
      return this.weight / (this.height * this.height);
    };
  }
}
