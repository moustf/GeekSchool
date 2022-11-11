import { Op } from 'sequelize';
import { Question } from '../../models';
import { answerInterface } from '../../utils';

const putAnswerQuestionQuery = ({
  questionId,
  classId,
  answer,
}: answerInterface) => Question.update({ answer }, {
  where: {
    [Op.and]: {
      id: questionId,
      class_id: classId,
    },
  },
  returning: ['answer'],
});

export default putAnswerQuestionQuery;
