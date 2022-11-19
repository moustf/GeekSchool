import { Card, Typography } from "antd";
import React from "react";

import FeedbackCard from "./FeedbackCard/FeedbackCard";
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
          img={`${process.env.PUBLIC_URL}/assets/user1.png`}
          userName="محمد إبراهيم"
          date="November 20, 2019"
        />
        <FeedbackCard
          text="من خلال المنصة، يمكنك متابعة أبنئك بلا جهد زائد أو ملل"
          img={`${process.env.PUBLIC_URL}/assets/user2.png`}
          userName="رامي إمام"
          date="December 15, 2020"
        />
        <FeedbackCard
          text="البرنامج يوفر عليك الكثير من الوقت من خلال تقليل زيارتك الفعلية للمدرسة"
          img={`${process.env.PUBLIC_URL}/assets/user3.png`}
          userName="خليل حسن"
          date="January 11, 2021"
        />
      </Card>
    </Card>
  </div>
);

export default LandingFeedback;
