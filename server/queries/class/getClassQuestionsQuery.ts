import { Question } from '../../models';

const getClassQuestionsQuery = (classId: string, page: string) => Question.findAndCountAll(
  {
    raw: true,
    nest: false,
    where: {
      class_id: classId,
    },
    offset: ((+page - 1) * 2),
    limit: 2,
  },
);

export default getClassQuestionsQuery;
