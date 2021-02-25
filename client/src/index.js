import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie'
import { UpdateProvider } from './contexts/UpdateContext'
import { ThemeProvider } from 'styled-components'
import { Theme } from './globalstyles/Theme'
import { ReportProvider } from './contexts/ReportContext'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UpdateProvider>
        <ReportProvider>
          <ThemeProvider theme={Theme}>
            <App />
          </ThemeProvider>
        </ReportProvider>
      </UpdateProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
