import { Class, Schedule } from '../models';

const getTeacherScheduleQuery = (teacherId: string | number) => Class.findAll({
  where: { teacher_id: teacherId },
  attributes: { exclude: ['createdAt', 'updatedAt', 'teacher_id', 'id'] },
  include: [{
    model: Schedule,
    attributes: { exclude: ['createdAt', 'updatedAt', 'class_id'] },
  }],
});

export default getTeacherScheduleQuery;
