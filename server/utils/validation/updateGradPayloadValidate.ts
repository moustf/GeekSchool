import Joi from 'joi';
import { updateGradPayloadInterface } from '../interfaces';

const updateGradPayloadValidate = (body: updateGradPayloadInterface) => {
  const schema = Joi.object({
    grade: Joi.string().required(),
    studentId: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default updateGradPayloadValidate;
