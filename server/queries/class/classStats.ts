import {
  AssignmentStudent, Assignment, ClassStudent, Question, sequelize,
} from '../../models';

const submittedOrNot = (classId: string, isSubmitted: boolean) => (
  Assignment.findAll({
    attributes: ['id', 'title', 'class_id'],
    where: {
      class_id: classId,
    },
    include: {
      model: AssignmentStudent,
      attributes: [
        [sequelize.fn('COUNT', sequelize.col('student_id')), 'count'],
      ],
      where: {
        is_submitted: isSubmitted,
      },
    },
    group: ['Assignment.id', 'AssignmentStudents.id'],
  })
);

const getStudentNum = (classId: string) => (
  ClassStudent.findAll({
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('student_id')), 'studentsCount'],
    ],
    where: {
      class_id: classId,
    },
  })
);

const getAssignmentsNum = (classId: string) => (
  Assignment.findAll({
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('id')), 'assignmentsCount'],
    ],
    where: {
      class_id: classId,
    },
  })
);

const getQuestionsNum = (classId: string) => (
  Question.findAll({
    attributes: [
      [sequelize.fn('COUNT', sequelize.col('id')), 'questionsCount'],
    ],
    where: {
      class_id: classId,
    },
  })
);

const classStats = async (classId: string) => {
  const submitted = await submittedOrNot(classId, true);
  const notSubmitted = await submittedOrNot(classId, false);
  const studentsNum = await getStudentNum(classId);
  const assignmentsNum = await getAssignmentsNum(classId);
  const questionsNum = await getQuestionsNum(classId);

  return Promise.all([submitted, notSubmitted, studentsNum, assignmentsNum, questionsNum]);
};

export default classStats;
