/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-22 21:57:12
 * @LastEditTime: 2023-02-23 09:52:03
 * @LastEditors: wsy
 */
// import address from 'address'

// console.log(address.ip());
// address("ipv4", (err, addrs) => {
//   console.log(addrs);
// })


function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
    }, 1000)
  })
}


// () => { } + 函数式  x
function a() {
  return test()
}


a().then(res => {
  console.log(res)
})

export { }
