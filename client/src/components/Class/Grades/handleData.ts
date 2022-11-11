type Col = { title: string; dataIndex: string };
interface StudentInterface {
  id: number;
  name: string;
  img: string;
  degrees: object;
}
const handleStudentsData = (data: any) => {
  const cols: Col[] = [];
  const colsNames: string[] = [];
  const students: StudentInterface[] = [];

  data.forEach(({ Student }: any) => {
    const { AssignmentStudents, TestStudents, User, id } = Student;
    const degrees: any = {};
    [...AssignmentStudents, ...TestStudents].forEach((c) => {
      const source = c.Assignment || c.Test;
      degrees[source.title] = c.grade;

      if (!colsNames.includes(source.title)) {
        colsNames.push(source.title);
        cols.push({
          title: source.title,
          dataIndex: source.title,
        });
      }
    });

    // handle users
    students.push({
      id,
      name: User.name,
      img: User.img,
      degrees,
      ...degrees,
    });
  });
  return { cols: [...cols], students };
};

export default handleStudentsData;
