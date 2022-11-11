import { Test } from '../../models';

const getTestsQuery = (classId: string) => (
  Test.findAll({
    where: {
      class_id: classId,
    },
  })
);

export default getTestsQuery;
