/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-29 19:35:47
 * @LastEditTime: 2023-01-29 19:57:37
 * @LastEditors: wsy
 */
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toLowerCase() // 类型缩小为 string
    y.toLowerCase() // 类型缩小为 string
  }
}


interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container) {
  if (container.value != null) {
    container.value // number
  }
}

export { }
