import { Response } from 'express';
import { CustomRequest } from '../../utils';

const userData = (req: CustomRequest, res:Response) => {
  res.json(req.user);
};

export default userData;
