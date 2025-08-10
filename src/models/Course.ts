import { ICourse } from "../interfaces/ICourse";
import { Subject } from "../enums/Subject";


export class Course implements ICourse {
  public readonly id: string;
  public title: string;
  public subject: Subject;
  public credits: number;

  constructor(id: string, title: string, subject: Subject, credits: number) {
    this.id = id;
    this.title = title;
    this.subject = subject;
    this.credits = credits;
  }

  describe(): string {
    return `${this.title} (${this.subject}) - ${this.credits} credits`;
  }
}
