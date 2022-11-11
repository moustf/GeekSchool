import Joi from 'joi';

import { addNewFeedbackInterface } from '../interfaces';

const addNewFeedbackValidation = (
  obj: addNewFeedbackInterface,
) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    classId: Joi.number().required(),
    feedback: Joi.string().required(),
  });

  return schema.validateAsync(obj);
};

export default addNewFeedbackValidation;
