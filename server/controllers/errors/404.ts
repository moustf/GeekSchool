import { Request, Response } from 'express';

const notFound = (req: Request, res: Response) => {
  console.log('404');
  res.status(404).json({ msg: 'Route is not found!' });
};

export default notFound;
