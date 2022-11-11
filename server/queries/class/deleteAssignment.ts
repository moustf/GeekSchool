import { Assignment } from '../../models';

const deleteAssignmentQuery = async (assignmentId: number) => Assignment
  .destroy({
    where: { id: assignmentId },
  });

export default deleteAssignmentQuery;
