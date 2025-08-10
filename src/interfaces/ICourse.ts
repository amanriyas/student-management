import { Subject } from "@/enums/Subjects";

export interface ICourse {
    readonly id: string;
    title: string;
    subject: Subject;
    credits: number;
}
