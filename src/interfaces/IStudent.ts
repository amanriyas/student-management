import { GradeLevel } from "@/enums/GradeLevel";
import { ICourse } from "./ICourse";

export interface IStudent{
    readonly id : string;
    name : string;
    age?:number;
    gradeLevel : GradeLevel;
    enrolledCourses : ReadonlyArray<ICourse>;
    enroll(course : ICourse): void;
    dropCourse(courseId: string): void;
}