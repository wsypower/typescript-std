
export const s: string = '1'
export const n: number = 1
export const b: boolean = true
export const array: number[] = [1, 2, 3]

export const obj: { a: any } = { a: 1 }

export function greet(name: string): string
export function greet(name: number): number
export function greet(name: string | number) {
  return name
}

type a = ReturnType<typeof greet>




declare function handleRequest(method: "GET" | "POST"): void;


interface Request {
  url: string;
  method: "GET" | "POST";
}

const req: Request = { url: "https://example.com", method: "GET" }
const a = req.method

handleRequest(req.method);
