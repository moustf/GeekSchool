import Joi from 'joi';

const deleteStudentFromClassValidation = (obj: { classId: string, studentId: string }) => {
  const schema = Joi.object({
    classId: Joi.number().required(),
    studentId: Joi.number().required(),
  });

  return schema.validateAsync(obj);
};

export default deleteStudentFromClassValidation;
