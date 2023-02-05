/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 14:46:36
 * @LastEditTime: 2023-02-05 17:59:36
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


type isEqual<T, U> = T extends U ? (U extends T ? true : false) : false;

class Name {
  x: number;
  constructor() {
    this.x = 0;
  }
}
// 实例类型 Name
interface MockName {
  x: number;
}
const name: Name = new Name();

interface MockConstructorName {
  new(): Name;
}


const constructorName: typeof Name = Name



function instanceNameConstructor(Constructor: typeof Name): Name {
  return new Constructor();
}



export { }
// class A {
//   readonly a = 0;
//   readonly b: number;
//   readonly c: number; // 编译错误

//   constructor() {
//     // this.b = 0;
//   }
// }
