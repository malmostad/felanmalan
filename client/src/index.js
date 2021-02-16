import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UpdateProvider } from './contexts/UpdateContext'
import { ThemeProvider } from 'styled-components'
import { Theme } from './globalstyles/Theme'
import { ReportProvider, StateProvider } from './contexts/ReportContext'

ReactDOM.render(
  <React.StrictMode>
    <UpdateProvider>
      <ReportProvider>
        <StateProvider>
          <ThemeProvider theme={Theme}>
            <App />
          </ThemeProvider>
        </StateProvider>
      </ReportProvider>
    </UpdateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
