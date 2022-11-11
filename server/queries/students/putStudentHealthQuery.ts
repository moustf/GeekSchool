import { Health } from '../../models';

const putStudentHealthQuery = ({ studentId, body }: any) => Health.update(body, {
  where: { student_id: studentId },
  returning: [],
});

export default putStudentHealthQuery;
