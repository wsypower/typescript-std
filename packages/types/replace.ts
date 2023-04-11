type P = Promise<string>

type GetPromiseValue<T> = T extends Promise<infer R> ? R : never

type GetPromiseResult = GetPromiseValue<P>

type WarpString<T> =T
type GetWarpValue<T> = T extends WarpString<infer R> ? R : never

type GetWarpResult = GetWarpValue<WarpString<number>>

// First
type First<T> = T extends [infer R, ...unknown[]] ? R : never
type FirstResult = First<[number, string, boolean]>


export { }
