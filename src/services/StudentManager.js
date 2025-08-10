"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var Repository_1 = require("./Repository");
var Student_1 = require("../models/Student");
var Course_1 = require("../models/Course");
var idGenerator_1 = require("../utils/idGenerator");
var GradeLevel_1 = require("../enums/GradeLevel");
var Subject_1 = require("../enums/Subject");
var validators_1 = require("../utils/validators");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.studentRepo = new Repository_1.Repository();
        this.courseRepo = new Repository_1.Repository();
        this.teacherRepo = new Repository_1.Repository();
    }
    StudentManager.prototype.createCourse = function (title, subject, credits) {
        var course = new Course_1.Course((0, idGenerator_1.generateId)("CRS"), title, subject, credits);
        this.courseRepo.create(course);
        return course;
    };
    // create a student (async - simulating DB operation)
    StudentManager.prototype.createStudent = function (name, gradeLevel, age) {
        return __awaiter(this, void 0, void 0, function () {
            var student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        student = new Student_1.Student((0, idGenerator_1.generateId)("STU"), name, gradeLevel, age);
                        // simulate latency
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 50); })];
                    case 1:
                        // simulate latency
                        _a.sent();
                        this.studentRepo.create(student);
                        return [2 /*return*/, student];
                }
            });
        });
    };
    // enroll with validation and result type
    StudentManager.prototype.enrollStudent = function (studentId, courseId) {
        return __awaiter(this, void 0, void 0, function () {
            var student, course;
            return __generator(this, function (_a) {
                student = this.studentRepo.getById(studentId);
                course = this.courseRepo.getById(courseId);
                if (!student)
                    return [2 /*return*/, { ok: false, error: "Student ".concat(studentId, " not found") }];
                if (!course)
                    return [2 /*return*/, { ok: false, error: "Course ".concat(courseId, " not found") }];
                // type guard demo
                if (!(0, validators_1.isCourse)(course))
                    return [2 /*return*/, { ok: false, error: "Course object invalid" }];
                student.enroll(course);
                // update repo (to persist any changes)
                this.studentRepo.update(student.id, { /* no id change */});
                return [2 /*return*/, { ok: true, value: "".concat(student.name, " enrolled in ").concat(course.title) }];
            });
        });
    };
    StudentManager.prototype.listStudents = function () {
        return this.studentRepo.list();
    };
    StudentManager.prototype.listCourses = function () {
        return this.courseRepo.list();
    };
    // higher-level operation demonstration combining async and Promise.all
    StudentManager.prototype.seedDemoData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var courses, students;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        courses = [
                            this.createCourse("Advanced Math", Subject_1.Subject.Math, 3),
                            this.createCourse("World History", Subject_1.Subject.History, 2),
                            this.createCourse("Intro to Programming", Subject_1.Subject.Computer, 4),
                        ];
                        return [4 /*yield*/, Promise.all([
                                this.createStudent("Alice", GradeLevel_1.GradeLevel.Freshman, 18),
                                this.createStudent("Bob", GradeLevel_1.GradeLevel.Senior, 22),
                                this.createStudent("Charlie", GradeLevel_1.GradeLevel.Junior, 20)
                            ])];
                    case 1:
                        students = _a.sent();
                        // enroll some students
                        return [4 /*yield*/, this.enrollStudent(students[0].id, courses[0].id)];
                    case 2:
                        // enroll some students
                        _a.sent(); // Alice -> Math
                        return [4 /*yield*/, this.enrollStudent(students[0].id, courses[1].id)];
                    case 3:
                        _a.sent(); // Alice -> History
                        return [4 /*yield*/, this.enrollStudent(students[1].id, courses[1].id)];
                    case 4:
                        _a.sent(); // Bob -> History
                        return [2 /*return*/];
                }
            });
        });
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
