function identity<T>(arg: T): T {
  return arg;
}

const a = identity('123'); // type is 123
let b = identity('123');   // type is string

class People {
  name = 'wsy'
}

function create<T>(Constructor: { new(...args: any): T }) {
  return new Constructor();
}
const people = create(People); // type is People

export { }
