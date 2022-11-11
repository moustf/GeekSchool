import { Router } from 'express';

import {
  userAuth, parentAuth, teacherAuth, studentRelatedToParent,
} from '../middlewares';
import {
  getParentStudent, getTeachersClasses, getReports, getStudentHealth,
} from '../controllers';

const profilesRouter = Router();
profilesRouter.get('/parent/students', userAuth, parentAuth, getParentStudent);
profilesRouter.get('/teacher/:teacherId/classes', userAuth, teacherAuth, getTeachersClasses);
profilesRouter.get('/student/:studentId/reports', userAuth, studentRelatedToParent, getReports);
profilesRouter.get('/student/:studentId/health', userAuth, getStudentHealth); // ? healthMiddleware

export default profilesRouter;
