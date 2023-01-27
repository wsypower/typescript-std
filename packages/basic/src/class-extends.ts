/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 17:04:22
 * @LastEditTime: 2023-01-27 18:41:54
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



class A {
  foo(): this {
    return this;
  }
}

class B extends A {
  bar(): this {
    return this;
  }
}

const b = new B();
const x = b.bar().foo();
console.log(x);


class Thing {
  _size = 0;

  // 注意这里返回的是 number 类型
  get size(): number {
    return this._size;
  }

  // 注意这里允许传入的是 string | number | boolean 类型
  set size(value: string | number | boolean) {
    let num = Number(value);

    // Don't allow NaN, Infinity, etc
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

interface Checkable {
  name: string | number | boolean;
}

class NameChecker implements Checkable {
  name!: string | number;
}


class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      console.log(this.#count);
    }
    catch { }
  }
}

// const f = new Foo()

export { }
