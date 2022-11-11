import { FC } from "react";
import { Card, Button } from "antd";
import "./AssignmentCards.css";
import { UnorderedListOutlined } from "@ant-design/icons";
import { StudentAssignmentCardProps } from "../../../interfaces";

const StudentAssignmentCard: FC<StudentAssignmentCardProps> = ({
  title,
  createdAt,
  description,
}: StudentAssignmentCardProps) => (
  <div>
    <Card style={{ margin: "5px" }}>
      <div className="card-title">
        <div className="title-content">
          <div className="icon-title">
            <UnorderedListOutlined />{" "}
          </div>
          <div>
            <h1>{title}</h1>
          </div>
        </div>

        <div className="title-side">
          <p style={{ color: "#7C7C7C" }}>Posted: {createdAt}</p>
        </div>
      </div>

      <div className="card-content">
        <div className="left">
          <p className="assignment-content">{description}</p>
        </div>

        <div
          className="right"
          style={{ justifyContent: "right", paddingRight: "45px" }}
        >
          <Button style={{ borderRadius: "5px" }} type="primary">
            Turned on
          </Button>
        </div>
      </div>
    </Card>
  </div>
);

export default StudentAssignmentCard;
