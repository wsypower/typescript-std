/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-29 19:35:47
 * @LastEditTime: 2023-01-29 19:35:59
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


export { }
