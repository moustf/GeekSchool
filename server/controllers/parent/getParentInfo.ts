import { Response, NextFunction } from 'express';
import { getParentInfoQuery } from '../../queries';
import { CustomError } from '../../utils';

const getParentInfo = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { id } = req.user;

    // ? What I'm doing here is kind of simple validation, since we are just fetching the data,
    // ? not posting, ..etc it, any thing except for numbers will give a NaN, and therefor the 0
    // ? will be passed, and we don't have ids with zeros in the database

    const parentInfo = await getParentInfoQuery(Number(id) || 0);

    if (parentInfo.length === 0) {
      throw new CustomError(404, 'The user you are searching for does not exist!');
    }

    res.json({ msg: 'The data is returned successfully!', data: parentInfo });
  } catch (error) {
    next(error);
  }
};

export default getParentInfo;
