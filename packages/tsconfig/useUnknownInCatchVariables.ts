/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-02 18:53:53
 * @LastEditTime: 2023-03-02 18:56:42
 * @LastEditors: wsy
 */
try {
  throw new Error('error----------------')
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
