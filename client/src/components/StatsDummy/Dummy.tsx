import React from "react";
import { useTranslation } from "react-i18next";

const StatsDummy: React.FC = () => {
  const { t }: any = useTranslation();

  return <h1>{t("stats")}</h1>;
};

export default StatsDummy;
