import { Test, TestStudent } from '../../models';
import getClassStudentsQuery from './getClassStudentsQuery';

const postTestQuery = async (classId: string, title : string, notes : string, date : Date) => {
  const test:any = await Test.create({
    class_id: classId, title, notes, date,
  });

  const testId:number = test.dataValues.id;

  const students: any = await getClassStudentsQuery(classId);

  const studentTests = students.map((student : any) => ({
    student_id: student.student_id,
    test_id: testId,
  }));

  TestStudent.bulkCreate(studentTests);
};
export default postTestQuery;
