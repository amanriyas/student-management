import { Person } from "../abstracts/Person";
import { Subject } from "../enums/Subject";

/**
 * Teacher simple subclass demonstrating polymorphism
 */
export class Teacher extends Person {
  constructor(id: string, name: string, public subjectSpecialization: Subject) {
    super(id, name);
  }

  describe(): string {
    return `Teacher ${this.getDisplayName()} - specializes in ${this.subjectSpecialization}`;
  }
}
