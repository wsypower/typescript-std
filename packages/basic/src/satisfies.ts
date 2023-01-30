type Point2D = { x: number; y: number };
const p = { x: 1 } satisfies Partial<Point2D>;

console.log(p.x.toFixed()); // ok

interface Person {
  name: string;
  age: number;
}

const person = 'randy' as unknown as Person; // ok
