import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import { emailInterface } from "../../interfaces";

const AddChild: React.ElementType = ({
  email,
  index,
  deleteChildEmail,
}: emailInterface) => (
  <div className="child-email">
    <p>{email}</p>
    <CloseOutlined onClick={() => deleteChildEmail(index)} />
  </div>
);

export default AddChild;
