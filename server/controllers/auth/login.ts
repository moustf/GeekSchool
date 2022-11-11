import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { loginQuery } from '../../queries';
import { CustomError, loginValidate, signToken } from '../../utils';

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, loginPassword } = req.body;
    await loginValidate({ email, loginPassword });
    const { count, rows }: any = await loginQuery(email);
    if (!count) {
      throw new CustomError(400, "email doesn't exist");
    }
    const hashedPassword = await compare(loginPassword, rows[0].getDataValue('password'));
    if (!hashedPassword) {
      throw new CustomError(400, 'invalid password');
    }
    const token = await signToken({ id: rows[0].getDataValue('id'), name: rows[0].getDataValue('name'), role: rows[0].getDataValue('role') });
    res.cookie('token', token, { httpOnly: true }).json({ mag: 'logged in successfully', data: rows[0] });
  } catch (err) {
    if (err.name === 'ValidationError') next(new CustomError(400, err.details[0].message));
    next(err);
  }
};

export default login;
