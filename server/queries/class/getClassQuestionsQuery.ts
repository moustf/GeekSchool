import { Question } from '../../models';

const getClassQuestionsQuery = (classId: string, page: string) => Question.findAndCountAll(
  {
    raw: true,
    nest: false,
    where: {
      class_id: classId,
    },
    offset: ((+page - 1) * 6),
    limit: 6,
  },
);

export default getClassQuestionsQuery;
