import { Router } from 'express';
import {
  putStudentHealth,
  getStudentClasses,
  getStudentTests,
  getStudentGrade,
  getStudentInfo,
  getIfStudentUserExists,
} from '../controllers';
import {
  userAuth,
  studentAuth,
  parentAuth,
  studentAndParent,
  studentAndParentAndTeacher,
  studentInfoMiddleware,
} from '../middlewares';

const studentRouter = Router();

studentRouter.put('/:studentId/health', userAuth, parentAuth, putStudentHealth);
studentRouter.get('/:studentId/classes', userAuth, studentAuth, getStudentClasses);
studentRouter.get('/:studentId/tests', userAuth, studentAndParent, getStudentTests);
studentRouter.get('/:studentId/grades', userAuth, studentAndParentAndTeacher, getStudentGrade);
studentRouter.get('/:studentId/info', userAuth, studentInfoMiddleware, getStudentInfo);
studentRouter.post('/validate', getIfStudentUserExists);

export default studentRouter;
