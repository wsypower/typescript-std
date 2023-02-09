/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 20:40:11
 * @LastEditTime: 2023-02-09 20:40:15
 * @LastEditors: wsy
 */

type T2 = InstanceType<new () => Date> // Date
type T3 = InstanceType<new (s: string) => Date> // Date
type T4 = InstanceType<typeof Date> // Date 







export { }
