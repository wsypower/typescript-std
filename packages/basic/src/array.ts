/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-26 01:06:16
 * @LastEditTime: 2023-01-26 17:53:05
 * @LastEditors: wsy
 */
const arr: ReadonlyArray<number> = [1, 2, 3, 4, 5]

const a: number[] = [0];
const ra: readonly number[] = [0];

const x: readonly number[] = a;  // 正确
// @ts-expect-error
const y: number[] = ra;




const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};





export { }
