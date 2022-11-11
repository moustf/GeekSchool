/* eslint-disable no-plusplus */
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useMemo } from "react";

import { GradesTableProps, DataType } from "../../../../interfaces";
import "./GradesTable.css";

const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "id",
    width: "20%",
  },
  {
    title: "title",
    dataIndex: "title",
    width: "50%",
  },
  {
    title: "Grade",
    dataIndex: "grade",
    width: "30%",
  },
];

let data: DataType[] = [];
let count: number = 1;

const GradesTable: React.FC<GradesTableProps> = ({ assignments, tests }) => {
  const rows = useMemo(
    () =>
      [...assignments, ...tests].map((obj: any) => {
        if (obj.TestStudents) {
          return {
            key: String(obj.id),
            id: count++,
            title: obj.title,
            grade: obj.TestStudents[0].grade,
          };
        }
        return {
          key: String(obj.id),
          id: count++,
          title: obj.title,
          grade: obj.AssignmentStudents[0].grade,
        };
      }),
    [assignments, tests]
  );

  count = 1;
  data = [...rows];

  return (
    <Table
      columns={columns}
      dataSource={data}
      size="middle"
      tableLayout="auto"
      className="table"
    />
  );
};

export default GradesTable;
