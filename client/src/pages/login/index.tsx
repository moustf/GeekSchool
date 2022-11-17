import React, { useState, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import "../signUp/style.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/AuthContext/index";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { login, userData } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      const { role, id } = userData;
      if (role === "parent") navigate("/parent");
      else if (role === "teacher") navigate(`/teacher/${id}`);
      else if (role === "student") navigate(`/student/${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const onFinish = async (fieldValues: any) => {
    try {
      const loggedIn = await login(
        fieldValues.email,
        fieldValues.loginPassword
      );

      if (loggedIn) setLoading(false);

      if (loggedIn?.error && loggedIn.error.response.status === 403) {
        message.error(loggedIn.error.response.data.msg);
        setLoading(true);
      }

      if (!loggedIn) {
        message.error("Log in failed!");
      }
    } catch (err: any) {
      if (err.response?.data?.msg) {
        message.error(err.response?.data?.msg);
      } else {
        message.error(err.message);
      }
    }
  };

  return (
    <main id="signUp-main">
      <section id="signUp-intro">
        <div className="bg" />
        <img src="https://i.ibb.co/GTQ9rtg/image-26.png" alt="People" />
        <div className="info">
          <h1>المكان الأنسب للمتابعة والتعلم على الانترنت!</h1>
          <p>
            من خلال منصتنا يمكنك متابعة الطالب سواء كنت ولي أمر أم معلم، من خلال
            وضع جميع المعلومات تحت هين الجميع هنا.
          </p>
        </div>
      </section>
      <section id="signUp-form" className="login-form">
        <div>
          <div className="welcome-massage">
            <h1>عوداً حميداً</h1>
            <p>موقع شامل وكامل من خلاله يمكنك إدارة كل شي يخص الطالب!</p>
          </div>

          <Form
            className="form"
            name="basic"
            wrapperCol={{ span: 60 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              style={{ width: "100%" }}
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "الرجاء إدخال البريد الالكتروني",
                },
              ]}
            >
              <Input placeholder="البريد الالكتروني" width="100%" />
            </Form.Item>

            <Form.Item
              style={{ width: "100%" }}
              name="loginPassword"
              rules={[
                {
                  min: 5,
                  max: 15,
                  required: true,
                  message: "الرجاء إدخال كلمة المرور",
                },
              ]}
            >
              <Input.Password placeholder="كلمة المرور" width="100%" />
            </Form.Item>

            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  height: "100%",
                  width: "100%",
                  border: "none",
                }}
              >
                تسجيل دخول
              </Button>
            </Form.Item>

            <p style={{ width: "100%", textAlign: "left" }}>
              لم تنشئ أي حساب مسبقًا؟ <Link to="/signup">أنشئ حساب</Link>
            </p>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
