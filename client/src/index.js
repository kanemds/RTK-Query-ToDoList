import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from './features/api/apiSlice'

import { store, persistor } from './features/store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={apiSlice}> */}
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/* </ApiProvider> */}
  </React.StrictMode>
)
