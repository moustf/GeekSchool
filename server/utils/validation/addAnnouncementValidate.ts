import Joi from 'joi';
import { announcementInterface } from '..';

const addAnnouncementValidate = (body: announcementInterface) => {
  const schema = Joi.object({
    classId: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validateAsync(body);
};

export default addAnnouncementValidate;
