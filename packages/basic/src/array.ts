/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-26 01:06:16
 * @LastEditTime: 2023-02-07 14:27:02
 * @LastEditors: wsy
 */
const arr: ReadonlyArray<number> = [1, 2, 3, 4, 5]

const a: number[] = [0];
const ra: readonly number[] = [0];

const x: readonly number[] = a;  // 正确
// @ts-expect-error
const y: number[] = ra;




const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};


type LabeledValue1 = {
  label: string;
}
function printLabel(labeledObj: LabeledValue1) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK


type N = ['ke', 'a']
type c1 = (number | string)[]
type c2 = c1[number]
type c = N[number]

export { }
