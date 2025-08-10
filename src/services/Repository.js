"use strict";
/**
 * Generic in-memory repository to demonstrate:
 * - Generics (T, K)
 * - constraint where T extends { id: string }
 * - utility types examples in comments
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = new Map();
    }
    Repository.prototype.create = function (item) {
        this.items.set(item.id, item);
        return item;
    };
    Repository.prototype.getById = function (id) {
        return this.items.get(id);
    };
    Repository.prototype.update = function (id, patch) {
        var existing = this.items.get(id);
        if (!existing)
            return undefined;
        var updated = __assign(__assign({}, existing), patch);
        this.items.set(id, updated);
        return updated;
    };
    Repository.prototype.delete = function (id) {
        return this.items.delete(id);
    };
    Repository.prototype.list = function () {
        return Array.from(this.items.values());
    };
    // Example of a typed search function with key restricted to T's keys (K extends keyof T)
    Repository.prototype.findBy = function (key, value) {
        return this.list().filter(function (item) { return item[key] === value; });
    };
    return Repository;
}());
exports.Repository = Repository;
