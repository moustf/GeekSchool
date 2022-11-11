import Joi from 'joi';

import { UserValInterface } from '../interfaces';

const userValidation = (body: UserValInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().allow(null),
    email: Joi.string().email().required(),
    password: Joi.string().required().alphanum().min(5)
      .max(15),
    confPassword: Joi.ref('password'),
    role: Joi.string().required(),
    location: Joi.string().allow(null),
  });

  return schema.validateAsync(body);
};

export default userValidation;
