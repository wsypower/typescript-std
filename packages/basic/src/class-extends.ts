/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 17:04:22
 * @LastEditTime: 2023-01-27 17:10:52
 * @LastEditors: wsy
 */
interface Color {
  color: string;
}

interface Shape {
  area(): number;
}

class Circle implements Shape, Color {
  radius: number = 1;

  color: string = 'black';

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle()

// console.log(c.color)
// console.log(c.radius)


class Base {
  public static x: string = 'coolcou.com';
  protected static y: string = '';
}

class Derived extends Base {
  static b() {
    // 继承了基类的静态成员 x
    console.log(this.x);

    // 继承了基类的静态成员 y
    console.log(Derived.y);
  }
}
Derived.b()

export { }
