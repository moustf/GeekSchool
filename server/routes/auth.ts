import {
  signup, logout, userData, login,
} from '../controllers';
import { userAuth } from '../middlewares';

const authRouter = require('express').Router();

authRouter.post('/auth/signup', signup);
authRouter.post('/auth/logout', logout);
authRouter.get('/auth', userAuth, userData);
authRouter.post('/auth/login', login);

export default authRouter;
