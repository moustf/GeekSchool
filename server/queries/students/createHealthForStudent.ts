import { Health } from '../../models';

const createHealthForStudents = async (studentId: number) => (
  Health.create({
    student_id: studentId,
  })
);

export default createHealthForStudents;
