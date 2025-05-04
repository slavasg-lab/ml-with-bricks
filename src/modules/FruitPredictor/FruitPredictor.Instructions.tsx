import { styled } from "styled-components";
import Typography from "../../components/Typography/Typography";
import InTextLink from "../../components/Links/InTextLink";
import { useTranslation } from "react-i18next";

const PitcherInstructions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography.H2>{t("PitcherInstructions.title")}</Typography.H2>
      <Typography.Text>
        {t("PitcherInstructions.intro")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.followVideo")}
        <InTextLink to={"/materials/en/pitcher_video.mp4"}>
          {t("video")}
        </InTextLink>
        {t("PitcherInstructions.followVideoPart2")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("PitcherInstructions.assemblyTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.assemblyText1Part1")}
        <InTextLink to="/materials/en/pitcher_instructions.pdf">
          {t("these instructions")}
        </InTextLink>
        {t("PitcherInstructions.assemblyText1Part2")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.assemblyText2Part1")}
        <InTextLink to={"/materials/en/pitcher_instructions.pdf"}>
          {t("pdf")}
        </InTextLink>
        {t("PitcherInstructions.assemblyText2Part2")}
        <InTextLink to={"/materials/en/pitcher_video.mp4"}>
          {t("video")}
        </InTextLink>
        {t("PitcherInstructions.assemblyText2Part3")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("PitcherInstructions.dataCollectionTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.dataCollectionText")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("PitcherInstructions.predictionTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText1")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText2")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText3")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText4")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText5")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.predictionText6")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("PitcherInstructions.thingsToTryTitle")}
      </Typography.Text>
      <Typography.Text>
        {t("PitcherInstructions.thingsToTryText")}
      </Typography.Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PitcherInstructions;