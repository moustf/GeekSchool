interface UserRequestInterface {
  name: string,
  email: string,
  password: string,
  confPassword: string,
  role: string,
  mobile: string,
  location: string,
  children?: Array<string>,
}

export default UserRequestInterface;
