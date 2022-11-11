import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import FeedbackCard from "../../FeedbackCard";
import "./Feedback.css";

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<object[]>([]);

  const source = axios.CancelToken.source();
  const { classId } = useParams();

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
    await axios.post(`api/v1/class/${classId}/feedback`, {
      feedback: values.feedback,
    });

    Swal.fire({
      title: "The feedback is added successfully!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong!
      ${errorInfo}`,
    });
  };

  return (
    <main className="class-feedback">
      <h1 className="feedback-title">التغذية الراجعة</h1>
      <section className="feedback-inner">
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

      <section className="feedbacks-boxes">
        {feedbacks.map((feedback: any) => (
          <FeedbackCard feedback={feedback.feedback} />
        ))}
      </section>
    </main>
  );
};

export default Feedback;
