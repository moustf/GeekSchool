import { FC, useState } from "react";
import { Input, Button } from "antd";
import "./style.css";

type Props = {
  question: string;
  answer: string;
  id: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (id: string, value: string) => void;
};

const Question: FC<Props> = ({ id, question, answer, handleChange }) => {
  const [_answer, setAnswer] = useState(answer);

  const handleClick = (): void => {
    if (!_answer) return;
    handleChange(id, _answer);
  };

  return (
    <div className="question_card">
      <p className="question">{question}</p>
      <div className="question_input">
        <Input
          placeholder="Enter Your Answer"
          value={_answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button type="primary" className="answer_btn" onClick={handleClick}>
          Answer
        </Button>
      </div>
    </div>
  );
};

export default Question;
