import { Router } from 'express';
import authRouter from './auth';
import classRouter from './class';
import studentRouter from './student';
import teacherRouter from './teacher';
import profilesRouter from './profile';
import parentRouter from './parent';

const router = Router();

router.use(authRouter);
router.use('/class', classRouter);
router.use('/teacher', teacherRouter);
router.use('/student', studentRouter);
router.use('/profile', profilesRouter);
router.use('/parent', parentRouter);

export default router;
