import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dropdown, Space, Button, Menu, MenuProps, Input } from "antd";
import { PlusOutlined, FileTextOutlined } from "@ant-design/icons";
import axios from "axios";
import { useUserData } from "../../../context/AuthContext";
import AddTest from "../../ClassTests/AddTest/AddTest";
import AssignmentModal from "../../AssignmentModal";
import { StudentAssignmentCard, TeacherAssignmentCard } from "../cards";
import "./Assignments.css";

const { Search } = Input;

const Assignments: React.FC = () => {
  const [assignments, setAssignments] = useState<Array<object>>([]);
  const [addTest, setAddTest] = useState<boolean>(false);

  const { classId } = useParams();
  const role = useUserData().userData?.role;
  const source = axios.CancelToken.source();

  // ? The search function.
  const onSearch = (value: string) =>
    setAssignments((prevValue: any) =>
      prevValue.filter((object: any) => object.title.includes(value))
    );

  // ? Button events
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      setAddTest(true);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "إضافة تكليف",
          key: "1",
          icon: <AssignmentModal />,
        },
        {
          label: "إضافة اختبار",
          key: "2",
          icon: <FileTextOutlined />,
        },
      ]}
    />
  );

  useEffect(() => {
    const fetchAssignmentsData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/assignments`);

      if (data.data.data.count) {
        setAssignments(data.data.data.rows);
      } else {
        setAssignments(data.data.data);
      }
    };

    fetchAssignmentsData();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {addTest && <AddTest />}
      <main className="class-assignment">
        <h1 className="assignment-title">التكليفات</h1>
        <section className="assignment-add-search">
          <Search
            placeholder="ابحث عن تكليف"
            className="search"
            onSearch={onSearch}
            enterButton
          />
          <Dropdown overlay={menu} className="dropdown">
            <Button className="dropdown-button">
              <Space>
                <PlusOutlined className="plus-icon" />
                إضافة
              </Space>
            </Button>
          </Dropdown>
        </section>
        {role === "student" && (
          <section className="assignments-box">
            {assignments.map((assignment: any) => (
              <StudentAssignmentCard
                title={assignment.title}
                createdAt={assignment.createdAt}
                description={assignment.description}
              />
            ))}
          </section>
        )}
        {role === "teacher" && (
          <section className="assignment-box">
            {assignments.map((assignment: any) => (
              <TeacherAssignmentCard
                id={assignment.id}
                title={assignment.title}
                createdAt={assignment.createdAt}
                description={assignment.description}
              />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

export default Assignments;
