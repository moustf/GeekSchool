import { Test, TestStudent } from '../../models';

const getStudentTestsQuery = (id: number) => TestStudent.findAll({
  where: { student_id: id },
  attributes: ['Test.title', 'Test.id', 'Test.date'],
  raw: true,
  nest: false,
  include: [{
    model: Test,
    attributes: [],
  }],

});

export default getStudentTestsQuery;
