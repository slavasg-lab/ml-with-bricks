// import styled from "styled-components";

import { useTranslation } from "react-i18next";
import Typography from "../../components/Typography/Typography";

const ImprintPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography.H1>{t("Imprint.title")}</Typography.H1>
    </div>
  );
};

export default ImprintPage;
