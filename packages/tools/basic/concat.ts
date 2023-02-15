/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-10 19:36:00
 * @LastEditTime: 2023-02-10 19:41:35
 * @LastEditors: wsy
 */

interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

const a: Box = {
  height: 1,
  width: 2,
  scale: 3,
}

interface A {
  a(a: number): void
}
interface A {
  a(a: string): void
}

const a1: A = {
  a(a: any) {
    return
  }
}
export { }
