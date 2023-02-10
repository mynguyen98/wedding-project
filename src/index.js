import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Snowfall from 'react-snowfall'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Snowfall
      color='#E29C67'
      snowflakeCount={40}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
    />
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
