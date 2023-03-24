type P = Promise<string>

type GetPromiseValue<T> = T extends Promise<infer R> ? R : never

type GetPromiseResult = GetPromiseValue<P>

type WarpString<T> =T
type GetWarpValue<T> = T extends WarpString<infer R> ? R : never

type GetWarpResult = GetWarpValue<WarpString<number>>

export { }
