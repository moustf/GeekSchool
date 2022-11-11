import React from "react";
import { Link } from "react-router-dom";
import { Button, Image, Typography } from "antd";
import Logo from "../../../assets/new-logo.png";
import BcgImage from "../../../assets/landing-bcg.png";
import LandingImage from "../../../assets/landing-image.png";
import { useUserData } from "../../../context/AuthContext";
import "./LandingHeader.css";

const { Title, Text } = Typography;

const LandingHeader: React.FC = () => {
  const userId = useUserData().userData?.id;
  const userRole = useUserData().userData?.role;

  return (
    <main className="landing-section">
      <header className="landing-header">
        {!userId && (
          <section className="buttons">
            <Link to="/login">
              <Button type="primary">تسجيل دخول</Button>
            </Link>
            <Link to="/signup">
              <Button type="primary">إنشاء حساب</Button>
            </Link>
          </section>
        )}
        {userRole && (
          <Link
            to={
              userRole === "parent"
                ? "/parent"
                : userRole === "student"
                ? `/student/${userId}`
                : "/teacher"
            }
            className="user-profile"
          >
            <Button type="primary">حسابي</Button>
          </Link>
        )}

        <section className="navigation">
          <a className="nav-link" href="#join">
            انضم إلينا
          </a>
          <a className="nav-link" href="#statistics">
            احصائيات
          </a>
          <a className="nav-link" href="#timeline-section">
            الجدول الزمني
          </a>
          <a className="nav-link" href="#opinions">
            آراء
          </a>
        </section>

        <Link to="/" className="logo-image">
          <Image preview={false} src={Logo} />
        </Link>
      </header>

      <section
        className="join-us-section"
        id="join"
        style={{ backgroundImage: `url(${BcgImage})` }}
      >
        <Image preview={false} className="landing-image" src={LandingImage} />
        <section className="join-us-texts">
          <Title level={2} className="text-title">
            انضم لتكون معنا في الرؤية الجديدة لنظام التعليم..
          </Title>
          <Text type="secondary" className="text-para">
            مكان واحد يجمع المعلم و الطالب و ولي الأمر
          </Text>
        </section>
      </section>
    </main>
  );
};

export default LandingHeader;
