import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import axios, { AxiosResponse } from "axios";
import FeedbackCard from "../../FeedbackCard";
import { useUserData } from '../../../context/AuthContext';
import "./Feedback.css";

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<object[]>([]);

  const source = axios.CancelToken.source();
  const { classId } = useParams();
  const { userData } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      const feedbackData: AxiosResponse = await axios.get(
        `/api/v1/class/${classId}/feedback`
      );

      setFeedbacks(feedbackData.data.data.rows);
    };

    fetchData();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async (values: any) => {
    await axios.post(`/api/v1/class/${classId}/feedback`, {
      feedback: values.feedback,
    });

    message.success("The feedback is added successfully!");
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error(`${errorInfo}`);
  };

  return (
    <main className="class-feedback">
      <h1 className="feedback-title">التغذية الراجعة</h1>
      {
        userData.role === 'student' && <section className="feedback-inner">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="add-feedback-form"
          >
            <Form.Item
              name="feedback"
              rules={[{ required: true, message: "الرجاء التفضل بإدخال نص" }]}
            >
              <Input className="input-field" placeholder="شارك مراجعة جديدة!" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" className="submit-btn">
                أرسل
              </Button>
            </Form.Item>
          </Form>
        </section>
      }

      <section className="feedbacks-boxes">
        {feedbacks.map((feedback: any) => (
          <FeedbackCard key={feedback.feedback} feedback={feedback.feedback} />
        ))}
      </section>
    </main>
  );
};

export default Feedback;
