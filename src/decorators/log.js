"use strict";
/**
 * A simple logging decorator for classes and methods.
 * Shows experimental decorator syntax and metadata usage.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogClass = LogClass;
exports.LogMethod = LogMethod;
function LogClass(prefix) {
    if (prefix === void 0) { prefix = "LOG"; }
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                console.log("".concat(prefix, ": Constructed ").concat(constructor.name, " with"), args);
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
function LogMethod(target, propertyKey, descriptor) {
    var original = descriptor.value;
    if (typeof original === "function") {
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Method ".concat(propertyKey, " called with"), args);
            var result = original.apply(this, args);
            console.log("Method ".concat(propertyKey, " returned"), result);
            return result;
        };
    }
    return descriptor;
}
