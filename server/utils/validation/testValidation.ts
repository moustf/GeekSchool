import Joi from 'joi';
import { testInterface } from '../interfaces';

const testValidation = (body : testInterface) => {
  const schema = Joi.object({
    classId: Joi.number().required(),
    title: Joi.string().required(),
    notes: Joi.string().required(),
    date: Joi.date().required(),
  });

  return schema.validateAsync(body);
};

export default testValidation;
