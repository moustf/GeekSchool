import { Student } from '../../models';

const { Op } = require('sequelize');

const studentParentRelationQuery = (
  id:string | number,
  studentId:string | number,
) => Student.findAll({
  where: {
    [Op.and]: [{ id: studentId }, { parent_id: id }],
  },
});

export default studentParentRelationQuery;
