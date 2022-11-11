import { Question } from '../../models';
import { postQuestionInterface } from '../../utils';

const postQuestionQuery = ({ classId, question }: postQuestionInterface) => Question.create({
  class_id: classId,
  question,

});

export default postQuestionQuery;
