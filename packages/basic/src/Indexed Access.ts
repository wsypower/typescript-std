/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-03 18:55:41
 * @LastEditTime: 2023-02-03 19:03:01
 * @LastEditors: wsy
 */
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { a: "Eve", age: 38 },
];

type Person = typeof MyArray[number];


const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
type app = typeof APP[number];

export { }
