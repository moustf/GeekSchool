import { Health } from '../../models';

const putStudentHealthQuery = ({ studentId, body }: any) => Health.update(body, {
  where: { student_id: studentId },
  returning: true,
});

export default putStudentHealthQuery;
