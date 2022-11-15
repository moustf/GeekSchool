import { Parent, User } from '../../models';

const getParentInfoQuery = (parentId: number) => User.findAll({
  attributes: {
    exclude: ['createdAt', 'updatedAt'],
  },
  include: {
    model: Parent,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    where: {
      id: parentId,
    },
  },
});

export default getParentInfoQuery;
