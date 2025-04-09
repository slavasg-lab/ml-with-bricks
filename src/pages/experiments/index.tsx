
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import { useTranslation } from "react-i18next";
import ExperimentCard from "../../components/Cards/ExperimentCard";

const experiments = ["fruit-predictor", "ping-ponger", "crawler"];

const ExperimentsPage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Typography.H1>{t("Experiments.title")}</Typography.H1>
      <Typography.Text>{t("Experiments.text")}</Typography.Text>
      <CardGrid>
        {experiments.map((el) => (
          <ExperimentCard key={el} expId={el} />
        ))}
      </CardGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 30px;
  gap: 20px;
  grid-auto-rows: 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ExperimentsPage;