/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-01 19:28:28
 * @LastEditTime: 2023-03-01 19:28:36
 * @LastEditors: wsy
 */
const logNumber = (x: number) => {
  console.log(`number：${x}`)
}
// @ts-expect-error
logNumber.call(undefined, "10");
