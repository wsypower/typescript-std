/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 19:30:55
 * @LastEditTime: 2023-02-07 19:35:07
 * @LastEditors: wsy
 */
interface Todo {
  title: string
  description: string
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type T = Partial<Todo>

export { }
