/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 18:57:28
 * @LastEditTime: 2023-03-27 08:15:44
 * @LastEditors: wsy
 */

type Complement<A, B extends A> = Exclude<A, B>

type A = 'a' | 'b' | 'c' | 'd'
type B = 'a' | 'b' | "c"

type C = Complement<A, B> // "d"

type e = string[] | number[] | boolean[]


export { }
