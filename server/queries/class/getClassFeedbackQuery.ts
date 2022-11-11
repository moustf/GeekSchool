import { Feedback } from '../../models';

const getClassFeedbackQuery = (classId: string) => Feedback.findAndCountAll({
  where: {
    class_id: classId,
  },
});

export default getClassFeedbackQuery;
