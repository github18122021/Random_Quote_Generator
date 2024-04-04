// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const client = new QueryClient();

// disabled strict mode to do not exceed the api call limit
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
  // </React.StrictMode>,
)
