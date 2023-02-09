/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 20:45:07
 * @LastEditTime: 2023-02-09 20:52:50
 * @LastEditors: wsy
 */

interface Edit {
  name: string
}
type T0 = ThisParameterType<(this: Edit) => void>



export { }
