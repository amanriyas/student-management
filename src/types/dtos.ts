import { GradeLevel } from "@/enums/GradeLevel";
import {Subject} from "@/enums/Subjects";

export type StudentCreateDTO = {
 name : string;
 age?: number;
 gradeLevel: GradeLevel;
};

export type StudentDTO = StudentCreateDTO & {
 id: string;
 enrolledCourseIds: string[];
};

export type CourseCreateDTO = {
 title: string;
 subject: Subject;
 credits: number;
};

export type CourseDTO = CourseCreateDTO & {
 id: string;
};

export type PartialStudent = Partial<StudentCreateDTO>;
export type ReadonlyCourse = Readonly<CourseDTO>;


export type ResultSuccess<T> = { ok: true; value : T};
export type ResultFailure = { ok: false, error : string};
export type Result<T> = ResultSuccess<T> | ResultFailure;