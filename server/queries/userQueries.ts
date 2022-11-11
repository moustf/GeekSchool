import { User } from '../models';
import { UserTableInterface } from '../utils';

const createUser = (obj: UserTableInterface) => User.create({ ...obj });

const findUserByEmail = (email: string) => User.findOne({ where: { email } });

export {
  createUser,
  findUserByEmail,
};
