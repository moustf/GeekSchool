import { Report } from '../../models';

const getReportsQuery = (studentId:string) => (Report.findAll({
  raw: true,
  where: {
    student_id: studentId,
  },
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
}));

export default getReportsQuery;
