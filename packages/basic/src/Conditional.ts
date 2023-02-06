/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-03 19:14:47
 * @LastEditTime: 2023-02-03 21:26:36
 * @LastEditors: wsy
 */

type test = number | string[]
type test1 = test[]

type ToArrayNonDist<T> = T extends string ? [T] : never;

type str = ToArrayNonDist<string | number>; // [string]

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type A = keyof FeatureFlags; // "darkMode" | "newUserProfile"



Promise.resolve('res')
  .finally(() => { console.log('finally1') })
  .then((data) => { console.log(data); })
  .finally(() => { console.log('finally2') })

export { }
