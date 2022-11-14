import {
  useState,
  createContext,
  useContext,
  ReactChild,
  ReactElement,
} from "react";
import axios from "axios";
import { signUpDataInterface, UserDataInterface } from "../../interfaces";

// const init: UserDataInterface = {
//   userData: {
//     id: 0,
//     role: '',
//     name: '',
//   },
//   setUserData: () => {},
//   login: () => {},
//   signup: () => {},
//   logout: () => {},
//   getUserData: () => {},
//   loading: false,
// };

export const UserAuthContext = createContext<UserDataInterface | null>(null);

export const useUserData = (): any => useContext(UserAuthContext);

export const UserAuthProvider = (): UserDataInterface => {
  const [userData, setUserData] = useState<any>({
    id: 0,
    role: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (
    email: string,
    loginPassword: string,
    callback: any = null
  ): Promise<any> => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/auth/login", {
        email,
        loginPassword,
      });

      setUserData({
        id: res.data.data.id,
        role: res.data.data.role,
        name: res.data.data.name,
      });
      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      setLoading(false);
      return { error: err };
    }

    return true;
  };

  const signup = async (
    data: signUpDataInterface,
    callback: any = null
  ): Promise<any> => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/auth/signup", data);

      setUserData({
        ...res.data.data,
      });

      setLoading(false);
      if (callback) callback(null);
    } catch (err) {
      setLoading(false);
      return { error: err };
    }

    return true;
  };

  const logout = async (callback: any = null): Promise<any> => {
    try {
      setLoading(true);
      const logoutData = await axios.post("/api/v1/auth/logout");
      setUserData({
        id: 0,
        role: "",
        name: "",
      });
      setLoading(false);
      if (callback) callback(null);
      return logoutData;
    } catch (err) {
      setLoading(false);
      return { error: err };
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth");
      setLoading(false);
      setUserData({
        id: data.id,
        role: data.role,
        name: data.name,
      });
    } catch (err) {
      setLoading(false);
    }
    return true;
  };

  return {
    login,
    signup,
    setUserData,
    userData,
    loading,
    setLoading,
    logout,
    getUserData,
  };
};

interface ProvideAuthProps {
  children: ReactChild;
}

export const ProvideAuth = ({ children }: ProvideAuthProps): ReactElement => {
  const auth = UserAuthProvider();
  return (
    <UserAuthContext.Provider value={auth}>{children}</UserAuthContext.Provider>
  );
};
