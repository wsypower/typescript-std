/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-28 19:40:30
 * @LastEditTime: 2023-01-28 19:40:31
 * @LastEditors: wsy
 */
type IntersectionTypeConfict = { id: number; name: number; }
  & { age: number; name: 22; };

let mixedConflict: IntersectionTypeConfict = {
  id: 1,
  name: 22, // ok
  age: 2
};
mixedConflict = {
  id: 1,
  name: 22, // '22' 类型不能赋给 '2' 类型
  age: 2
};
