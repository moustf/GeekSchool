import { message } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfilePage } from "..";
import { useUserData } from "../../context/AuthContext";

interface StudentDataInterface {
  id: number;
  name: string;
  mobile: string;
  email: string;
  img: string;
  location: string;
  role: string;
}

const StudentProfile: FC = () => {
  const { studentId } = useParams();

  const { userData } = useUserData();
  const [studentData, setStudentData] = useState<StudentDataInterface>({
    id: 0,
    name: "",
    mobile: "",
    email: "",
    img: "",
    location: "",
    role: "",
  });

  const getStudentInfo = async () => {
    try {
      const data = await axios.get(`/api/v1/student/${studentId}/info`);

      setStudentData(data.data.data[0]);
    } catch (error: any) {
      message.error(error);
    }
  };

  useEffect(() => {
    getStudentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfilePage
      name={studentData?.name}
      location={studentData?.location || "لا يوجد"}
      mobile={studentData?.mobile || "لا يوجد"}
      email={studentData?.email}
      role={studentData?.role}
      image={studentData?.img}
      visitRole={userData?.role}
    />
  );
};

export default StudentProfile;
