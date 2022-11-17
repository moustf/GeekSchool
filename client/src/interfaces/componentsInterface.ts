/* eslint-disable camelcase */
import { Key, ReactNode, Dispatch, SetStateAction } from "react";

interface questionInterface {
  id: string | number;
  classId: string | number;
  question: string;
  answer: string;
}

interface recommendedInterface {
  materialLink: string;
  description: string;
}

interface feedbackInterface {
  feedback: string;
}

interface announcementCard {
  description: string;
  createdAt: string[];
}

interface profileNavLinkInterface {
  name: string;
  path: string;
  activeColor: string;
  newPath: string | null;
  testPath: string;
  // eslint-disable-next-line no-unused-vars
  handleClicked: (path: string) => void;
}

interface GradesTableProps {
  tests: {
    title: string;
    id: number;
    TestsStudents: {
      grade: number;
      id: number;
    }[];
  }[];
  assignments: {
    title: string;
    id: number;
    AssignmentStudents: {
      grade: number;
      id: number;
    }[];
  }[];
}

interface DataType {
  key: Key;
  id: number;
  title: string;
  grade: number;
}

interface GradeCollapseProps {
  title: string;
  id: number;
  children: ReactNode;
}

interface StudentAssignmentCardProps {
  title: string;
  createdAt: string;
  description: string;
}

interface TeacherAssignmentCardProps {
  id: number;
  title: string;
  createdAt: string;
  description: string;
  setRefresh: Dispatch<SetStateAction<boolean>>;
}

interface ClassCardProps {
  id: number;
  className: string;
  teacherName: string;
  assignments: {
    id: number;
    title: string;
    createdAt: string;
  }[];
  tests: {
    id: number;
    title: string;
    date: string;
  }[];
}

interface contentNameHealthInterface {
  content: string;
  name: string;
}

interface healthCardInterface {
  type: string;
  description: any;
  color: string[];
  image: string;
  name: string;
  role: string | undefined;
  // eslint-disable-next-line no-unused-vars
  handleUpdateHealth: (healthValue: string, type: string) => void;
}

interface ParentInfoInterface {
  email: string;
  img: string;
  location: string;
  mobile: string;
  name: string;
  role: string;
}

interface ChildrenData {
  parent_id: number;
  id: number;
  img: string;
  name: string;
}

interface TeachersData {
  id: number;
  email: string;
  img: string;
  location: string;
  mobile: string;
  name: string;
  role: string;
}

interface dashboardNumberInterface {
  studentLength: number | string;
  assignmentLength: number | string;
  questionsLength: number | string;
}

export {
  questionInterface,
  recommendedInterface,
  feedbackInterface,
  announcementCard,
  profileNavLinkInterface,
  GradesTableProps,
  DataType,
  GradeCollapseProps,
  StudentAssignmentCardProps,
  TeacherAssignmentCardProps,
  ClassCardProps,
  contentNameHealthInterface,
  healthCardInterface,
  ParentInfoInterface,
  ChildrenData,
  TeachersData,
  dashboardNumberInterface,
};
