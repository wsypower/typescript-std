/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-04-11 19:44:19
 * @LastEditTime: 2023-04-11 21:23:22
 * @LastEditors: wsy
 */

type formatValue<T> = T extends unknown[] ? T : [T];
type MergeValue<T, R> =
  T extends R
  ? T
  : [...formatValue<T>, ...formatValue<R>]
type MergeQuery<T extends Record<string, any>, R extends Record<string, any>> =
  {
    [K in keyof T | keyof R]: K extends keyof T
    ? K extends keyof R
    ? MergeValue<T[K], R[K]>
    : T[K]
    : K extends keyof R
    ? R[K]
    : never
  }
type ParseParam<T> =
  T extends `${infer K}=${infer V}` ? { [k in K]: V } : Record<string, any>
type MapResult<T extends Record<string, any>> = {
  [K in keyof T]: T[K]
}
type ParseQueryString<T> =
  T extends `${infer K}&${infer Rest}` ? MergeQuery<ParseParam<K>, ParseQueryString<Rest>> : ParseParam<T>





function parseQueryString<T extends string>(queryString: T): ParseQueryString<T>
function parseQueryString(queryString: string) {
  return queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    return { ...acc, [key]: value }
  }, {})
}

const result = parseQueryString('a=`1`&b=2&c=3&d=4')
