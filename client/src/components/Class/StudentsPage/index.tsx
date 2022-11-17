import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Space, Spin, notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useUserData } from "../../../context/AuthContext";
import NameCell from "./NameCell";
import Action from "./Action";
import "./style.css";

interface StudentInterface {
  id: number;
  name: string;
  mobile: string;
  img: string;
  parentName: string;
}

const columns = [
  {
    title: "إسم الطالب",
    dataIndex: "name",
  },
  {
    title: "رقم الجوال",
    dataIndex: "mobile",
  },
  {
    title: "إسم ولي الأمر",
    dataIndex: "parentName",
  },
  {
    title: "عمليات",
    dataIndex: "action",
  },
];

const StudentsProfile = () => {
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { userData } = useUserData();
  const navigate = useNavigate();
  const { classId } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);

      const {
        data: { data },
      } = await axios(`/api/v1/class/${classId}/students`);

      setStudents(
        data.map((s: any) => ({
          id: s.student_id,
          name: s.name,
          mobile: s.mobile || "لا يوجد",
          img: s.img,
          parentName: s["Student.Parent.User.name"],
        }))
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  const handelDeleteStudent = async (id: number) => {
    await axios.delete(`/api/v1/class/${classId}/student`, {
      data: { studentId: id },
    });
    await fetchData();
  };
  const handelStudentProfile = async (id: number) => {
    if (userData.role === "teacher") navigate(`/student/${id}`);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataSource = students.map((s) => ({
    name: <NameCell name={s.name} image={s.img} />,
    mobile: s.mobile,
    parentName: s.parentName,
    action: userData.role === "teacher" && (
      <Action
        id={s.id}
        handelDeleteStudent={() => handelDeleteStudent(s.id)}
        handelStudentProfile={() => handelStudentProfile(s.id)}
      />
    ),
  }));

  if (loading) {
    return (
      <Space size="large">
        <Spin size="large" />
      </Space>
    );
  }

  if (error) {
    notification.config({
      placement: "bottomLeft",
      bottom: 10,
      duration: 3,
      rtl: true,
    });
    notification.error({
      message: error,
      // description: error,
    });
  }

  return (
    <main className="class-students">
      <h1 className="title">الطلاب</h1>
      <div className="table_wrapper">
        <Table
          columns={
            userData.role === "teacher"
              ? columns
              : columns.slice(0, columns.length - 1)
          }
          dataSource={dataSource}
          size="middle"
          pagination={{ pageSize: 4 }}
        />
      </div>
    </main>
  );
};

export default StudentsProfile;
