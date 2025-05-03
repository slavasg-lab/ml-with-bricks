// import styled from "styled-components";

import { useTranslation } from "react-i18next";
import Typography from "../../components/Typography/Typography";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography.H1>{t("Home.title")}</Typography.H1>
      <Typography.Text></Typography.Text>
    </div>
  );
};

export default HomePage;
