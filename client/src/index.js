import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UpdateProvider } from './contexts/UpdateContext';

ReactDOM.render(
  <React.StrictMode>
    <UpdateProvider>
      <App />
    </UpdateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
