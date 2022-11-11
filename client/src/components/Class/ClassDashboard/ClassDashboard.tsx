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
} from "@ant-design/icons";
import { message } from "antd";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import AsideLink from "../../AsideLink";
import Logo from "../../../assets/new-logo.png";
import "./style.css";
import { useUserData } from "../../../context/AuthContext/index";

const icons = [
  <DashboardOutlined />,
  <UserOutlined />,
  <ReconciliationOutlined />,
  <QuestionCircleOutlined />,
  <DeliveredProcedureOutlined />,
  <FileTextOutlined />,
  <FundProjectionScreenOutlined />,
];

const labels = [
  "الإحصائيات",
  "الطلاب",
  "المهمات",
  "الإسئلة",
  "التقييم",
  "التوصيات",
  "الدرجات",
];

const ClassDashboard: React.FC = () => {
  const { pathname } = window.location;
  const navigate = useNavigate();
  const [open, setOpen] = useState<string>("close");
  const [newPath, setNewPath] = useState<string | null>(pathname);
  const [activeColor] = useState<string>("active");
  const { logout, userData } = useUserData();
  const { classId } = useParams();

  const paths = [
    `/class/${classId}/stats`,
    `/class/${classId}/students`,
    `/class/${classId}/assignments`,
    `/class/${classId}/questions`,
    `/class/${classId}/feedback`,
    `/class/${classId}/recommended`,
    `/class/${classId}/grades`,
  ];

  const openAside = () => {
    if (open === "close") setOpen("open");
    else setOpen("close");
  };

  const handleClicked = (path: string): void => {
    setNewPath(path);
  };

  const logOut = async () => {
    try {
      const { error } = await logout();
      if (!userData) {
        navigate("/");
      } else {
        message.error(error);
      }
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <main>
      <header>
        <div>
          <MenuOutlined onClick={openAside} />
          <img src={Logo} alt="geek school logo" />
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
          {paths.map((path, i) => (
            <AsideLink
              icon={icons[i]}
              text={open === "open" ? labels[i] : ""}
              path={path}
              handleClicked={handleClicked}
              activeColor={activeColor}
              newPath={newPath}
              key={Math.random() * 2}
            />
          ))}
          <Link to="/">
            <LogoutOutlined onClick={logOut} />
          </Link>
        </aside>
        <main>
          <Outlet />
        </main>
      </main>
    </main>
  );
};

export default ClassDashboard;
