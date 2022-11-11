import { Parent } from '../models';

const createParent = (userId: number) => Parent.create({ user_id: userId });

export default createParent;
