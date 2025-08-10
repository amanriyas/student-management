"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCourse = isCourse;
exports.isStudentDTO = isStudentDTO;
/* Type guard to check runtime object shape */
function isCourse(obj) {
    if (!obj || typeof obj !== "object")
        return false;
    var c = obj;
    return typeof c.id === "string" && typeof c.title === "string" && typeof c.credits === "number";
}
/* Narrowing example for StudentDTO shape */
function isStudentDTO(obj) {
    if (!obj || typeof obj !== "object")
        return false;
    var s = obj;
    return (typeof s.id === "string" &&
        typeof s.name === "string" &&
        typeof s.gradeLevel === "string" &&
        Array.isArray(s.enrolledCourseIds));
}
