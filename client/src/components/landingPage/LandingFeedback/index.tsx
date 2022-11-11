import { Card, Typography } from "antd";
import React from "react";

import FeedbackCard from "./FeedbackCard/FeedbackCard";
import User1 from "../../../assets/user1.png";
import User2 from "../../../assets/user2.png";
import User3 from "../../../assets/user3.png";
import "./LandingFeedback.css";

const { Title, Text } = Typography;

const LandingFeedback: React.FC = () => (
  <div className="feedback-div">
    <Card
      className="landing-feedback"
      style={{ width: "100%", overflow: "hidden" }}
      bordered={false}
    >
      <Card className="feedback-head" bordered={false}>
        <Title level={2} className="landing-feedback__title">
          رأي مجتمعنا عن الموقع
        </Title>
        <Text type="secondary" className="landing-feedback__para">
          جعل التعليم عملية أسهل و أسرع
        </Text>
      </Card>
      <Card
        className="feedback-cards"
        bordered={false}
        bodyStyle={{
          display: "flex",
          marginBottom: "2rem",
        }}
      >
        <FeedbackCard
          text="كانت تجربة ممتعة، و فرصة جيدة للحصول 
        على التعليم بنظرة جديدة"
          img={User1}
          userName="محمد إبراهيم"
          date="November 20, 2019"
        />
        <FeedbackCard
          text="من خلال المنصة، يمكنك متابعة أبنئك بلا جهد زائد أو ملل"
          img={User2}
          userName="رامي إمام"
          date="December 15, 2020"
        />
        <FeedbackCard
          text="البرنامج يوفر عليك الكثير من الوقت من خلال تقليل زيارتك الفعلية للمدرسة"
          img={User3}
          userName="خليل حسن"
          date="January 11, 2021"
        />
      </Card>
    </Card>
  </div>
);

export default LandingFeedback;
