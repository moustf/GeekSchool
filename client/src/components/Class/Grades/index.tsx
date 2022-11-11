import { useState, useEffect } from "react";
import { Table, Space, Spin, notification } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import NameCell from "./NameCell";
import Resultcell from "./ResultCell";
import handleStudentsData from "./handleData";
import "./style.css";

interface StudentInterface {
  id: number;
  name: string;
  img: string;
  degrees: object;
}

type Col = { title: string; dataIndex: string; width?: string };

const Grades = () => {
  const [students, setStudents] = useState<StudentInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [col, setCol] = useState<Col[]>([]);
  const { classId } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);

      const {
        data: { data },
      } = await axios(`/api/v1/class/${classId}/grades`);
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { cols, students } = handleStudentsData(data);
      setCol([
        { title: "إسم الطالب", dataIndex: "name", width: "25%" },
        ...cols,
        { title: "العلامة النهائية", dataIndex: "total" },
      ]);
      setStudents(students);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataSource = students.map((s) => ({
    ...s,
    name: <NameCell name={s.name} image={s.img} />,
    total: (
      <Resultcell
        sum={Object.values(s.degrees).reduce(
          (cum, current) => cum + current,
          0
        )}
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
    });
  }

  return (
    <>
      <h1 className="title">الدرجات</h1>
      <div className="table_wrapper">
        <Table
          columns={col}
          dataSource={dataSource}
          size="middle"
          pagination={{ pageSize: 4 }}
        />
      </div>
    </>
  );
};

export default Grades;
