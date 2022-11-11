import { Request } from 'express';

interface CustomRequest extends Request {
  user: {
    id:number,
    name: string,
    role: string,
};
}

export default CustomRequest;
