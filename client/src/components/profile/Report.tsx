import { useState, useEffect } from "react";
import { Button, Input, ConfigProvider, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { reportsInterface } from "../../interfaces";
// import ReportCard from "./ReportCard";

ConfigProvider.config({
  theme: {
    primaryColor: "#0F93CB",
  },
});

const Reports = ({
  studentId,
  visitRole,
}: {
  studentId: string | number | undefined;
  visitRole: string | undefined;
}) => {
  const [, setDataReports] = useState<reportsInterface[] | []>([]);
  const [reportInput, setReportInput] = useState<string>('');

  useEffect(() => {
    const getReports = async () => {
      const { data }: any = await axios.get(
        `/api/v1/student/${studentId}/reports`
      );
      setDataReports(data);
    };
    getReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addNewReport = async () => {
    try {
      if (!reportInput) {
        throw new Error("Reports field required");
      }
      await axios.post(`/api/v1/student/${studentId}/reports`, {
        description: reportInput,
      });
    } catch (error: any) {
      message.error(`You can't access the reports!
      ${error}`);
    }
  };

  return visitRole !== "student" ? (
    <aside id="profile-aside">
      <section id="reports">
        <h1>الشكاوي</h1>
        <div className="report-form">
          {visitRole === "teacher" && (
            <Input
              status={reportInput === null ? "" : !reportInput ? "error" : ""}
              placeholder="أكتب الشكوى هنا"
              onChange={(e) => setReportInput(e.target.value)}
            />
          )}
          {visitRole === "teacher" && (
            <Button onClick={addNewReport}>
              <PlusOutlined />
            </Button>
          )}
        </div>
        <div className="reports-container">
          {/* {dataReports.length !== 0 && dataReports.map((report) => (
            <ReportCard
              report={report?.description}
              key={`${report?.id}reports`}
            />
          ))} */}
        </div>
      </section>
    </aside>
  ) : (
    <div style={{ display: "none" }} />
  );
};

export default Reports;
