import Joi from 'joi';
import { postQuestionInterface } from '..';

const postQuestionValidate = (body: postQuestionInterface) => {
  const schema = Joi.object({
    classId: Joi.string().required(),
    question: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default postQuestionValidate;
