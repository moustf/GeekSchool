import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message, Typography } from "antd";
import axios from "axios";

import ClassCard from "./ClassCard/ClassCard";
import { useUserData } from "../../../context/AuthContext";
import "./ClassSection.css";

const { Text } = Typography;

const ClassSection: FC = () => {
  const [classes, setClasses] = useState<Array<object>>([]);
  const { studentId } = useParams();
  const { userData } = useUserData();
  let id: number;

  if (userData.role === "student") {
    id = userData.id;
  } else {
    id = Number(studentId);
  }

  const source = axios.CancelToken.source();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await axios.get(`/api/v1/student/${id}/classes`);

        setClasses(data.data.data);
      } catch (err: any) {
        if (err.response.status === 404) {
          message.info("لا يوجد فصول لهذا الطالب!");
        } else {
          message.error(`You can't access student classes!
        ${err}`);
        }
      }
    };

    fetchClasses();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="classes">
      {classes.length === 0 && (
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: " 1.3rem",
            fontWeight: "500",
          }}
          type="secondary"
        >
          لا يوجد فصول لهذا الطالب بعد!
        </Text>
      )}
      {classes.map((classObject: any) => (
        <ClassCard
          key={classObject.id * 8.1}
          id={classObject.id}
          className={classObject.name}
          teacherName={classObject.Teacher.User.name}
          assignments={classObject.Assignments}
          tests={classObject.Tests}
        />
      ))}
    </main>
  );
};

export default ClassSection;
