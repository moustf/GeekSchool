import { Assignment, ClassStudent, AssignmentStudent } from '../../models';

const addNewAssignmentQuery = async (classId: string, title: string, description: string) => {
  const assignment = await Assignment.create({ title, description, class_id: classId });

  const students = await ClassStudent.findAll({
    raw: true,
    nest: false,
    attributes: ['student_id'],
    where: {
      class_id: classId,
    },
  });

  const studentToAdd = students.map((student: any) => (
    { student_id: student.student_id, assignment_id: assignment.getDataValue('id') }
  ));

  await AssignmentStudent.bulkCreate(studentToAdd);

  return assignment;
};

export default addNewAssignmentQuery;
