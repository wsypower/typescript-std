/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-15 20:32:50
 * @LastEditTime: 2023-01-16 00:08:24
 * @LastEditors: wsy
 */
import { s, n, b, array, obj, greet } from '../src/Everyday-Types'


describe('everyday-types', () => {
  it('basics', () => {
    expectTypeOf(s).toBeString();
    expectTypeOf(n).toBeNumber();
    expectTypeOf(b).toBeBoolean();
    expectTypeOf(array).toBeArray();
    expectTypeOf(obj).toBeObject();
    expectTypeOf(greet).toBeFunction();

  });
})
