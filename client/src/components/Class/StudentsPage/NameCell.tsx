import { FC } from "react";
import "./style.css";

type Props = { name: string; image: string };

const NameCell: FC<Props> = ({ name, image }) => (
  <div className="name_wrapper">
    <img src={image} alt="user_image" className="name_image" />
    <span className="name_text">{name}</span>
  </div>
);
export default NameCell;
