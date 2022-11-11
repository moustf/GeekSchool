import { Teacher } from '../models';

const createTeacher = (userId: number) => Teacher.create({ user_id: userId });

export default createTeacher;
