/*
 * @Description:  
 * @Author: wsy
 * @Date: 2023-02-07 19:44:07
 * @LastEditTime: 2023-02-07 19:44:21
 * @LastEditors: wsy
 */
interface A {
  x?: number
  y?: number
}
type B = Required<A>
// {
//   x: number;
//   y: number;
// }
export { }
