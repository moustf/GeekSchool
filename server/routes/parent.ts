import { Router } from 'express';

import { userAuth, parentAuth } from '../middlewares';

import { getParentTeachers } from '../controllers';
import getParentInfo from '../controllers/parent';

const parentRouter = Router();

parentRouter.get('/teachers', userAuth, parentAuth, getParentTeachers);
parentRouter.get('/info', userAuth, parentAuth, getParentInfo);

export default parentRouter;
