/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 18:53:26
 * @LastEditTime: 2023-02-08 18:53:34
 * @LastEditors: wsy
 */
type Concurrence<A, B> = A | B

type A = 'a' | 'b' | 'c'
type B = 'b' | 'c' | 'd'
type C = Concurrence<A, B> // "a" | "b" | "c" | "d"


export { }
