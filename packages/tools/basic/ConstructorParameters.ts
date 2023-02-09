/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 20:28:27
 * @LastEditTime: 2023-02-09 20:28:30
 * @LastEditors: wsy
 */

type T0 = ConstructorParameters<ErrorConstructor>
type T1 = ConstructorParameters<new (a: string) => any>
type T2 = ConstructorParameters<new (x?: string) => object>;
// @ts-expect-error
type T3 = ConstructorParameters<string>;
export { }
