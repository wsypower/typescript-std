/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 14:46:36
 * @LastEditTime: 2023-01-27 16:51:22
 * @LastEditors: wsy
 */
// class ClassName {
//   constructor(public radio: number) {
//   }
// }

class ClassName {
  radio: number
  constructor(radioName: number) {
    this.radio = radioName
  }
}
const c = new ClassName(1)
console.log(c);


class ClassInit {
  name: string = 'wsy'
  constructor(public readonly age: number) {

  }
}


const d = new ClassInit(123)
console.log();

class A {
  readonly a = 0;
  readonly b: number;
  constructor(public readonly c: number) {
    this.b = 0;
  }
}
const a = new A(1);

// 无法为“c”赋值，因为它是只读属性
// @ts-ignore
a.c = 1

class Circle {
  radius: number = 1;

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}



class Shape {
  color: string = 'black';

  switchColor() {
    console.log("parent", this.color);
    this.color = this.color === 'black' ? 'white' : 'black';
  }
}

class CircleChildren extends Shape {
  color: string = 'red';
  switchColor() {
    console.log('Color----------', this.color);
    super.switchColor();
    console.log(`Color is ${this.color}.`);
  }
}

const circle = new CircleChildren();
circle.switchColor(); // Color is white
circle.switchColor(); // Color is black




export { }
// class A {
//   readonly a = 0;
//   readonly b: number;
//   readonly c: number; // 编译错误

//   constructor() {
//     // this.b = 0;
//   }
// }
