import Joi from 'joi';

const parentValidation = (body: {
  children: Array<string> | undefined,
}) => {
  const schema = Joi.object({
    children: Joi.array().required(),
  });

  return schema.validateAsync(body);
};

export default parentValidation;
