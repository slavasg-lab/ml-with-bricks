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

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BLEProvider>
        <>
          <GlobalStyles />
          <PageLayout>
            <Routes>
              {/* Define a route for each page */}
              <Route path="/experiments/fruit-predictor" element={<FruitPredictorPage />} />
              <Route path="/experiments/ping-ponger" element={<PingPongerPage />} />
              <Route path="/experiments/crawler" element={<CrawlerPage />} />
              <Route path="/experiments" element={<ExperimentsPage />} />
              
              <Route path="*" element={<div><h2>404 Not Found</h2></div>} />
            </Routes>
          </PageLayout>
        </>
      </BLEProvider>
    </ThemeProvider>
  );
}

export default App;
