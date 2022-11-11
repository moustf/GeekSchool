import { EditOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import { healthCardInterface } from "../../interfaces";
import "./style.css";

const { TextArea } = Input;

const HealthCard = ({
  type,
  description,
  color,
  image,
  name,
  handleUpdateHealth,
  role,
}: healthCardInterface) => {
  const [healthValue, setHealthValue] = useState<string>("");
  const [edited, setEdited] = useState<boolean>(false);

  return (
    <div className="health-card">
      <div style={{ backgroundColor: color[0] }}>
        <h1>{name}</h1>
        <img src={image} alt={type} />
      </div>
      <div style={{ backgroundColor: color[1] }}>
        {!edited && description ? (
          <div>
            <p>{description}</p>
            {role === "parent" && (
              <EditOutlined onClick={() => setEdited(true)} />
            )}
          </div>
        ) : (
          role === "parent" && (
            <div>
              <TextArea
                rows={4}
                placeholder={`اكتب حالة ${name}`}
                onChange={(e) => setHealthValue(e.target.value)}
                name={type}
              />
              <Button
                onClick={() => {
                  setEdited(false);
                  handleUpdateHealth(healthValue, type);
                }}
              >
                {description ? "تحديث" : "إضافة"}
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HealthCard;
