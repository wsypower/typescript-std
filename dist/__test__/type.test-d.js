"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Everyday_Types_1 = require("../src/Everyday-Types");
describe('everyday-types', () => {
    it('basics', () => {
        expectTypeOf(Everyday_Types_1.s).toBeString();
        expectTypeOf(Everyday_Types_1.n).toBeNumber();
        expectTypeOf(Everyday_Types_1.b).toBeBoolean();
        expectTypeOf(Everyday_Types_1.array).toBeArray();
        expectTypeOf(Everyday_Types_1.obj).toBeObject();
        expectTypeOf(Everyday_Types_1.greet).toBeFunction();
    });
});
