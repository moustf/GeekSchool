import Joi from 'joi';
import { recommendationInterface } from '../interfaces';

const recommendationValidation = (body : recommendationInterface) => {
  const schema = Joi.object({
    classId: Joi.number().required(),
    description: Joi.string().required(),
    materialLink: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default recommendationValidation;
