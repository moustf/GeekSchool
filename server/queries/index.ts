import {
  addNewFeedbackQuery,
  classStats,
  getAnnouncementQuery,
  recommendedQueries,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  getClassQuestionsQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getStudentTasksQuery,
  getClassGradesQuery,
  postTestQuery,
  getClassFeedbackQuery,
  deleteStudentFromClassQuery,
  deleteAssignmentQuery,
  postRecommendationQuery,
  getTestsQuery,
} from './class';

import { createUser, findUserByEmail } from './userQueries';

import { putStudentHealthQuery, createHealthForStudents } from './students';

import { getTeacherStudentsQuery, teacherInfoQuery } from './teacher';
import {
  getStudentClassesQuery,
  getStudentTestsQuery,
  studentGradesQuery,
  getStudentInfoQuery,
} from './student';

import getParentInfoQuery from './parent';
import loginQuery from './loginQuery';
import createParent from './parentQueries';
import createStudent from './studentQueries';
import createTeacher from './teacherQueries';
import {
  getParentStudentQuery,
  getTeacherClassesQuery,
  getReportsQuery,
  getStudentHealthsQuery,
} from './profile';

import { studentParentRelationQuery, getUserIdFromTableQuery, getIfUserStudentIsCreated } from './Auth';
import getParentTeachersQuery from './getParentTeachers';

import getTeacherScheduleQuery from './getTeacherScheduleQuery';

export {
  createUser,
  createParent,
  createStudent,
  createTeacher,
  findUserByEmail,
  addNewFeedbackQuery,
  classStats,
  getAnnouncementQuery,
  getClassFeedbackQuery,
  studentAssignmentQuery,
  teacherAssignmentQuery,
  recommendedQueries,
  loginQuery,
  deleteStudentFromClassQuery,
  deleteAssignmentQuery,
  addAnnouncementQuery,
  putAnswerQuestionQuery,
  getClassStudentsQuery,
  getClassQuestionsQuery,
  postTestQuery,
  postRecommendationQuery,
  getStudentTasksQuery,
  getTestsQuery,
  getClassGradesQuery,
  studentGradesQuery,
  getParentTeachersQuery,
  getTeacherScheduleQuery,
  putStudentHealthQuery,
  getTeacherStudentsQuery,
  getStudentClassesQuery,
  getParentStudentQuery,
  getTeacherClassesQuery,
  studentParentRelationQuery,
  getReportsQuery,
  getParentInfoQuery,
  getStudentTestsQuery,
  getStudentHealthsQuery,
  teacherInfoQuery,
  getStudentInfoQuery,
  getUserIdFromTableQuery,
  getIfUserStudentIsCreated,
  createHealthForStudents,
};
