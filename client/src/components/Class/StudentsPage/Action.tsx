import React from "react";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";
import "./style.css";

type Props = {
  id: string;
  handelDeleteStudent: () => {};
  handelStudentProfile: () => {};
};

const Action: React.ElementType = ({
  id,
  handelDeleteStudent,
  handelStudentProfile,
}: Props) => (
  <div className="action">
    <UserOutlined
      id={id}
      className="user_icon icon"
      onClick={() => handelStudentProfile()}
    />
    <DeleteOutlined
      id={id}
      action="delete"
      className="delete_icon icon"
      onClick={() => handelDeleteStudent()}
    />
  </div>
);
export default Action;
