import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { FC } from "react";

import { GradeCollapseProps } from "../../../../interfaces";
import "./GradesCollapse.css";

const { Panel } = Collapse;

const handleRotation = ({ isActive }: any) => (
  <CaretRightOutlined rotate={isActive ? 90 : 0} />
);

const GradeCollapse: FC<GradeCollapseProps> = ({ title, id, children }) => (
  <Collapse className="collapse" bordered={false} expandIcon={handleRotation}>
    <Panel className="row" header={title} key={id}>
      {children}
    </Panel>
  </Collapse>
);

export default GradeCollapse;
