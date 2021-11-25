import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { UpdateProvider } from "./contexts/UpdateContext";
import { NavigationProvider } from "./contexts/NavigationContext";
import { ThemeProvider } from "styled-components";
import { Theme } from "./globalstyles/Theme";
import { ReportProvider } from "./contexts/ReportContext";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UpdateProvider>
        <NavigationProvider>
          <ReportProvider>
            <ThemeProvider theme={Theme}>
              <App />
            </ThemeProvider>
          </ReportProvider>
        </NavigationProvider>
      </UpdateProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
