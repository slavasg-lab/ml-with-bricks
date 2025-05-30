import PageLayout from "./layouts/PageLayout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/themes";
import { GlobalStyles } from "./themes/globalStyles";
import BLEProvider from "./contexts/BLEContext";
import { Route, Routes } from "react-router-dom";
import FruitPredictorPage from "./pages/experiments/fruit-predictor";
import PingPongerPage from "./pages/experiments/ping-ponger";
import CrawlerPage from "./pages/experiments/crawler";
import ExperimentsPage from "./pages/experiments";
import HomePage from "./pages/home";
import ImprintPage from "./pages/imprint";
import PrivacyPolicyPage from "./pages/privacy-policy";
import MaterialsPage from "./pages/materials";
import TroubleshootingPage from "./pages/troubleshooting";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BLEProvider>
        <>
          <GlobalStyles />
          <PageLayout>
            <Routes>
              {/* Define a route for each page */}
              <Route
                path="/experiments/fruit-predictor"
                element={<FruitPredictorPage />}
              />
              <Route
                path="/experiments/ping-ponger"
                element={<PingPongerPage />}
              />
              <Route path="/experiments/crawler" element={<CrawlerPage />} />
              <Route path="/experiments" element={<ExperimentsPage />} />

              <Route path="/imprint" element={<ImprintPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/materials" element={<MaterialsPage />} />
              <Route
                path="/troubleshooting"
                element={<TroubleshootingPage />}
              />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </PageLayout>
        </>
      </BLEProvider>
    </ThemeProvider>
  );
}

export default App;
