import { Announcement } from '../../models';

const getAnnouncementQuery = (classId:string) => Announcement.findAll({
  where: {
    class_id: classId,
  },
});

export default getAnnouncementQuery;
