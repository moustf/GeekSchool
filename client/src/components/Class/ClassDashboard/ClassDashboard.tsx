import {
  UserOutlined,
  ReconciliationOutlined,
  QuestionCircleOutlined,
  DeliveredProcedureOutlined,
  FileTextOutlined,
  DashboardOutlined,
  MenuOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import React, { ReactElement, useState } from "react";
import {
  Outlet,
  useNavigate,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import AsideLink from "../../AsideLink";
import Logo from "../../../assets/new-logo.png";
import { useUserData } from "../../../context/AuthContext/index";
import "./style.css";

const ClassDashboard: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<string>("close");
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("active");
  const { logout, userData } = useUserData();
  const { classId } = useParams();

  const icons = [
    <DashboardOutlined />,
    <FundProjectionScreenOutlined />,
    <NotificationOutlined />,
    <UserOutlined />,
    <ReconciliationOutlined />,
    <QuestionCircleOutlined />,
    <DeliveredProcedureOutlined />,
    <FileTextOutlined />,
  ];

  const labels = [
    "الإحصائيات",
    "الدرجات",
    "الاعلانات",
    "الطلاب",
    "المهمات",
    "الإسئلة",
    "التقييم",
    "التوصيات",
  ];

  const paths = [
    `/class/${classId}/stats`,
    `/class/${classId}/grades`,
    `/class/${classId}/announcements`,
    `/class/${classId}/students`,
    `/class/${classId}/assignments`,
    `/class/${classId}/questions`,
    `/class/${classId}/feedback`,
    `/class/${classId}/recommended`,
  ];

  let filteredIcons: ReactElement[];
  let filteredLabels: string[];
  let filteredPaths: string[];

  if (userData.role === "teacher") {
    filteredIcons = [...icons];
    filteredLabels = [...labels];
    filteredPaths = [...paths];
  } else {
    filteredIcons = icons.slice(2);
    filteredLabels = labels.slice(2);
    filteredPaths = paths.slice(2);
  }

  const openAside = () => {
    if (open === "close") setOpen("open");
    else setOpen("close");
  };

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  const handleLogout = async () => {
    try {
      const logoutData = await logout();

      message.success(logoutData.data.msg);
      navigate("/");
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <main>
      <header>
        <div>
          <MenuOutlined onClick={openAside} />
          <Link to="/">
            <img src={Logo} alt="geek school logo" />
          </Link>
          <div className="logout-cont">
            <LogoutOutlined onClick={handleLogout} /> ➡️ Logout
          </div>
        </div>
        <div>
          <img
            src="https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
            alt="person"
          />
        </div>
      </header>
      <main id="main-layout">
        <aside>
          {filteredPaths.map((path, i) => (
            <AsideLink
              icon={filteredIcons[i]}
              text={open === "open" ? filteredLabels[i] : ""}
              path={path}
              handleClicked={handleClicked}
              activeColor={activeColor}
              newPath={newPath}
              role={userData.role}
              key={Math.random() * 532}
            />
          ))}
        </aside>
        <main className="outlet-layout">
          <Outlet />
        </main>
      </main>
    </main>
  );
};

export default ClassDashboard;
