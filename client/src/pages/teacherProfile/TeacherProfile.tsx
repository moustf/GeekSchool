/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/aria-role */
import { useEffect, useState, FC } from "react";
import { message } from "antd";
import axios from "axios";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import avtar from "../../assets/class_avatar.png";
import { useUserData } from "../../context/AuthContext";
import "./style.css";

interface UserItem {
  email: string;
  img: string;
  name: string;
  student_id: number;
  teacher_id: number;
  mobile: string;
  location: string;
}

const initUser: UserItem = {
  student_id: 0,
  teacher_id: 0,
  email: "",
  name: "",
  img: "",
  mobile: "",
  location: "Gaza",
};

interface classItem {
  name: string;
  img: string;
  id: number | string;
}

const TeacherProfile: FC = () => {
  const controller = new AbortController();
  const [students, setStudents] = useState<UserItem[]>([]);
  const [classes, setClasses] = useState<classItem[]>([]);
  const [user, setUser] = useState<UserItem>(initUser);
  const { userData } = useUserData();

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      try {
        const data = await axios.get("/api/v1/teacher/info", {
          signal: controller.signal,
        });

        setUser(data.data.data[0].User);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    const fetchStudents = async () => {
      try {
        const data = await axios.get("/api/v1/teacher/students", {
          signal: controller.signal,
        });
        setStudents(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    const fetchClasses = async () => {
      try {
        const data = await axios.get(
          `/api/v1/profile/teacher/${userData.id}/classes`,
          {
            signal: controller.signal,
          }
        );
        setClasses(data.data.data);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    fetchStudents();
    fetchClasses();
    fetchTeacherInfo();

    return () => controller.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfilePage
      name={user?.name}
      location={user?.location}
      mobile={user?.mobile}
      email={user?.email}
      role="teacher"
      image={user?.img}
      visitRole={userData?.role}
    >
      <section id="teacher-tables">
        <ProfileCard
          data={students.map((student: UserItem) => ({
            img: student.img,
            name: student.name,
            id: student.student_id,
            mobile: "0123456789",
          }))}
          title="الطلاب"
          type="students"
          _role="teacher"
        />

        <ProfileCard
          data={classes.map((oneClass: classItem) => ({
            img: avtar,
            name: oneClass.name,
            id: oneClass.id,
          }))}
          title="الفصول الدراسية"
          type="classes"
          _role="teacher"
        />
      </section>
    </ProfilePage>
  );
};
export default TeacherProfile;
