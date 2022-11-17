import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { loginQuery, getIfUserStudentIsCreated, findUserByEmail } from '../../queries';
import { CustomError, loginValidate, signToken } from '../../utils';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, loginPassword } = req.body;
    await loginValidate({ email, loginPassword });

    const whoIsUser = await findUserByEmail(email);

    if (whoIsUser?.getDataValue('role') === 'student') {
      const doesExist = await getIfUserStudentIsCreated(email);
      if (!doesExist) {
        throw new CustomError(403, 'لا يمكنك الدخول لحسابك إلا بعد إدخال ولي أمرك ايميلك.');
      }
    }

    const loginData: any = await loginQuery(email);
    let id: number = 0;

    switch (loginData[0]?.role) {
      case 'parent':
        id = loginData[1]?.id;
        break;
      case 'teacher':
        id = loginData[1]?.id;
        break;
      case 'student':
        id = loginData[1]?.id;
        break;
      default:
        id = loginData[0]?.id;
        break;
    }

    if (loginData === true) {
      throw new CustomError(400, "email doesn't exist");
    }
    const hashedPassword = await compare(loginPassword, loginData[0]?.password);
    if (!hashedPassword) {
      throw new CustomError(400, 'invalid password');
    }
    const token = await signToken({ id, name: loginData[0]?.name || '', role: loginData[0]?.role || '' });
    res.cookie('token', token, { httpOnly: true }).json({ mag: 'logged in successfully', data: loginData });
  } catch (err) {
    if (err.name === 'ValidationError') next(new CustomError(400, err.details[0]?.message));
    next(err);
  }
};

export default login;
