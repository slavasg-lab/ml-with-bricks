import { useTranslation } from "react-i18next";
import Typography from "../../components/Typography/Typography";
import InTextLink from "../../components/Links/InTextLink";
import ExperimentCard from "../../components/Cards/ExperimentCard";
import { styled } from "styled-components";

const experiments = ["fruit-predictor", "ping-ponger", "crawler"];

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography.H1>{t("Home.title")}</Typography.H1>
      <Typography.Text>
        {t("Home.text.part1")}
        <InTextLink to="https://www.lego.com/en-lu/product/lego-education-spike-prime-set-45678">
          {t("Home.text.lego")}
        </InTextLink>
        {t("Home.text.part2")}
      </Typography.Text>
      <Typography.H3>{t("Experiments.title")} 🧪</Typography.H3>
      <CardGrid>
        {experiments.map((el) => (
          <ExperimentCard key={el} expId={el} />
        ))}
      </CardGrid>
      <Typography.H3>{t("Home.courseRecordingTitle")} 📹</Typography.H3>
      <Typography.Text>{t("Home.courseRecordingText")}</Typography.Text>
      <div style={{ flex: 1, borderRadius: 10, overflow: "hidden", margin: 0, aspectRatio: "16/9" }}>
        <iframe
          style={{ borderWidth: 0, aspectRatio: "16/9" }}
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/videoseries?si=o9tvPwSMyEbBw9rm&list=PLaA3pdUzmaV-oJ0QABOJssZ5MxFRIY_hu"
          title={t("Home.coursePlaylistTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Typography.H3>{t("Home.materialsTitle")} 📖</Typography.H3>
      <Typography.Text>
        {t("Home.materialsText.part1")}
        <InTextLink to={`./materials/de/presentation.pdf`}>
          {t("Home.presentationsGerman")}
        </InTextLink>
        {t("Home.materialsText.part2")}
        <InTextLink to={`./materials/en/presentation.pdf`}>
          {t("Home.presentationsEnglish")}
        </InTextLink>
        .
      </Typography.Text>
      <Typography.H3>{t("Home.developers")} ⌨️</Typography.H3>
      <Typography.Text>
        {t("Home.developersText.part1")}
        <InTextLink to="https://github.com/slavasg-lab/ml-with-bricks">
          {t("Home.developersText.github")}
        </InTextLink>
        {t("Home.developersText.part2")}
        <InTextLink to="https://github.com/slavasg-lab/ml-with-bricks">
          {t("Home.developersText.boilerplate")}
        </InTextLink>{" "}
        {t("Home.developersText.part3")}
      </Typography.Text>
      <Typography.H3>{t("Home.troubleshooting")} 🚧</Typography.H3>
      <Typography.Text>
        {t("Home.troubleshootingText.part1")}
        <InTextLink to="/#/troubleshooting">
          {t("Home.troubleshootingText.link")}
        </InTextLink>{" "}
        {t("Home.troubleshootingText.part2")}
        <InTextLink to="mailto:viacheslav.sydora@gmail.com">
          viacheslav.sydora@gmail.com
        </InTextLink>
        .
      </Typography.Text>
    </div>
  );
};

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 20px 0;
  gap: 20px;
  grid-auto-rows: 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1600px) {
    grid-template-columns: 1fr;
  }
`;

export default HomePage;
