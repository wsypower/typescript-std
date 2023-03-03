/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-03 19:17:15
 * @LastEditTime: 2023-03-03 19:33:52
 * @LastEditors: wsy
 */
interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";

  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}
function getSettings() {
  const a: GameSettings = {
    speed: "fast",
    quality: "high",
    username: "wsy",
  }
  return a
}
const settings = getSettings();
settings.speed;

settings.quality;
settings.username


interface AllStringTypes {
  name: string;
  [key: string]: string;
}

type PropType1 = AllStringTypes['unknownProp']; // string
type PropType2 = AllStringTypes['name']; // string

// Unknown key accessors are allowed on
// this object, and are `string`

export { }
