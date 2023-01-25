const arr: ReadonlyArray<number> = [1, 2, 3, 4, 5]

const a: number[] = [0];
const ra: readonly number[] = [0];

const x: readonly number[] = a;  // 正确
// @ts-expect-error
const y: number[] = ra;

export { }
