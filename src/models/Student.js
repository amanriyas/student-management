"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Person_1 = require("../abstracts/Person");
var log_1 = require("../decorators/log");
/**
 * Student class - demonstrates:
 * - extends abstract class
 * - implements interface
 * - readonly id inherited from Person
 * - encapsulation: private/protected members
 * - getters/setters
 */
var Student = function () {
    var _a;
    var _classSuper = Person_1.Person;
    var _instanceExtraInitializers = [];
    var _enroll_decorators;
    var _dropCourse_decorators;
    return _a = /** @class */ (function (_super) {
            __extends(Student, _super);
            function Student(id, name, gradeLevel, age) {
                var _this = _super.call(this, id, name) || this;
                _this.age = __runInitializers(_this, _instanceExtraInitializers);
                // store enrolled courses privately
                _this.courses = [];
                _this.gradeLevel = gradeLevel;
                _this.age = age;
                return _this;
            }
            Object.defineProperty(Student.prototype, "enrolledCourses", {
                get: function () {
                    return this.courses;
                },
                enumerable: false,
                configurable: true
            });
            Student.prototype.enroll = function (course) {
                if (!this.courses.find(function (c) { return c.id === course.id; })) {
                    this.courses.push(course);
                }
            };
            Student.prototype.dropCourse = function (courseId) {
                this.courses = this.courses.filter(function (c) { return c.id !== courseId; });
            };
            Student.prototype.describe = function () {
                var _b;
                return "Student ".concat(this.getDisplayName(), " - ").concat(this.gradeLevel, " (").concat((_b = this.age) !== null && _b !== void 0 ? _b : "N/A", " yrs)");
            };
            return Student;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _enroll_decorators = [log_1.LogMethod];
            _dropCourse_decorators = [log_1.LogMethod];
            __esDecorate(_a, null, _enroll_decorators, { kind: "method", name: "enroll", static: false, private: false, access: { has: function (obj) { return "enroll" in obj; }, get: function (obj) { return obj.enroll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _dropCourse_decorators, { kind: "method", name: "dropCourse", static: false, private: false, access: { has: function (obj) { return "dropCourse" in obj; }, get: function (obj) { return obj.dropCourse; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Student = Student;
