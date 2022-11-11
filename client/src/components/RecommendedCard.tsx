import { ElementType } from "react";
import { recommendedInterface } from "../interfaces";
import "./style.css";

const RecommendedCard: ElementType = ({
  materialLink,
  description,
}: recommendedInterface) => (
  <div className="recommended-card">
    <p>{description}</p>
    <div className="hr" />
    {materialLink && (
      <a href={materialLink} target="_blank" rel="noreferrer">
        View site
        <i className="fa-solid fa-up-right-from-square" />
      </a>
    )}
  </div>
);

export default RecommendedCard;
