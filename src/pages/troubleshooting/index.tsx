import { useTranslation } from "react-i18next";
import Typography from "../../components/Typography/Typography";

const TroubleshootingPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography.H1>{t("Troubleshooting.title")}</Typography.H1>
      <Typography.Text>
        {t("Troubleshooting.intro")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("Troubleshooting.bluetoothQuestion")}
      </Typography.Text>
      <Typography.Text>
        {t("Troubleshooting.bluetoothAnswer")}
      </Typography.Text>
      <Typography.Text $bold>
        {t("Troubleshooting.chromiumQuestion")}
      </Typography.Text>
      <Typography.Text>
        {t("Troubleshooting.chromiumAnswer")}
      </Typography.Text>
    </div>
  );
};

export default TroubleshootingPage;
