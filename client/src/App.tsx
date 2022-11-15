import React, { useEffect, useState } from "react";
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
} from "./pages";
import Assignments from "./components/Class/Assignments/Assignments";
import { useUserData } from "./context/AuthContext";
import StatsDummy from "./components/StatsDummy/Dummy";
import StudentsProfile from "./components/Class/StudentsPage";
import Class from "./components/Class";
import Grades from "./components/Class/Grades";
import StudentGrades from "./components/Student/Grades/StudentGrades";
import ClassSection from "./components/Student/ClassSection/ClassSection";
import Calender from "./components/Calender";
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
  const [isGotten, setIsGotten] = useState<boolean>(false);
  const { getUserData } = useUserData();

  useEffect(() => {
    const getData = async () => {
      const data = await getUserData();

      if (data) setIsGotten(true);
    };

    getData();
  }, [isGotten]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage setIsGotten={setIsGotten} />,
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
      element: <StudentProfile setIsGotten={setIsGotten} />,
      children: [
        {
          index: true,
          element: <HealthProfilePage />,
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
      element: <ParentProfile setIsGotten={setIsGotten} />,
    },
    {
      path: "/teacher/:teacherId",
      element: <TeacherProfile setIsGotten={setIsGotten} />,
    },
    {
      path: "/class/:classId",
      element: <Class />,
      children: [
        {
          path: "stats",
          element: <StatsDummy />,
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
