/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-27 19:25:53
 * @LastEditTime: 2023-02-27 20:02:53
 * @LastEditors: wsy
 */

namespace wsy {
  const name = 'wsy'
  export function getName() {
    return name
  }
}

// @ts-expect-error
wsy.name // error



interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog); // OK

export { }
