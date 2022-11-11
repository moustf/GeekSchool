import { Dispatch, SetStateAction } from "react";

/* eslint-disable camelcase */
interface UserInterface {
  id: number;
  name: string;
  role: string;
}

interface UserDataInterface {
  userData: UserInterface | null;
  setUserData: Function;
  login: Function;
  signup: Function;
  logout: Function;
  getUserData: Function;
  setLoading: Function;
  loading: boolean;
}

interface emailInterface {
  email: string;
  index: number;
  // eslint-disable-next-line no-unused-vars
  deleteChildEmail: (index: number) => {};
}

interface userDataParentInterface {
  inputValue: () => {};
  /* eslint-disable no-unused-vars */
  addEmailChildren: (emails: string[]) => {};
  setIsOk: Dispatch<SetStateAction<boolean>>;
}

interface userDataInterface {
  inputValue: () => {};
}

interface signUpDataInterface {
  name: string | null;
  email: string | null;
  mobile: string | null;
  password: string | null;
  confPassword: string | null;
  location: string | null;
  role: string | null;
  children: string[] | [];
}

interface userDetailsInterface {
  name: string | null;
  location: string | null;
  mobile: string | null;
  email: string | null;
  image: string | null;
  role: string | null;
}

interface reportsInterface {
  id: number;
  description: string;
  class_id: number;
  student_id: number;
}

export {
  UserInterface,
  UserDataInterface,
  emailInterface,
  userDataParentInterface,
  userDataInterface,
  signUpDataInterface,
  userDetailsInterface,
  reportsInterface,
};
