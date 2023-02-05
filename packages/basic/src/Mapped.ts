/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-05 13:29:11
 * @LastEditTime: 2023-02-05 13:52:39
 * @LastEditors: wsy
 */
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;


interface User {
  name: string
  age: number
  location: string
}

type LazyUser<T> = {
  [Property in keyof T as 'age' | 'location']: T[Property]
}

const user: LazyUser<User> = {
  age: 10,
  location: 'beijing',
}


export { }
// type LazyPerson = {
//    getName: () => string;
//    getAge: () => number;
//    getLocation: () => string;
// }
