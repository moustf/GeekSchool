import { message } from "antd";
import axios from "axios";
import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
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

const StudentProfile: FC<{
  setIsGotten: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsGotten }) => {
  const { studentId } = useParams();
  console.log({ studentId });

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
      console.log("sdfsdfsdf", { studentId });

      const data = await axios.get(`/api/v1/student/${studentId}/info`);
      console.log("sssssssss", data);

      setStudentData(data.data.data[0]);
    } catch (error: any) {
      message.error(error);
    }
  };

  useEffect(() => {
    getStudentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!studentData) return <Spin tip="Loading..." />;
  return (
    <ProfilePage
      name={studentData?.name}
      location={studentData?.location}
      mobile={studentData?.mobile}
      email={studentData?.email}
      role={studentData?.role}
      image={studentData?.img}
      visitRole={userData?.role}
      setIsGotten={setIsGotten}
    />
  );
};

export default StudentProfile;
