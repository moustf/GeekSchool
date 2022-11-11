import React from "react";
import { Input } from "antd";
import { userDataParentInterface } from "../../interfaces";

const StudentSignUp: React.ElementType = ({
  inputValue,
}: userDataParentInterface) => (
  <>
    <Input placeholder="الاسم رباعي" name="name" onChange={inputValue} />
    <Input placeholder="البريد الإلكتروني" name="email" onChange={inputValue} />
    <Input.Password
      placeholder="كلمة المرور"
      name="password"
      onChange={inputValue}
    />
    <Input.Password
      placeholder="تأكيد كلمة المرور"
      name="confPassword"
      onChange={inputValue}
    />
  </>
);
export default StudentSignUp;
