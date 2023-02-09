/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 20:21:23
 * @LastEditTime: 2023-02-09 20:24:09
 * @LastEditors: wsy
 */
type T0 = Parameters<() => string>
type T1 = Parameters<(s: string) => void>
type T2<T> = Parameters<(arg: T) => T>

type T3 = T2<string>

export { }
