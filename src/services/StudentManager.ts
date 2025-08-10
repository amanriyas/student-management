import { Repository } from "./Repository";
import { Student } from "../models/Student";
import { Course } from "../models/Course";
import { Teacher } from "../models/Teacher";
import { generateId } from "../utils/idGenerator";
import { GradeLevel } from "../enums/GradeLevel";
import { Subject } from "../enums/Subject";
import { isCourse } from "../utils/validators";
import { Result } from "../types/dtos";



export class StudentManager {
  private studentRepo = new Repository<Student>();
  private courseRepo = new Repository<Course>();
  private teacherRepo = new Repository<Teacher>();


  createCourse(title: string, subject: Subject, credits: number): Course {
    const course = new Course(generateId("CRS"), title, subject, credits);
    this.courseRepo.create(course);
    return course;
  }

  // create a student (async - simulating DB operation)
  async createStudent(name: string, gradeLevel: GradeLevel, age?: number): Promise<Student> {
    const student = new Student(generateId("STU"), name, gradeLevel, age);
    // simulate latency
    await new Promise((r) => setTimeout(r, 50));
    this.studentRepo.create(student);
    return student;
  }

  // enroll with validation and result type
  async enrollStudent(studentId: string, courseId: string): Promise<Result<string>> {
    const student = this.studentRepo.getById(studentId);
    const course = this.courseRepo.getById(courseId);

    if (!student) return { ok: false, error: `Student ${studentId} not found` };
    if (!course) return { ok: false, error: `Course ${courseId} not found` };

    // type guard demo
    if (!isCourse(course)) return { ok: false, error: "Course object invalid" };

    student.enroll(course);
    // update repo (to persist any changes)
    this.studentRepo.update(student.id, { /* no id change */ } as any);

    return { ok: true, value: `${student.name} enrolled in ${course.title}` };
  }

  listStudents(): Student[] {
    return this.studentRepo.list();
  }

  listCourses(): Course[] {
    return this.courseRepo.list();
  }

  // higher-level operation demonstration combining async and Promise.all
  async seedDemoData(): Promise<void> {
    const courses = [
      this.createCourse("Advanced Math", Subject.Math, 3),
      this.createCourse("World History", Subject.History, 2),
      this.createCourse("Intro to Programming", Subject.Computer, 4),
    ];

    // create students in parallel
    const students = await Promise.all([
      this.createStudent("Alice", GradeLevel.Freshman, 18),
      this.createStudent("Bob", GradeLevel.Senior, 22),
      this.createStudent("Charlie", GradeLevel.Junior, 20)
    ]);

    // enroll some students
    await this.enrollStudent(students[0].id, courses[0].id); // Alice -> Math
    await this.enrollStudent(students[0].id, courses[1].id); // Alice -> History
    await this.enrollStudent(students[1].id, courses[1].id); // Bob -> History
    // Charlie no courses yet
  }
}
