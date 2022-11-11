import { Recommendation } from '../../models';

const postRecommendationQuery = async (
  classId: number,
  description : string,
  materialLink : string,
) => {
  Recommendation
    .create({
      class_id: classId,
      material_link: materialLink,
      description,
    });
};

export default postRecommendationQuery;
