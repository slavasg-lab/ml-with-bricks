import { styled } from "styled-components";
import Typography from "../../components/Typography/Typography";
import InTextLink from "../../components/Links/InTextLink";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const FruitPredictorInstructions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography.Text>{t("FruitPredictorInstructions.intro")}</Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.followVideo")}
        <InTextLink to={"https://youtu.be/G8OpubRhUhU"}>
          {t("video")}
        </InTextLink>
        {t("FruitPredictorInstructions.followVideoPart2")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("FruitPredictorInstructions.assemblyTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.assemblyText1Part1")}
        <InTextLink
          to={`/ml-with-bricks/materials/${i18next.language}/assembly/fruit-predictor.pdf`}
        >
          {t("these instructions")}
        </InTextLink>
        {t("FruitPredictorInstructions.assemblyText1Part2")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.assemblyText2Part1")}
        <InTextLink to={`/ml-with-bricks/materials/${i18next.language}/connection.pdf`}>
          {t("pdf")}
        </InTextLink>
        {t("FruitPredictorInstructions.assemblyText2Part2")}
        <InTextLink to={"https://youtu.be/ZsviP40PnuA"}>
          {t("video")}
        </InTextLink>
        {t("FruitPredictorInstructions.assemblyText2Part3")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("FruitPredictorInstructions.dataCollectionTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.dataCollectionText")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("FruitPredictorInstructions.predictionTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.predictionText1")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.predictionText2")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("FruitPredictorInstructions.thingsToTryTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.thingsToTryText")}
      </Typography.Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default FruitPredictorInstructions;
