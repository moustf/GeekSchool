/* eslint-disable react/jsx-no-useless-fragment */
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { message } from "antd";
import UserHeader from "../../components/profile/UserHeader";
import Reports from "../../components/profile/Report";
import Nav from "../../components/profile/Nav";
import { TeacherSchedule } from "../../components";
import Logo from "../../assets/new-logo.png";
import { useUserData } from "../../context/AuthContext";
import "./style.css";

interface ProfilePageProps {
  name: string;
  location: string;
  mobile: string;
  email: string;
  role: string;
  image: string;
  visitRole: string | undefined;
  setIsGotten: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const ProfilePage: FC<ProfilePageProps> = ({
  name,
  location,
  mobile,
  email,
  role,
  image,
  visitRole,
  children,
  setIsGotten,
}) => {
  const { pathname } = window.location;
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("profile-active");
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { logout, userData } = useUserData();

  const paths = [
    `/student/${studentId}/classes`,
    `/student/${studentId}/tests`,
    `/student/${studentId}/grades`,
    `/student/${studentId}/health`,
  ];
  const labels = ["الصفوف", "الاختبارات", "الدرجات", "الصحة"];

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  const handleLogout = async () => {
    try {
      const logoutData = await logout();

      message.success(logoutData.data.msg);
      setIsGotten(false);
      navigate("/");
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <main id="profile-page">
      <header>
        <div>
          <img src={Logo} alt="geek school logo" />
        </div>
        <div className="logout-cont">
          <LogoutOutlined onClick={handleLogout} /> ➡️ Logout
        </div>
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
            alt="person"
          />
        </div>
      </header>

      {role === "student" && (
        <Reports studentId={studentId} visitRole={visitRole} />
      )}

      <main id="profile-main">
        <UserHeader
          name={name}
          location={location}
          mobile={mobile}
          email={email}
          role={role}
          image={image}
        />
        {role === "student" && (
          <nav id="profile-nav">
            {userData.role === "student"
              ? labels.map((pathName, i) => (
                  <Nav
                    key={pathName}
                    path={paths[i]}
                    name={pathName}
                    activeColor={activeColor}
                    handleClicked={handleClicked}
                    newPath={newPath}
                    testPath={paths[i]}
                  />
                ))
              : userData.role === "parent"
              ? labels
                  .filter((label) => label !== "الصفوف")
                  .map((pathName, i) => (
                    <Nav
                      key={pathName}
                      path={paths.slice(1)[i]}
                      name={pathName}
                      activeColor={activeColor}
                      handleClicked={handleClicked}
                      newPath={newPath}
                      testPath={paths[i]}
                    />
                  ))
              : labels
                  .filter(
                    (label) => label !== "الصفوف" && label !== "الاختبارات"
                  )
                  .map((pathName, i) => (
                    <Nav
                      key={pathName}
                      path={paths.slice(2)[i]}
                      name={pathName}
                      activeColor={activeColor}
                      handleClicked={handleClicked}
                      newPath={newPath}
                      testPath={paths[i]}
                    />
                  ))}
          </nav>
        )}
        {role === "teacher" && <TeacherSchedule />}
        {children ? <>{children}</> : <Outlet />}
      </main>
    </main>
  );
};

export default ProfilePage;
