import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { Area } from "@antv/g2plot";
import { DashboardCard } from "../../components/Class/cards";
import { dashboardNumberInterface } from "../../interfaces";
import "./style.css";

const init = {
  studentLength: 0,
  assignmentLength: 0,
  questionsLength: 0,
};

const StatisticsPage: any = () => {
  const [
    { studentLength, assignmentLength, questionsLength },
    setDashboardNumber,
  ] = useState<dashboardNumberInterface>(init);
  const { classId } = useParams();

  // eslint-disable-next-line no-unused-vars
  const chart = () => {
    const area = new Area("dashboard-chart", {
      data: [
        {
          timePeriod: "طلاب عدد: 2",
          value: 1,
        },
        {
          timePeriod: "طلاب عدد: 4",
          value: 2,
        },
        {
          timePeriod: "طلاب عدد: 6",
          value: 3,
        },
        {
          timePeriod: "طلاب عدد: 8",
          value: 4,
        },
        {
          timePeriod: "طلاب عدد: 10",
        },
        {
          timePeriod: "12",
        },
        {
          timePeriod: "طلاب عدد: 14",
        },
        {
          timePeriod: "طلاب عدد: 16",
        },
      ],
      xField: "timePeriod",
      yField: "value",
      xAxis: {
        range: [0, 1],
      },
      areaStyle: () => ({
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      }),
    });
    return area.render();
  };

  useEffect(() => {
    chart();
  }, []);

  const getStatistics = async () => {
    try {
      const statisticsData = await axios.get(
        `/api/v1/class/${classId}/statistics`
      );
      setDashboardNumber({
        studentLength: statisticsData.data.data.studentsNum.studentsCount,
        assignmentLength:
          statisticsData.data.data.assignmentsNum.assignmentsCount,
        questionsLength: statisticsData.data.data.questionsNum.questionsCount,
      });
    } catch (err: any) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    getStatistics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="dashboard-page">
      <section id="dashboard-cards">
        <DashboardCard length={studentLength} name="الطلاب" color="#FB7D5B" />
        <DashboardCard
          length={assignmentLength}
          name="المهمات"
          color="#FCC43E"
        />
        <DashboardCard
          length={questionsLength}
          name="الاسئلة"
          color="#111111"
        />
      </section>
      <section id="dashboard-chart" />
    </section>
  );
};

export default StatisticsPage;
