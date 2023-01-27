"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ClassName_radio;
exports.__esModule = true;
/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-01-27 16:10:34
 * @LastEditTime: 2023-01-27 16:19:27
 * @LastEditors: wsy
 */
var ClassName = /** @class */ (function () {
    function ClassName() {
        _ClassName_radio.set(this, 1);
        __classPrivateFieldSet(this, _ClassName_radio, 2, "f");
    }
    return ClassName;
}());
_ClassName_radio = new WeakMap();
var a = new ClassName();
// @ts-ignore
a. = 1;
