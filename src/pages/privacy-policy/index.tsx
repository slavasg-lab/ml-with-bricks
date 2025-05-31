import { useTranslation } from "react-i18next";
import Typography from "../../components/Typography/Typography"; // Assuming this path is correct for your project
import InTextLink from "../../components/Links/InTextLink";


const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  // Define the variables to be interpolated.
  // You will need to replace these placeholder values with your actual information.
  const appName = "Your Website Name"; // e.g., "My Awesome App"
  const githubPrivacyPolicyLink =
    "https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"; // Or a more specific link if available
  const contactEmail = "your.email@example.com";
  const yourNameOrOrg = "Your Name or Organization Name";
  const yourStreet = "Your Street 123";
  const yourPLZCity = "12345 Your City";
  const githubIssuesLink = "https://github.com/your-username/your-repo/issues"; // Optional: Link to your GitHub issues page

  return (
    <div>
      {/* Main Title */}
      <Typography.H1>{t("PrivacyPolicy.title")}</Typography.H1>
      <Typography.Text>{t("PrivacyPolicy.effectiveDate")}</Typography.Text>

      {/* Section 1: Data Protection at a Glance */}
      <Typography.H2>{t("PrivacyPolicy.section1.title")}</Typography.H2>
      <Typography.Text $bold>
        {t("PrivacyPolicy.section1.generalNotes.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section1.generalNotes.paragraph1")}
      </Typography.Text>

      <Typography.H3>
        {t("PrivacyPolicy.section1.generalNotes.dataCollectionOnThisWebsite")}
      </Typography.H3>
      <Typography.Text $bold>
        {t("PrivacyPolicy.section1.generalNotes.whoResponsible")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section1.generalNotes.whoResponsibleAnswer")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section1.generalNotes.howDoWeCollect")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section1.generalNotes.howDoWeCollectAnswer")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section1.generalNotes.whatDoWeUseDataFor")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section1.generalNotes.whatDoWeUseDataForAnswer")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section1.generalNotes.yourRights")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section1.generalNotes.yourRightsAnswer")}
      </Typography.Text>

      {/* Section 2: Hosting (GitHub Pages) */}
      <Typography.H2>{t("PrivacyPolicy.section2.title")}</Typography.H2>
      <Typography.Text $markdown>
        {t("PrivacyPolicy.section2.paragraph1")}
      </Typography.Text>
      <Typography.Text $markdown>
        {t("PrivacyPolicy.section2.paragraph2", {
          githubPagesDataCollection: <InTextLink to={"https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection"}>GitHub</InTextLink>,
        })}
      </Typography.Text>
      <Typography.Text $markdown>
        {t("PrivacyPolicy.section2.paragraph3")}
      </Typography.Text>
      <Typography.Text $markdown>
        {t("PrivacyPolicy.section2.paragraph4")}
      </Typography.Text>

      {/* Section 3: General Information and Mandatory Disclosures */}
      <Typography.H2>{t("PrivacyPolicy.section3.title")}</Typography.H2>
      <Typography.Text $bold>
        {t("PrivacyPolicy.section3.dataProtection.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.dataProtection.paragraph1")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section3.responsibleParty.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.responsibleParty.paragraph1")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.responsibleParty.yourDetails", {
          yourNameOrOrg,
          yourStreet,
          yourPLZCity,
        })}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.responsibleParty.email", { contactEmail })}
      </Typography.Text>
      {/* Optional Link */}
      {githubIssuesLink && (
        <Typography.Text>
          {t("PrivacyPolicy.section3.responsibleParty.optionalLink", {
            githubIssuesLink,
          })}
        </Typography.Text>
      )}
      <Typography.Text>
        {t("PrivacyPolicy.section3.responsibleParty.paragraph2")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section3.dataRetention.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.dataRetention.paragraph1")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section3.legalBasis.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.legalBasis.paragraph1")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.legalBasis.paragraph2")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.legalBasis.paragraph3")}
      </Typography.Text>

      <Typography.Text $bold>
        {t("PrivacyPolicy.section3.sslEncryption.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section3.sslEncryption.paragraph1")}
      </Typography.Text>

      {/* Section 4: Data Collection on This Website */}
      <Typography.H2>{t("PrivacyPolicy.section4.title")}</Typography.H2>
      <Typography.Text $bold>
        {t("PrivacyPolicy.section4.cookiesLocalStorage.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section4.cookiesLocalStorage.paragraph1")}
      </Typography.Text>
      <ul>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.cookiesLocalStorage.listItem1")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.cookiesLocalStorage.listItem2")}
          </Typography.Text>
        </li>
      </ul>
      <Typography.Text>
        {t("PrivacyPolicy.section4.cookiesLocalStorage.importantInfo")}
      </Typography.Text>
      <ul>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.cookiesLocalStorage.listItem3")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.cookiesLocalStorage.listItem4")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.cookiesLocalStorage.listItem5")}
          </Typography.Text>
        </li>
      </ul>
      <Typography.Text>
        {t("PrivacyPolicy.section4.cookiesLocalStorage.paragraph2")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section4.serverLogFiles.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section4.serverLogFiles.paragraph1")}
      </Typography.Text>
      <ul>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem1")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem2")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem3")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem4")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem5")}
          </Typography.Text>
        </li>
        <li>
          <Typography.Text>
            {t("PrivacyPolicy.section4.serverLogFiles.listItem6")}
          </Typography.Text>
        </li>
      </ul>
      <Typography.Text>
        {t("PrivacyPolicy.section4.serverLogFiles.paragraph2")}
      </Typography.Text>

      {/* Section 5: Your Rights */}
      <Typography.H2>{t("PrivacyPolicy.section5.title")}</Typography.H2>
      <Typography.Text>
        {t("PrivacyPolicy.section5.paragraph1")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToInformation.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToInformation.paragraph1")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToRectificationDeletion.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToRectificationDeletion.paragraph1")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToObject.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToObject.paragraph1")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToComplain.heading")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToComplain.paragraph1")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToComplain.competentAuthority")}
      </Typography.Text>
      <Typography.Text>
        {t("PrivacyPolicy.section5.rightToComplain.authorityDetails")}
      </Typography.Text>

      <Typography.Text>
        {t("PrivacyPolicy.section5.paragraph2")}
      </Typography.Text>

      {/* Section 6: Changes to This Privacy Policy */}
      <Typography.H2>{t("PrivacyPolicy.section6.title")}</Typography.H2>
      <Typography.Text>
        {t("PrivacyPolicy.section6.paragraph1")}
      </Typography.Text>
    </div>
  );
};

export default PrivacyPolicyPage;
