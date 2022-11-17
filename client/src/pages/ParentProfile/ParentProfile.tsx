import { FC, useState, useEffect } from "react";
import axios from "axios";
import ProfilePage from "../profile";
import ProfileCard from "../../components/ProfileCard";
import { useUserData } from "../../context/AuthContext";
import {
  ParentInfoInterface,
  ChildrenData,
  TeachersData,
} from "../../interfaces";
import "./ParentProfile.css";

const ParentProfile: FC = () => {
  const [parentInfo, setParentInfo] = useState<ParentInfoInterface>({
    email: "",
    img: "",
    location: "",
    mobile: "",
    name: "",
    role: "",
  });
  const [children, setChildren] = useState<ChildrenData[]>([
    {
      parent_id: 1,
      name: "",
      id: 1,
      img: "",
    },
  ]);
  const { userData } = useUserData();
  const [teachers, setTeachers] = useState<TeachersData[]>([
    {
      id: 1,
      email: "",
      img: "",
      location: "",
      mobile: "",
      name: "",
      role: "",
    },
  ]);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/v1/parent/info", {
        signal: controller.signal,
      });

      setParentInfo(data.data.data[0]);
    };

    const fetchChildren = async () => {
      const data = await axios.get(`/api/v1/profile/parent/students`, {
        signal: controller.signal,
      });

      setChildren(data.data.data);
    };

    const fetchTeachers = async () => {
      const data = await axios.get("/api/v1/parent/teachers", {
        signal: controller.signal,
      });

      setTeachers(data.data.data);
    };

    fetchData();
    fetchChildren();
    fetchTeachers();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfilePage
      name={parentInfo.name}
      email={parentInfo.email}
      role={parentInfo.role}
      image={parentInfo.img}
      location={parentInfo.location}
      mobile={parentInfo.mobile}
      visitRole={userData?.role}
    >
      <main className="profile-cards">
        <ProfileCard
          data={children.map((child: ChildrenData) => ({
            id: child.id,
            img: child.img,
            name: child.name,
            mobile: parentInfo.mobile,
          }))}
          title="students"
          type="students"
          _role="parent"
        />
        <ProfileCard
          data={teachers.map((teacher: TeachersData) => ({
            id: teacher.id,
            img: teacher.img,
            name: teacher.name,
            mobile: parentInfo.mobile,
          }))}
          title="teacher"
          type="teachers"
          _role="parent"
        />
      </main>
    </ProfilePage>
  );
};

export default ParentProfile;
