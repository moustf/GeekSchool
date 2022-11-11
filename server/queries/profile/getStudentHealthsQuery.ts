import { Health } from '../../models';

const getStudentHealthsQuery = (studentId: string) => (
  Health.findAll({
    raw: true,
    where: {
      id: studentId,
    },
  })
);

export default getStudentHealthsQuery;
