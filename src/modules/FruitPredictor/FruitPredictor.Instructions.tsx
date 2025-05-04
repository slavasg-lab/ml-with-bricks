import { styled } from "styled-components";
import Typography from "../../components/Typography/Typography";
import InTextLink from "../../components/Links/InTextLink";
import { useTranslation } from "react-i18next";

const FruitPredictorInstructions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography.Text>
        {t("FruitPredictorInstructions.intro")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.followVideo")}
        <InTextLink to={"/materials/en/video.mp4"}>
          {t("video")}
        </InTextLink>
        {t("FruitPredictorInstructions.followVideoPart2")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("FruitPredictorInstructions.assemblyTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.assemblyText1Part1")}
        <InTextLink to="/materials/en/instructions.pdf">
          {t("these instructions")}
        </InTextLink>
        {t("FruitPredictorInstructions.assemblyText1Part2")}
      </Typography.Text>
      <Typography.Text>
        {t("FruitPredictorInstructions.assemblyText2Part1")}
        <InTextLink to={"/materials/en/instructions.pdf"}>
          {t("pdf")}
        </InTextLink>
        {t("FruitPredictorInstructions.assemblyText2Part2")}
        <InTextLink to={"/materials/en/video.mp4"}>
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