import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import Question from "./components/Class/Questions";

import {
  SignUpPage,
  LoginPage,
  ParentProfile,
  TeacherProfile,
  HealthProfilePage,
  LandingPage,
  StatisticsPage,
} from "./pages";
import Assignments from "./components/Class/Assignments/Assignments";
import { useUserData } from "./context/AuthContext";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import StudentGrades from "./components/Student/Grades/StudentGrades";
import ClassSection from "./components/Student/ClassSection/ClassSection";
import Calender from "./components/Calender";
import { Announcements } from "./components";
import "antd/dist/antd.variable.min.css";
import "./style.css";
import StudentProfile from "./pages/studentProfile";
import Feedback from "./components/Class/Feedback/Feedback";
import RecommendedPage from "./pages/recommended/RecommendedPage";

ConfigProvider.config({
  theme: {
    primaryColor: "#0F93CB",
  },
});

const App: React.FC = () => {
  const { getUserData, userData } = useUserData();
  // const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await getUserData();
    };

    getData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/student/:studentId",
      element: userData ? <StudentProfile /> : <LoginPage />,
      children: [
        {
          index: true,
          element: userData ? <HealthProfilePage /> : <LoginPage />,
        },
        {
          path: "classes",
          element: <ClassSection />,
        },
        {
          path: "grades",
          element: <StudentGrades />,
        },
        {
          path: "tests",
          element: <Calender />,
        },
        {
          path: "health",
          element: <HealthProfilePage />,
        },
      ],
    },
    {
      path: "/parent",
      element: userData?.role === "parent" ? <ParentProfile /> : <LoginPage />,
    },
    {
      path: "/teacher/:teacherId",
      element:
        userData?.role === "teacher" ? <TeacherProfile /> : <LoginPage />,
    },
    {
      path: "/class/:classId",
      element: userData ? <Class /> : <LoginPage />,
      children: [
        {
          index: true,
          element:
            userData?.role === "teacher" ? (
              <StatisticsPage />
            ) : userData?.role === "student" ? (
              <Announcements />
            ) : (
              <LoginPage />
            ),
        },
        {
          path: "stats",
          element: <StatisticsPage />,
        },
        {
          path: "announcements",
          element: <Announcements />,
        },
        {
          path: "students",
          element: <StudentsProfile />,
        },
        {
          path: "assignments",
          element: <Assignments />,
        },
        {
          path: "questions",
          element: <Question />,
        },
        {
          path: "feedback",
          element: <Feedback />,
        },
        {
          path: "recommended",
          element: <RecommendedPage />,
        },
        {
          path: "grades",
          element: <Grades />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
