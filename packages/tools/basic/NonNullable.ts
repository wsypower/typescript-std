/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 19:03:11
 * @LastEditTime: 2023-02-08 19:40:03
 * @LastEditors: wsy
 */
type NonNullable<T> = T & {};

type TO = NonNullable<string | number | undefined | null>

type C = Object & null

type A = null extends {} ? true : false
// const a: A = 1

type Alignment = string & {} | "left" | "center" | "right";



export { }
