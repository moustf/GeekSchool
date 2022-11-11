import Joi from 'joi';
import { answerInterface } from '..';

const putAnswerQuestionValidate = (body: answerInterface) => {
  const schema = Joi.object({
    classId: Joi.string().required(),
    questionId: Joi.string().required(),
    answer: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default putAnswerQuestionValidate;
