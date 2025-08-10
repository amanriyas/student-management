import { StudentManager } from "./src/services/StudentManager";
import { GradeLevel } from "./src/enums/GradeLevel";

async function main() {
  console.log("Starting Student Management (extended) demo...");

  const manager = new StudentManager();

  // seed data (async)
  await manager.seedDemoData();

  // list students
  console.log("\n=== Students ===");
  manager.listStudents().forEach((s) => {
    console.log(s.describe());
    console.log(" Enrolled courses:", s.enrolledCourses.map((c) => c.title).join(", ") || "None");
  });

  // list courses
  console.log("\n=== Courses ===");
  manager.listCourses().forEach((c) => {
    console.log(c.describe());
  });

  // add a new student then enroll
  const newStudent = await manager.createStudent("Diana", GradeLevel.Sophomore, 19);
  const courses = manager.listCourses();
  if (courses.length > 0) {
    const res = await manager.enrollStudent(newStudent.id, courses[2].id);
    if (res.ok) {
      console.log("\nEnrollment:", res.value);
    } else {
      console.error("\nEnrollment error:", res.error);
    }
  }

  console.log("\nFinal student list:");
  manager.listStudents().forEach((s) => {
    console.log(s.describe(), "->", s.enrolledCourses.map((c) => c.title).join(", ") || "None");
  });

  console.log("\nDemo complete.");
}

main().catch((err) => {
  console.error("Fatal error in main:", err);
  process.exit(1);
});
