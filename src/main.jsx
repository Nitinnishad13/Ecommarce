import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import { AuthProvider } from './context/AuthContext.jsx'
import { AuthContextProvider } from "./context/authContext.jsx";


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App/>
  </AuthProvider>,
)
