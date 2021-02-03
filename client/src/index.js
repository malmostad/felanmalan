import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UpdateProvider } from './contexts/UpdateContext';
import { ThemeProvider } from 'styled-components';
import { Theme } from './globalstyles/Theme';
import { ReportProvider } from './contexts/ReportContext';

ReactDOM.render(
  <React.StrictMode>
    <UpdateProvider>
      <ReportProvider>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </ReportProvider>
    </UpdateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
