/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-03 19:14:47
 * @LastEditTime: 2023-02-03 19:54:18
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

export { }
