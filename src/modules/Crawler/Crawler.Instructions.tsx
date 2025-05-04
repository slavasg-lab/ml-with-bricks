import { styled } from "styled-components";
import Typography from "../../components/Typography/Typography";
import InTextLink from "../../components/Links/InTextLink";
import { useTranslation } from "react-i18next";
import WarningBlock from "../../components/Warnings/WarningBlock";
import i18next from "i18next";

const CrawlerInstructions = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography.Text>{t("CrawlerInstructions.intro")}</Typography.Text>
      <Typography.Text>
        {t("CrawlerInstructions.followVideo")}
        <InTextLink to={"https://www.youtube.com/watch/tuYZL71suyY"}>
          {t("video")}
        </InTextLink>
        {t("CrawlerInstructions.followVideoPart2")}
      </Typography.Text>
      <Typography.H3>{t("CrawlerInstructions.assemblyTitle")}</Typography.H3>
      <Typography.Text>
        {t("CrawlerInstructions.assemblyText1Part1")}
        <InTextLink to={`/ml-with-bricks/materials/${i18next.language}/assembly/crawler.pdf`}>
          {t("these instructions")}
        </InTextLink>
        {t("CrawlerInstructions.assemblyText1Part2")}
      </Typography.Text>
      <Typography.Text>
        {t("CrawlerInstructions.assemblyText2Part1")}
        <InTextLink to={`/ml-with-bricks/materials/${i18next.language}/connection.pdf`}>
          {t("pdf")}
        </InTextLink>
        {t("CrawlerInstructions.assemblyText2Part2")}
        <InTextLink to={"https://youtu.be/ZsviP40PnuA"}>
          {t("video")}
        </InTextLink>
        {t("CrawlerInstructions.assemblyText2Part3")}
      </Typography.Text>
      <Typography.H3>{t("CrawlerInstructions.algorithmTitle")}</Typography.H3>
      <Typography.Text>{t("CrawlerInstructions.algorithmText1")}</Typography.Text>
      <Typography.Text>{t("CrawlerInstructions.algorithmText2")}</Typography.Text>
      <Typography.Text>{t("CrawlerInstructions.algorithmText3")}</Typography.Text>
      <Typography.Text>{t("CrawlerInstructions.algorithmText4")}</Typography.Text>
      <Typography.Text>{t("CrawlerInstructions.algorithmText5")}</Typography.Text>
      <WarningBlock>{t("CrawlerInstructions.warning1")}</WarningBlock>
      <WarningBlock>{t("CrawlerInstructions.warning2")}</WarningBlock>
      <Typography.H3>{t("CrawlerInstructions.thingsToTryTitle")}</Typography.H3>
      <Typography.Text>{t("CrawlerInstructions.thingsToTryText")}</Typography.Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CrawlerInstructions;