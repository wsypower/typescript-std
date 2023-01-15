/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-01-15 20:32:36
 * @LastEditTime: 2023-01-15 20:52:36
 * @LastEditors: wsy
 */

// ts 的静态检测
const user = {
  name: "Daniel",
  age: 26,
};
// @ts-expect-error 
user.location; // returns undefined

const announcement = "Hello World!";
// @ts-expect-error  属性“toLocalLowerCase”在类型“"Hello World!"”上不存在。你是否指的是“toLocaleLowerCase”?
announcement.toLocaleLowercase();
// @ts-expect-error  属性“toLocalLowerCase”在类型“"Hello World!"”上不存在。你是否指的是“toLocaleLowerCase”?
announcement.toLocalLowerCase();




function flipCoin() {
  // Meant to be Math.random()
  // @ts-expect-error
  return Math.random < 0.5;
  // Operator '<' cannot be applied to types '() => number' and 'number'.
}


const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
  // @ts-expect-error 基本的逻辑错误
} else if (value === "b") {
  // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}

// @ts-expect-error
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

// @ts-expect-error
greet("Brendan");
