import { Card, Typography, Image } from "antd";
import React from "react";
import "./FeedbackCard.css";

const { Text } = Typography;

interface FeedbackCardProps {
  text: string;
  img: string;
  userName: string;
  date: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  text,
  img,
  userName,
  date,
}) => (
  <Card className="feedback-card" id="opinions" bordered={false}>
    <Text className="head-para">{text}</Text>
    <Card
      bordered={false}
      className="user-info"
      bodyStyle={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image width={65} src={img} className="user-image" />
      <Card
        bordered={false}
        className="user-info__inner"
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text className="name">{userName}</Text>
        <Text className="date">{date}</Text>
      </Card>
    </Card>
  </Card>
);

export default FeedbackCard;
