import React, { useState } from "react";
import { Form, Button, message, Input, Modal } from "antd";
import axios from "axios";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import "./style.css";

const AddRecommended: React.FC = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const source = axios.CancelToken.source();
  const { classId } = useParams();

  const showModal = () => setVisible(true);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      const newRecommneded = await axios.post(
        `/api/v1/class/${classId}/recommended`,
        { ...fieldValues },
        { cancelToken: source.token }
      );

      message.success(newRecommneded.data.msg);
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
    handleCancel();
    form.resetFields();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ borderRadius: "30px" }}
      >
        <PlusOutlined /> إضافة
      </Button>
      <Modal
        className="modal"
        footer={null}
        open={visible}
        onCancel={handleCancel}
        width="67%"
        bodyStyle={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
        closeIcon={
          <CloseOutlined
            style={{
              margin: "2rem",
              color: "#0CBE8A",
              border: "2px solid #0CBE8A",
              fontSize: "40px",
              fontWeight: "bold",
              position: "absolute",
              right: "70rem",
              top: "1rem",
            }}
          />
        }
      >
        <Form
          style={{
            width: "100%",
            marginTop: "1.2rem",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: "3rem",
          }}
          className="form"
          onFinish={onFinish}
          labelCol={{ span: 5 }}
          form={form}
        >
          <Form.Item
            label="تفاصيل المقترح"
            style={{ width: "90%" }}
            name="description"
            rules={[
              {
                required: true,
                message: "تفاصيل المقترح مطلوبة",
              },
            ]}
          >
            <Input className="input" placeholder="تفاصيل المقترح" />
          </Form.Item>

          <Form.Item
            label="تفاصيل المقترح"
            style={{ width: "90%" }}
            name="materialLink"
            rules={[
              {
                required: true,
                message: "يجب إدخال رابط صالح",
              },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input placeholder="رابط مصدر المقترح " />
          </Form.Item>

          <Form.Item
            className="button"
            style={{ width: "55%", display: "flex", justifyContent: "start" }}
          >
            <Button type="primary" htmlType="submit">
              أضف
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddRecommended;
