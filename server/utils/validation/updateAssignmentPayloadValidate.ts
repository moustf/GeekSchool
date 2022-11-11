import Joi from 'joi';
import { updateAssignmentPayloadInterface } from '../interfaces';

const updateAssignmentPayloadValidate = (body: updateAssignmentPayloadInterface) => {
  const schema = Joi.object({
    isSubmitted: Joi.boolean().required(),
    materialLink: Joi.string().required(),
    studentId: Joi.string().required(),
    assignmentId: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default updateAssignmentPayloadValidate;
