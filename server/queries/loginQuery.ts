import { User } from '../models';

const loginQuery = (email: string) => User.findAndCountAll({ where: { email } });

export default loginQuery;
