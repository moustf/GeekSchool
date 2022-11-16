import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Drawer } from "antd";
import { UnorderedListOutlined, DeleteFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { TeacherAssignmentCardProps } from "../../../interfaces";
import "./AssignmentCards.css";

const TeacherAssignmentCard: React.FC<TeacherAssignmentCardProps> = ({
  id,
  title,
  createdAt,
  description,
}) => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [submittedAssignment, setSubmittedAssignment] = useState<Array<object>>(
    []
  );
  const [notSubmittedAssignment, setNotSubmittedAssignment] = useState<
    Array<object>
  >([]);

  const { classId } = useParams(); // ? This will change depending on the class that is clicked on.

  useEffect(() => {
    const fetchSubmitted = async () => {
      const data = await axios.get(
        `/api/v1/class/${classId}/assignment/${id}/students?isSubmitted=true`
      );

      setSubmittedAssignment(data.data.data);
    };

    const fetchNotSubmitted = async () => {
      const data = await axios.get(
        `/api/v1/class/${classId}/assignment/${id}/students?isSubmitted=false`
      );

      setNotSubmittedAssignment(data.data.data);
    };

    fetchSubmitted();
    fetchNotSubmitted();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showFirstDrawer = () => {
    setOpenFirst(true);
  };

  const onFirstClose = () => {
    setOpenFirst(false);
  };

  const showSecondDrawer = () => {
    setOpenSecond(true);
  };

  const onSecondClose = () => {
    setOpenSecond(false);
  };

  return (
    <div>
      <Card className="teacher-assignment-card">
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
            <p style={{ color: "#7C7C7C" }}>نشرت في: {createdAt.split('T')[0]}, الساعة: {createdAt.split('T')[1].slice(0, 8)}</p>
            <DeleteFilled style={{ color: "red", fontSize: '1.3rem' }} />
          </div>
        </div>

        <div className="card-content">
          <div className="left">
            <p className="assignment-content">{description}</p>
          </div>

          <div className="right">
            <div className="turnedOn">
              <Button onClick={showFirstDrawer}>
                <span id={String(id)}>{submittedAssignment.length}</span>Turned
                on
              </Button>
              <Drawer
                title="الطلاب الذين قاموا بتسليم التكليف!"
                placement="left"
                onClose={onFirstClose}
                open={openFirst}
              >
                {submittedAssignment.length !== 0 ? (
                  submittedAssignment.map((assignment: any) => (
                    <div
                      className="student-box"
                      id={assignment.student_id}
                      key={assignment.student_id}
                    >
                      <img alt="student" src={assignment.img} />
                      <h4 className="name">
                        {assignment["Student.User.name"]}
                      </h4>
                    </div>
                  ))
                ) : (
                  <h3>No student to show!</h3>
                )}
              </Drawer>
            </div>
            <div className="missing">
              <Button onClick={showSecondDrawer}>
                <span id={String(id)}>{notSubmittedAssignment.length}</span>
                Missing
              </Button>
              <Drawer
                title="الطلاب الذيم لم يسلموا التكليف!"
                placement="left"
                onClose={onSecondClose}
                open={openSecond}
              >
                {notSubmittedAssignment.length !== 0 ? (
                  notSubmittedAssignment.map((assignment: any) => (
                    <div
                      className="student-box"
                      id={assignment.student_id}
                      key={assignment.student_id}
                    >
                      <h4 className="name">
                        {assignment["Student.User.name"]}
                      </h4>
                      <img alt="student" src={assignment.img} />
                    </div>
                  ))
                ) : (
                  <h3>No student to show!</h3>
                )}
              </Drawer>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeacherAssignmentCard;
