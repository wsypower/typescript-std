interface Todo {
  title: string
  description: string
}

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type T = Partial<Todo>

export { }
