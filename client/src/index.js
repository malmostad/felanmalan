import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UpdateProvider } from './contexts/UpdateContext';
import { ThemeProvider } from 'styled-components';
import { Theme } from './globalstyles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <UpdateProvider>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </UpdateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
