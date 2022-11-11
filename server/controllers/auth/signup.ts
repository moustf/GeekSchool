import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcryptjs';

import {
  createUser, createTeacher, findUserByEmail, createParent, createStudent,
} from '../../queries';

import {
  CustomError,
  userValidation,
  signToken,
  UserRequestInterface,
  UserTableInterface,
} from '../../utils';

const addChild = async (child: any, parentId: number) => {
  const studentUser = await findUserByEmail(child);
  const studentId = studentUser?.getDataValue('id');

  await createStudent(studentId, parentId);
};

const createParentAccount = async (user: UserTableInterface, children?: Array<string>) => {
  const parentUser = await createUser(user);
  const parentUserId = parentUser.getDataValue('id');
  const parent = await createParent(parentUserId);
  const parentId = parent.getDataValue('id');

  // [email1, email2]
  // check if emails in user
  // create students
  // create one parent
  children?.forEach((child) => {
    addChild(child, parentId);
  });
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      name, email, password, confPassword, role, location, mobile, children,
    }: UserRequestInterface = req.body;

    await userValidation({
      name, email, mobile, password, confPassword, role, location,
    });

    const doesEmailExist = await findUserByEmail(email);
    if (doesEmailExist) throw new CustomError(422, 'The email does already exist!');

    const hashedPassword = await hash(password, 12);
    let user: {
      getDataValue: Function
    } = {
      getDataValue: () => {},
    };

    if (role === 'parent') {
      await createParentAccount({
        name, email, password: hashedPassword, mobile, location, role,
      }, children);
    } else if (role === 'teacher') {
      user = await createUser({
        name, email, mobile, password: hashedPassword, role, location,
      });
      await createTeacher(user.getDataValue('id'));
    } else {
      user = await createUser({
        name, email, mobile, password: hashedPassword, role, location,
      });
    }

    const token = await signToken({ id: user.getDataValue('id'), name, role });
    res.cookie('token', token).status(201).json(
      {
        data: {
          id: user.getDataValue('id'),
          role,
          name,
        },
        msg: 'Account is created successfully!',
      },
    );
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new CustomError(400, 'Wrong data is inserted!'));
    } else next(error);
  }
};

export default signup;
