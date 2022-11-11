import { Announcement } from '../../models';
import { announcementInterface } from '../../utils';

const addAnnouncementQuery = ({
  classId,
  description,
}: announcementInterface) => Announcement.create({ description, class_id: classId });

export default addAnnouncementQuery;
