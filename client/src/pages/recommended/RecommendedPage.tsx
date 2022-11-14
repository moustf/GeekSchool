import axios from "axios";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { useParams } from "react-router-dom";
import { RecommendedCard } from "../../components";
import AddRecommended from "../../components/AddRecommended";
import { useUserData } from "../../context/AuthContext";

type recommendedType = {
  description: string;
  // eslint-disable-next-line camelcase
  material_link: string;
};

const RecommendedPage: React.FC = () => {
  const [current, setCurrent] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [recommended, setRecommended] = useState<Array<recommendedType>>([]);
  const source = axios.CancelToken.source();

  const { classId } = useParams();
  useEffect(() => {
    const fetchRecommended = async () => {
      const { data } = await axios.get(
        `/api/v1/class/${classId}/recommended/?page=${current}`
      );
      setRecommended(data.rows);
      setCount(data.count);
    };
    fetchRecommended();
    return () => source.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  return (
    <div className="card">
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>توصيات إضافية</h2>
          {useUserData().userData?.role === "teacher" ? <AddRecommended /> : ""}
        </div>

        {recommended.map((ele) => (
          <RecommendedCard
            key={ele.description}
            description={ele.description}
            materialLink={ele.material_link}
          />
        ))}
      </div>
      <Pagination
        current={current}
        onChange={onChange}
        total={10 * Math.ceil(count / 2)}
      />
    </div>
  );
};
export default RecommendedPage;
