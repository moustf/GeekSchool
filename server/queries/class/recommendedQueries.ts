import { Recommendation } from '../../models';

const recommendedQueries = async (classId: number, page:string) => Recommendation
  .findAndCountAll({
    where: { class_id: classId },
    offset: ((+page - 1) * 6),
    limit: 6,
    subQuery: false,
    order: [['updatedAt', 'DESC']],
  });

export default recommendedQueries;
