import Joi from 'joi';

const addNewAssignmentValidation = (
  body: { classId: string, title: string, description: string },
) => {
  const schema = Joi.object({
    classId: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default addNewAssignmentValidation;
