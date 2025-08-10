"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (!newName) {
                throw new Error("Invalid name");
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getDisplayName = function () {
        return "".concat(this._name, " (").concat(this.id, ")");
    };
    return Person;
}());
exports.Person = Person;
