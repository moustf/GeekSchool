import { FC, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Form, Input, DatePicker } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
import "./AddTest.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const config = {
  rules: [
    { type: "object" as const, required: true, message: "Please select time!" },
  ],
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    text: "${label} is not a valid text!",
    date: "${label} is not a valid date!",
  },
};

// interface Props {
//   setValue: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AddTest: FC = () => {
  const [isShown, setIsShown] = useState<boolean>(true);

  const onFinish = async (fieldValues: any) => {
    const values = {
      title: fieldValues["exam-title"],
      date: fieldValues["exam-date"].format("YYYY-MM-DD HH:mm:ss"),
      notes: fieldValues["exam-notes"],
    };

    try {
      await axios.post("/api/v1/class/test", { ...values });
      await Swal.fire({
        title: "The test is added successfully!",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...Something went wrong!",
        text: error,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <>
      {isShown && (
        <section className="add-test-cont">
          <Form
            wrapperCol={layout.wrapperCol}
            labelCol={layout.labelCol}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            className="add-test-form"
          >
            <CloseSquareOutlined
              className="close-icon"
              onClick={() => setIsShown(false)}
            />
            <Form.Item
              name="exam-title"
              label="اسم الاختبار: "
              rules={[{ required: true }]}
              className="form-item"
            >
              <Input className="input" />
            </Form.Item>
            <Form.Item
              name="exam-date"
              label="موعد الاختبار: "
              rules={config.rules}
              className="form-item"
            >
              <DatePicker
                className="input date-picker"
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            </Form.Item>
            <Form.Item
              name="exam-notes"
              label="ملاحظات إضافية: "
              className="form-item"
            >
              <Input.TextArea className="textarea" />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
              style={{
                width: "20%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "196px",
                  height: "50px",
                  backgroundColor: "#0CBE8A",
                  border: "1px solid #0CBE8A",
                  borderRadius: "8px",
                  fontSize: "large",
                  fontWeight: "bold",
                  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
                }}
              >
                إضافة الإختبار
              </Button>
            </Form.Item>
          </Form>
        </section>
      )}
      <div />
    </>
  );
};

export default AddTest;
