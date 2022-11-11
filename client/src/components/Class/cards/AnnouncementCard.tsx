import { ReadOutlined } from "@ant-design/icons";
import { announcementCard } from "../../../interfaces";
import "./style.css";

const AnnouncementCard = ({ description, createdAt }: announcementCard) => (
  <div className="announcement-card">
    <ReadOutlined style={{ fontSize: "2.5rem", opacity: 0.9 }} />
    <div className="hr" />
    <div>
      <p className="time">posted at 2022-10-21{createdAt}</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        accusamus est, natus vero ea expedita sint. Quaerat enim pariatur,
        exercitationem quia fugit at dolorem dolore possimus praesentium, cum
        accusantium eius.{description}
      </p>
    </div>
  </div>
);

export default AnnouncementCard;
