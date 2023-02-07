interface A {
  x: number
  y: number
}

type B = Readonly<A>

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}
export { }
