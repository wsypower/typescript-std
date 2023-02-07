

interface A {
  x: number;
  y: number;
}
type T = Omit<A, 'x'>

export { }
