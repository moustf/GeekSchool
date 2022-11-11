import {
  Announcement, Assignment, AssignmentStudent, Class, ClassStudent, Feedback, Health, Parent,
  Question, Recommendation, Report, Schedule, sequelize, Student, Teacher, Test, TestStudent, User,
} from '../models';
import { nodeEnv } from '../config/environment';

import {
  announcements, assignments, assignmentsStudent, classes, classStudent, feedbacks, health,
  parents, questions, recommendations, reports, schedules, students, teachers, tests,
  testStudent, users,
} from './seed/';

const buildSeed = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users, { validate: true });
  await Teacher.bulkCreate(teachers, { validate: true });
  await Parent.bulkCreate(parents, { validate: true });
  await Student.bulkCreate(students, { validate: true });
  await Health.bulkCreate(health, { validate: true });
  await Class.bulkCreate(classes, { validate: true });
  await Test.bulkCreate(tests, { validate: true });
  await Feedback.bulkCreate(feedbacks, { validate: true });
  await Announcement.bulkCreate(announcements, { validate: true });
  await Assignment.bulkCreate(assignments, { validate: true });
  await AssignmentStudent.bulkCreate(assignmentsStudent, { validate: true });
  await ClassStudent.bulkCreate(classStudent, { validate: true });
  await Question.bulkCreate(questions, { validate: true });
  await Recommendation.bulkCreate(recommendations, { validate: true });
  await Report.bulkCreate(reports, { validate: true });
  await Schedule.bulkCreate(schedules, { validate: true });
  await TestStudent.bulkCreate(testStudent, { validate: true });
};

if (nodeEnv !== 'test') buildSeed();

export default buildSeed;
