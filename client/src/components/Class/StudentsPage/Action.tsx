import React from "react";
import "./style.css";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";

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
