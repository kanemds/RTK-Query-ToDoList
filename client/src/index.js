import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from './features/api/apiSlice'

import { store } from './features/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={apiSlice}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ApiProvider> */}
  </React.StrictMode>
)
