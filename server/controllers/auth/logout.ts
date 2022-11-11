import { Request, Response } from 'express';

const logout = (req:Request, res:Response) => {
  res.clearCookie('token');
  res.json({ msg: 'logged out successfully' });
};
export default logout;
