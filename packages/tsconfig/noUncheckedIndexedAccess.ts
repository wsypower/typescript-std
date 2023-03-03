/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-03 19:14:33
 * @LastEditTime: 2023-03-03 19:44:34
 * @LastEditors: wsy
 */
interface EnvironmentVars {
  NAME: string;
  OS: string;

  // Unknown properties are covered by this index signature.
  [propName: string]: string;
}

const env: EnvironmentVars = {
  NAME: "wsy",
  OS: "mac",
};

// Declared as existing
const sysName = env.NAME;
const os = env.OS;


// Not declared, but because of the index
// signature, then it is considered a string
const nodeEnv = env["NODE_ENV"];



interface AllStringTypes {
  name: string;
  [key: string]: string;
}

type PropType1 = AllStringTypes['unknownProp']; // string
type PropType2 = AllStringTypes['name']; // string

export { }
