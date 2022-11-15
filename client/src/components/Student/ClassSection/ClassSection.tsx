import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import ClassCard from "./ClassCard/ClassCard";
import { useUserData } from "../../../context/AuthContext";
import "./ClassSection.css";

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
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
          text: `${error}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    };

    fetchClasses();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="classes">
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
