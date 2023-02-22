/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-15 13:20:38
 * @LastEditTime: 2023-02-21 21:03:58
 * @LastEditors: wsy
 */
declare module 'global' {
  const a: string = 'ddd'
  const b: number = 1
  const c: string = 'c'
  function dd(number: number) {
    return number
  }
}

interface a {
  name: string
}

type self = 'wei'

declare namespace test {
  export const a: 'a11111' = 'a'
  const b: number = 1
  const c: string = 'c'
}
