import { ReadOutlined } from "@ant-design/icons";
import { announcementCard } from "../../../interfaces";
import "./style.css";

const AnnouncementCard = ({ description, createdAt }: announcementCard) => (
  <div className="announcement-card">
    <ReadOutlined style={{ fontSize: "2.5rem", opacity: 0.9 }} />
    <div className="hr" />
    <div className="inner-box">
      <p className="time">
        نشرت في: {createdAt[0]} | {createdAt[1].slice(0, 8)}
      </p>
      <p>{description}.</p>
    </div>
  </div>
);

export default AnnouncementCard;
