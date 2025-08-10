"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(id, title, subject, credits) {
        this.id = id;
        this.title = title;
        this.subject = subject;
        this.credits = credits;
    }
    Course.prototype.describe = function () {
        return "".concat(this.title, " (").concat(this.subject, ") - ").concat(this.credits, " credits");
    };
    return Course;
}());
exports.Course = Course;
