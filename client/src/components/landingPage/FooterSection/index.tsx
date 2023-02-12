/* eslint-disable react/self-closing-comp */
import "./style.css";
import {
  ArrowLeftOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Button, List } from "antd";

const firstCol = [
  {
    title: "عن الموقع",
  },
  {
    title: "الرؤية",
  },
  {
    title: "الشركاء",
  },
  {
    title: "المساهمات",
  },
  {
    title: "FAQs",
  },
];

const secondCol = [
  {
    title: "خدماتنا",
  },
  {
    title: "فصول دراسية",
  },
  {
    title: "مدونات",
  },
  {
    title: "متابعة أبناء",
  },
  {
    title: "مناسبات",
  },
];

const thirdCol = [
  {
    title: "روابط مساعدة",
  },
  {
    title: "دليل الاستخدام",
  },
  {
    title: "برامجنا",
  },
  {
    title: "المدونات",
  },
  {
    title: "سيرة ذاتية",
  },
];

const forthCol = [
  {
    title: "المعلومات",
  },
  {
    title: "المساعدة و الدعم",
  },
  {
    title: "سياسات الاستخدام",
  },
  {
    title: "الاشتراك",
  },
  {
    title: "شروط الاستخدام ",
  },
];

const Footer = () => (
  <div className="footer_wrapper">
    <footer>
      <div className="footer_banner">
        <img
          className="left_hash"
          src={`${process.env.PUBLIC_URL}/assets/left hash.svg`}
          alt="leftHash"
        />
        <img
          className="right_hash"
          src={`${process.env.PUBLIC_URL}/assets/right hash.svg`}
          alt="rightHash"
        />
        <div className="map_wrapper">
          <img
            className="map"
            src={`${process.env.PUBLIC_URL}/assets/Map.svg`}
            alt="rightHash"
          />
          <div className="content_section">
            <div className="title">
              <h1>إنه الوقت كي نستثمر أكثر في تعليم أبنائنا</h1>
            </div>
            <div className="description">
              <p>
                من خلال منصة GeekSchool يمكنك متابعة صحة، سلوك، و حتى تحصيل
                أبناءك التعليمي داخل المدرسة، و الربط مع المعلم
              </p>
              <Button
                type="primary"
                shape="round"
                icon={<ArrowLeftOutlined />}
                size="large"
              >
                إنضم الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="list_section">
        <List
          className="list-footer"
          itemLayout="horizontal"
          dataSource={firstCol}
          renderItem={(item) => (
            <List.Item className="listItem-footer">
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
        <List
          className="list-footer"
          itemLayout="horizontal"
          dataSource={secondCol}
          renderItem={(item) => (
            <List.Item className="listItem-footer">
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />

        <List
          className="list-footer"
          itemLayout="horizontal"
          dataSource={thirdCol}
          renderItem={(item) => (
            <List.Item className="listItem-footer">
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />

        <List
          className="list-footer"
          itemLayout="horizontal"
          dataSource={forthCol}
          renderItem={(item) => (
            <List.Item className="listItem-footer">
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="under_line"></div>
      <div className="tail_section">
        <div>
          <p>©جميع الحقوق محفوظة</p>
        </div>
        <div className="icons_section">
          <FacebookOutlined />
          <TwitterOutlined />
          <LinkedinOutlined />
          <InstagramOutlined />
          <FacebookOutlined />
          <GithubOutlined />
        </div>
        <div>
          <p>معاً لتعليم أفضل</p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
