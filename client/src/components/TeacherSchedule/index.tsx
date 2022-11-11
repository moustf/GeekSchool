import { useState, useEffect } from "react";
import { Table, Space, Spin, notification, Collapse } from "antd";
import axios from "axios";
import "./style.css";

interface weekInterface {
  id: number;
  subjectName: any | [];
  saturdays: string;
  Sundays: string;
  Mondays: string;
  Tuesdays: string;
  Wednesdays: string;
  Thursdays: string;
}

const columns = [
  {
    title: "المساق",
    dataIndex: "subjectName",
  },
  {
    title: "السبت",
    dataIndex: "saturdays",
  },
  {
    title: "الأحد",
    dataIndex: "Sundays",
  },
  {
    title: "الإثنين",
    dataIndex: "Mondays",
  },
  {
    title: "الثلاثاء",
    dataIndex: "Tuesdays",
  },
  {
    title: "الأربعاء",
    dataIndex: "Wednesdays",
  },
  {
    title: "الخميس",
    dataIndex: "Thursdays",
  },
];

const { Panel } = Collapse;

const TeacherSchedule = () => {
  const [schedule, setSchedule] = useState<weekInterface[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await axios(`/api/v1/teacher/schedule`);

      const subjects = data?.map((s: any) => ({
        subjectName: s.name,
      }));
      const classes: any = data?.map((e: any) => e.Schedules);

      const dataSource = subjects.map((e: any, i: number) => {
        const a = classes[i].map((obj: any) => ({
          [obj.day]: obj.time,
        }));

        let scheduleObj = { ...e };

        for (let j = 0; j < a.length; j += 1) {
          scheduleObj = { ...scheduleObj, ...a[j] };
        }

        return scheduleObj;
      });
      setSchedule(dataSource);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <Space size="large">
        <Spin size="large" />
      </Space>
    );
  }

  if (error) {
    notification.config({
      placement: "bottomLeft",
      bottom: 10,
      duration: 3,
      rtl: true,
    });
    notification.error({
      message: error,
      // description: error,
    });
  }

  return (
    <Collapse
      accordion
      style={{
        boxShadow: "0px 0px 5px 0px rgb(100 100 100 / 20%)",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <Panel header="جدول حصص المعلم" key="1">
        <div className="table_wrapper">
          <Table columns={columns} dataSource={schedule} size="middle" />
        </div>
      </Panel>
    </Collapse>
  );
};

export default TeacherSchedule;
