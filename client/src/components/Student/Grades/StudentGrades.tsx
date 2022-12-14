import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import GradeCollapse from "./GradesCollapse/GradesCollapse";

import GradesTable from "./GradesTable/GradesTable";
import "./StudentGrades.css";

const { Text } = Typography;

const StudentGrades: React.FC = () => {
  const [data, setData] = useState<Array<object>>([]);
  const controller = new AbortController();
  const { studentId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get(
        `/api/v1/student/${studentId}/grades`
      );

      setData(fetchedData.data.data);
    };

    fetchData();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="grades">
      {data.length === 0 && (
        <Text
          style={{
            textAlign: "center",
            fontSize: " 1.3rem",
            fontWeight: "500",
          }}
          type="secondary"
        >
          لا يوجد درجات لهذا الطالب بعد!
        </Text>
      )}
      {data.map((oneClass: any) => (
        <GradeCollapse
          key={oneClass.Class.id * 0.1}
          title={oneClass.Class.name}
          id={oneClass.Class.id}
        >
          <br />
          <GradesTable
            assignments={oneClass.Class.Assignments}
            tests={oneClass.Class.Tests}
          />
        </GradeCollapse>
      ))}
    </section>
  );
};

export default StudentGrades;
