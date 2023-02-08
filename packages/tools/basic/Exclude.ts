/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-08 18:37:45
 * @LastEditTime: 2023-02-08 18:37:54
 * @LastEditors: wsy
 */
type a = 'a' | 'b' | 'c'

type E = Exclude<a, 'a' | 'b'> // 'c'

export { }
