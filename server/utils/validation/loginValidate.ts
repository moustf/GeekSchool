import Joi from 'joi';
import { loginValidateInterface } from '../interfaces';

const loginValidate = (body: loginValidateInterface) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    loginPassword: Joi.string().required().alphanum(),
  });

  return schema.validateAsync(body);
};

export default loginValidate;
