import { FC } from "react";
import "./style.css";

type Props = {
  sum: number;
};

const Resultcell: FC<Props> = ({ sum }) => (
  <div className="result_success">
    <span className="result_text">{sum}</span>
  </div>
);
export default Resultcell;
