import { Button, Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { CloseOutlined, FileTextOutlined } from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import "./index.css";

const AssignmentModal: React.FC = () => {
  const [form] = Form.useForm();
  const source = axios.CancelToken.source();
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (fieldValues: any) => {
    try {
      await axios.post(
        "/api/v1/class/25/assignment",
        { ...fieldValues },
        { cancelToken: source.token }
      );

      await Swal.fire({
        title: "تم إضافة المهمة بنجاح",
        icon: "success",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        text: error.response.statusText,
      });
    }
    handleCancel();
    form.resetFields();
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          borderRadius: "5rem",
          color: "#000",
          boxShadow: "none",
          border: "none",
        }}
      >
        <FileTextOutlined />
      </Button>
      <Modal
        className="modal"
        footer={null}
        open={visible}
        onCancel={handleCancel}
        width="67%"
        bodyStyle={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
        closeIcon={
          <CloseOutlined
            className="close-icon"
            style={{
              margin: '2rem',
              color: "#0CBE8A",
              border: "2px solid #0CBE8A",
              fontSize: '40px',
              fontWeight: 'bold',
              position: 'absolute',
              right: '70rem',
              top: '1rem',
            }}
          />
        }
      >
        <Form
          form={form}
          className="form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
        >
          <Form.Item
            label="عنوان المهمة"
            style={{ width: "90%", height: '5rem' }}
            name="title"
            rules={[
              {
                required: true,
                message: "عنوان المهمة مطلوب",
              },
            ]}
          >
            <Input className="input" placeholder="عنوان المهمة" />
          </Form.Item>

          <Form.Item
            label="تفاصيل المهمة"
            style={{ width: "90%", height: '10rem' }}
            name="description"
            rules={[
              {
                required: true,
                message: "تفاصيل المهمة مطلوبة",
              },
            ]}
          >
            <Input.TextArea
              className="textarea"
              style={{ borderRadius: "8px", height: "100px" }}
              placeholder="تفاصيل المهمة"
            />
          </Form.Item>

          <Form.Item className="button">
            <Button type="primary" htmlType="submit">
              أضف المهمة
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AssignmentModal;
