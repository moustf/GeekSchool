import React, { useState, FC } from "react";
import { Form, Radio, Button, message } from "antd";
import "antd/dist/antd.min.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { StudentSignUp, ParentSignUp, TeacherSignUp } from "../../components";
import { signUpDataInterface } from "../../interfaces";
import { userSchema, parentTeacherUserSchema } from "../../validations";
import { useUserData } from "../../context/AuthContext/index";

const init = {
  name: null,
  email: null,
  mobile: null,
  password: null,
  confPassword: null,
  location: null,
  role: null,
  children: [],
};

const SignUpPage: FC = () => {
  const { signup, userData } = useUserData();

  const [role, setRole] = useState<string>("teacher");
  const [signUpData, setSignUpData] = useState<signUpDataInterface>(init);
  const [isOkToSend, setIsOkToSend] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleRoleValue: any = (e: any) => {
    setRole(e.target.value);
    const userRole = e.target.value;
    setSignUpData(() => ({ ...signUpData, role: userRole }));
  };

  const addData: any = async (data: signUpDataInterface) => {
    try {
      const { name, email, password, confPassword, mobile, location } = data;
      await userSchema.validate({ name, email, password, confPassword });
      if (data.role !== "student")
        await parentTeacherUserSchema.validate({ mobile, location });

      const { error } = await signup(data);

      if (!error) {
        const { role: roleCheck } = userData;
        console.log(userData);

        if (roleCheck === "parent") navigate("/parent");
        else if (roleCheck === "teacher") navigate("/teacher");
        else if (roleCheck === "student")
          message.success("The user is crated successfully!");
      } else {
        message.error(error.response?.data?.msg);
      }
    } catch (err: any) {
      if (err.name === "ValidationError") message.error(err.message);
      message.error(err.response.data.msg);
    }
  };

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignUpData({ ...signUpData, role, [name]: value });
  };

  const addEmailChildren = (emailChildren: string[]): void => {
    setSignUpData({ ...signUpData, role, children: emailChildren });
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
      <section id="signUp-form">
        <div className="welcome-massage">
          <h1>إنشاء حساب</h1>
          <p>موقع شامل وكامل من خلاله يمكنك إدارة كل شي يخص الطالب!</p>
        </div>
        <div className="form">
          <Form.Item label="أنسب وصف لك:" className="xz">
            <Radio.Group defaultValue="teacher">
              <Radio value="teacher" onClick={handleRoleValue}>
                معلم
              </Radio>
              <Radio value="student" onClick={handleRoleValue}>
                طالب
              </Radio>
              <Radio value="parent" onClick={handleRoleValue}>
                ولي أمر
              </Radio>
            </Radio.Group>
          </Form.Item>
          {role === "student" ? (
            <StudentSignUp inputValue={inputValue} />
          ) : role === "teacher" ? (
            <TeacherSignUp inputValue={inputValue} />
          ) : (
            <ParentSignUp
              inputValue={inputValue}
              addEmailChildren={addEmailChildren}
              setIsOk={setIsOkToSend}
            />
          )}
          <Button
            type="primary"
            className="submit-btn"
            disabled={!isOkToSend}
            onClick={() => addData({ ...signUpData, role })}
            style={{
              flexShrink: 0,
              width: "100%",
              padding: "0.5rem 1rem",
              background: "var(--main-color)",
            }}
          >
            تسجيل حساب جديد
          </Button>
          <p>
            لديك حساب مسبقا ؟ <Link to="/login">اضغط هنا</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
