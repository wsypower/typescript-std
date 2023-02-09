/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-09 21:24:51
 * @LastEditTime: 2023-02-09 21:52:57
 * @LastEditors: wsy
 */
interface Env {
  x: number
}

interface InitEnvPropertiesB {
  e: string;
  initABC: () => void;
}

const initEnvPropertiesB: InitEnvPropertiesB & ThisType<Env> = {
  e: "e",
  initABC() {
    return this.x
    // this.x = 2;
  },
};

initEnvPropertiesB.initABC();
console.log(initEnvPropertiesB.initABC());
console.log(initEnvPropertiesB);






type GetterFunc = Record<string, () => any>;

type ReturnTypes<T extends GetterFunc> = {
  [K in keyof T]: ReturnType<T[K]>;
};

declare function defineStore<State, Getters extends GetterFunc, Actions>(store: {
  id: string;
  state: () => State;
  getters?: Getters & ThisType<Readonly<State> & ReturnTypes<Getters>>;
  actions?: Actions & ThisType<State & Actions>;
}): State & Readonly<ReturnTypes<Getters> & Actions>;

const store = defineStore({
  id: "",
  state: () => ({
    num: 0,
    str: "",
  }),
  getters: {
    stringifiedNum() {
      this.num
      this.str
      const a = this.parsedNum()
      return this.num.toString();
    },
    parsedNum() {
      return parseInt(this.stringifiedNum);
    },
  },
  actions: {
    init() {
      const a = this.reset();
      this.increment();
    },
    increment(step = 1) {
      this.num += step;
    },
    reset() {
      const a = this.num = 0;
      // @ts-expect-error
      this.parsedNum = 0;

      return true;
    },
    setNum(value: number) {
      this.num = value;
    },
  },
});



export { }
