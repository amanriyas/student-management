import { CourseDTO, StudentDTO } from "../types/dtos";
import { ICourse } from "../interfaces/ICourse";

/* Type guard to check runtime object shape */
export function isCourse(obj: unknown): obj is ICourse {
  if (!obj || typeof obj !== "object") return false;
  const c = obj as any;
  return typeof c.id === "string" && typeof c.title === "string" && typeof c.credits === "number";
}

/* Narrowing example for StudentDTO shape */
export function isStudentDTO(obj: unknown): obj is StudentDTO {
  if (!obj || typeof obj !== "object") return false;
  const s = obj as any;
  return (
    typeof s.id === "string" &&
    typeof s.name === "string" &&
    typeof s.gradeLevel === "string" &&
    Array.isArray(s.enrolledCourseIds)
  );
}
