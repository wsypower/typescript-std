/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-15 13:18:13
 * @LastEditTime: 2023-02-22 19:52:27
 * @LastEditors: wsy
 */
import path from 'node:path'
// declare const func: (a: number) => void

declare global {
  const func: (a: number) => void
}

Animal.b
Animal.c
Animal.a



function buildLable(name: string): string {
  return buildLable.prefix + name + buildLable.suffix
}

buildLable.prefix

namespace buildLable {
  export const prefix = 'hello, '
  export const suffix = '!'
}


