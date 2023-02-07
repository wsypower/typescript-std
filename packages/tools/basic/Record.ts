type K = 'x' | 'y'
type T = number
type Key = keyof any

type R = Record<PropertyKey, T>

// {
//   x: number;
//   y: number;
// }
