import { ElementType } from "react";
import { feedbackInterface } from "../interfaces";
import "./style.css";

const FeedbackCard: ElementType = ({ feedback }: feedbackInterface) => (
  <div className="feedback-card">
    <p>{feedback}</p>
  </div>
);

export default FeedbackCard;
