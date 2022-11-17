import { PhoneOutlined, MailOutlined, AimOutlined } from "@ant-design/icons";
import { userDetailsInterface } from "../../interfaces";
import "./style.css";

const UserHeader = ({
  name,
  location,
  mobile,
  email,
  role,
  image,
}: userDetailsInterface) => (
  <section id="user-profile">
    <div className="image-header">
      <div className="ball">
        <span className="yellow-ball" />
        <span className="red-ball" />
      </div>
      <div className="profile-image">
        <div>
          <img
            src={
              image ||
              "https://www.pngitem.com/pimgs/m/99-998739_dale-engen-person-placeholder-hd-png-download.png"
            }
            alt={name || "person"}
          />
        </div>
      </div>
      <span />
      <span />
    </div>
    <div className="info-header">
      <div className="profile-details">
        <h1>{name}</h1>
        <p>
          {role === "student"
            ? "تلميذ"
            : role === "teacher"
            ? "معلّم"
            : "ولي أمر"}
        </p>
      </div>
      <div className="location-container">
        <h2>عنوان</h2>
        <div>
          <AimOutlined />
          <p>{location}</p>
        </div>
      </div>
      <div className="mobile-container">
        <h2>جوال</h2>
        <div>
          <PhoneOutlined />
          <p>{mobile}</p>
        </div>
      </div>
      <div className="email-container">
        <h2>ايميل</h2>
        <div>
          <MailOutlined />
          <p>{email}</p>
        </div>
      </div>
    </div>
  </section>
);

export default UserHeader;
