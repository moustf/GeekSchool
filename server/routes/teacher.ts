import { Router } from 'express';

import { getTeacherSchedule, getTeacherStudents, teacherInfo } from '../controllers';
import { userAuth, teacherAuth } from '../middlewares';

const teacherRouter = Router();

teacherRouter.get('/schedule', userAuth, teacherAuth, getTeacherSchedule);
teacherRouter.get('/students', userAuth, teacherAuth, getTeacherStudents);
teacherRouter.get('/info', userAuth, teacherAuth, teacherInfo);

export default teacherRouter;
