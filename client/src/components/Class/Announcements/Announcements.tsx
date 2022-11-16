import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FileTextOutlined } from "@ant-design/icons";
import axios from "axios";
import { AnnouncementCard } from "../cards";
import "./Announcements.css";

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Array<object>>([]);
  const [tests, setTests] = useState<Array<object>>([]);

  const source = axios.CancelToken.source();
  const { classId } = useParams();

  useEffect(() => {
    const fetchTestsData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/tests`);

      setTests(data.data.data);
    };

    const fetchAnnouncementData = async () => {
      const data = await axios.get(`/api/v1/class/${classId}/announcement`);

      setAnnouncements(data.data.data);
    };

    fetchTestsData();
    fetchAnnouncementData();

    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataToRender = [...announcements, ...tests]
    .map((object: any) => {
      const humanDate = new Date(object.date);
      const newObject: object = object.date
        ? {
            ...object,
            date: {
              timestamp: object.date,
              day: humanDate.getDate(),
              month: humanDate.getMonth(),
              year: humanDate.getFullYear(),
              time: object.date.split("T"),
            },
          }
        : object;

      return newObject;
    })
    .sort((a: any, b: any) =>
      a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0
    );

  return (
    <main className="class-announcement">
      <h1 className="title">الاعلانات</h1>
      <section className="inner-cont">
        {dataToRender.map((object: any) =>
          object.title ? (
            <section className="test-box" key={object.title}>
              <FileTextOutlined style={{ fontSize: "2.5rem", opacity: 0.9 }} />
              <div className="hr" />
              <section className="test-box-inner">
                <h2 className="test-title">{object.title}</h2>
                <p className="test-date">
                  {`${object.date.day}/${object.date.month}/${object.date.year}`}
                  &nbsp; &nbsp; | &nbsp; &nbsp;
                  {object.date.time[1].slice(0, 8)}
                </p>
                <p className="test-notes">{object.notes}</p>
              </section>
            </section>
          ) : (
            <AnnouncementCard
              description={object.description}
                createdAt={[object.createdAt.split("T")[0], object.createdAt.split("T")[1]]}
            />
          )
        )}
      </section>
    </main>
  );
};

export default Announcements;
