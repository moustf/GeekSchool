import React, { useEffect, useState } from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Moment } from "moment";
import moment from "moment";
import { useParams } from "react-router-dom";
import axios from "axios";

type testsType = {
  title: string;
  id: number;
  date: string;
};

const Calender: React.FC = () => {
  const source = axios.CancelToken.source();
  const [tests, setTest] = useState<Array<any>>([]);

  const { studentId } = useParams();
  useEffect(() => {
    const fetchTests = async () => {
      const { data } = await axios.get(`/api/v1/student/${studentId}/tests/`);
      setTest(data.data);
    };
    fetchTests();
    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListData = (value: Moment) => {
    let listData;
    tests.map((ele: testsType) => {
      const newDate = moment(ele.date);
      if (
        newDate.isSame(value, "month") &&
        newDate.isSame(value, "year") &&
        newDate.isSame(value, "day")
      ) {
        listData = [{ type: "success", content: ele.title }];
      }
      return null;
    });
    return listData || [];
  };

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item: any) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default Calender;
