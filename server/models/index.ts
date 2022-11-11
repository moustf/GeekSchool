import Announcement from './announcement';
import Assignment from './assignment';
import AssignmentStudent from './assignmentStudent';
import Class from './class';
import ClassStudent from './classStudent';
import Feedback from './feedback';
import Health from './health';
import Parent from './parent';
import Question from './question';
import Recommendation from './recommendation';
import Report from './report';
import Schedule from './schedule';
import Student from './student';
import Teacher from './teacher';
import Test from './test';
import TestStudent from './testStudent';
import User from './user';
import sequelize from '../database/connection';

// Relations

// *** Announcement ***
Class.hasMany(Announcement, { foreignKey: 'class_id', sourceKey: 'id' });
Announcement.belongsTo(Class, { foreignKey: 'class_id' });

// *** Assignment ***
Class.hasMany(Assignment, { foreignKey: 'class_id', sourceKey: 'id' });
Assignment.belongsTo(Class, { foreignKey: 'class_id' });

// *** AssignmentStudent ***
Assignment.hasMany(AssignmentStudent, { foreignKey: 'assignment_id', sourceKey: 'id' });
AssignmentStudent.belongsTo(Assignment, { foreignKey: 'assignment_id' });

// *** Class ***
Teacher.hasMany(Class, { foreignKey: 'teacher_id', sourceKey: 'id' });
Class.belongsTo(Teacher, { foreignKey: 'teacher_id' });

Student.hasMany(AssignmentStudent, { foreignKey: 'student_id', sourceKey: 'id' });
AssignmentStudent.belongsTo(Student, { foreignKey: 'student_id' });

// *** ClassStudent ***

Class.hasMany(ClassStudent, { foreignKey: 'class_id', sourceKey: 'id' });
ClassStudent.belongsTo(Class, { foreignKey: 'class_id' });

Student.hasMany(ClassStudent, { foreignKey: 'student_id', sourceKey: 'id' });
ClassStudent.belongsTo(Student, { foreignKey: 'student_id' });

// *** FeedBack ***
Student.hasMany(Feedback, { foreignKey: 'student_id', sourceKey: 'id' });
Feedback.belongsTo(Student, { foreignKey: 'student_id' });

Class.hasMany(Feedback, { foreignKey: 'class_id', sourceKey: 'id' });
Feedback.belongsTo(Class, { foreignKey: 'class_id' });

// *** Health ***
Student.hasOne(Health, { foreignKey: 'student_id', sourceKey: 'id' });
Health.belongsTo(Student, { foreignKey: 'student_id' });

// *** Parent ***
User.hasOne(Parent, { foreignKey: 'user_id', sourceKey: 'id' });
Parent.belongsTo(User, { foreignKey: 'user_id' });

// *** Question ***
Class.hasMany(Question, { foreignKey: 'class_id', sourceKey: 'id' });
Question.belongsTo(Class, { foreignKey: 'class_id' });

// *** Recommendation ***
Class.hasMany(Recommendation, { foreignKey: 'class_id', sourceKey: 'id' });
Recommendation.belongsTo(Class, { foreignKey: 'class_id' });

// *** Report ***
Class.hasMany(Report, { foreignKey: 'class_id', sourceKey: 'id' });
Report.belongsTo(Class, { foreignKey: 'class_id' });

Student.hasMany(Report, { foreignKey: 'student_id', sourceKey: 'id' });
Report.belongsTo(Class, { foreignKey: 'student_id' });

// *** Schedule ***
Class.hasMany(Schedule, { foreignKey: 'class_id', sourceKey: 'id' });
Schedule.belongsTo(Class, { foreignKey: 'class_id' });

// *** Student ***
User.hasOne(Student, { foreignKey: 'user_id', sourceKey: 'id' });
Student.belongsTo(User, { foreignKey: 'user_id' });

Parent.hasMany(Student, { foreignKey: 'parent_id', sourceKey: 'id' });
Student.belongsTo(Parent, { foreignKey: 'parent_id' });

// *** Teacher ***
User.hasOne(Teacher, { foreignKey: 'user_id', sourceKey: 'id' });
Teacher.belongsTo(User, { foreignKey: 'user_id' });

// *** Test ***
Class.hasMany(Test, { foreignKey: 'class_id', sourceKey: 'id' });
Test.belongsTo(Class, { foreignKey: 'class_id' });

// *** TestStudent ***
Test.hasMany(TestStudent, { foreignKey: 'test_id', sourceKey: 'id' });
TestStudent.belongsTo(Test, { foreignKey: 'test_id' });

Student.hasMany(TestStudent, { foreignKey: 'student_id', sourceKey: 'id' });
TestStudent.belongsTo(Student, { foreignKey: 'student_id' });
export {
  Announcement,
  Assignment,
  AssignmentStudent,
  Class,
  ClassStudent,
  Feedback,
  Health,
  Parent,
  Question,
  Recommendation,
  Report,
  Schedule,
  Student,
  Teacher,
  Test,
  TestStudent,
  User,
  sequelize,
};
