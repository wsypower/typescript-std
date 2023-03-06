/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-03 19:14:33
 * @LastEditTime: 2023-03-06 20:03:46
 * @LastEditors: wsy
 */
interface EnvironmentVars {
  NAME: string;
  OS: string;
  [propName: string]: string;
}

type EnvironmentVarsKeys = EnvironmentVars['NODE_ENV'];

const env: EnvironmentVars = {
  NAME: "wsy",
  OS: "mac",
};

const sysName = env.NAME;
const os = env.OS;

const nodeEnv = env.NODE_ENV;


interface AllStringTypes {
  name: string;
  [key: string]: string
}

type PropType1 = AllStringTypes['unknownProp']; // string
type PropType2 = AllStringTypes['name']; // string


const person = {
  name: 'wsy',
  age: 18,
}

export { }
