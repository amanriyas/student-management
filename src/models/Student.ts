import { Person } from "../abstracts/Person";
import { IStudent } from "../interfaces/IStudent";
import { ICourse } from "../interfaces/ICourse";
import { GradeLevel } from "../enums/GradeLevel";
import { LogMethod } from "../decorators/log";

/**
 * Student class - demonstrates:
 * - extends abstract class
 * - implements interface
 * - readonly id inherited from Person
 * - encapsulation: private/protected members
 * - getters/setters
 */
export class Student extends Person implements IStudent {
  public age?: number;
  public gradeLevel: GradeLevel;
  // store enrolled courses privately
  protected courses: ICourse[] = [];

  constructor(id: string, name: string, gradeLevel: GradeLevel, age?: number) {
    super(id, name);
    this.gradeLevel = gradeLevel;
    this.age = age;
  }

  get enrolledCourses(): ReadonlyArray<ICourse> {
    return this.courses;
  }

  @LogMethod
  enroll(course: ICourse): void {
    if (!this.courses.find((c) => c.id === course.id)) {
      this.courses.push(course);
    }
  }

  @LogMethod
  dropCourse(courseId: string): void {
    this.courses = this.courses.filter((c) => c.id !== courseId);
  }

  describe(): string {
    return `Student ${this.getDisplayName()} - ${this.gradeLevel} (${this.age ?? "N/A"} yrs)`;
  }
}
