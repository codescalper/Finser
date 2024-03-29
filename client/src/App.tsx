import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBar from "@/pages/appbar";
import Dashboard from "@/pages/dashbaord";
import Predictions from "./pages/predicition";
import InputData from "./pages/InputData";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />{" "}
          {/* This is used to provide a consistent styling accross different browser -> Does by resetting default CSS styles */}
          <div
            style={{
              width: "100%",
              height: "100%",
              padding: "1rem 2rem 4rem 2rem",
            }}
          >
            {" "}
            {/* Rem stands for Root em unit the unit is relative not absolute */}
            <AppBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/inputData" element={<InputData />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
