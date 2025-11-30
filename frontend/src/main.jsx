import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import UIUXApp from './UIUXAPP.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* Default route */}
      <Route path="/" element={<App />} />
      
      {/* New UI/UX route */}
      <Route path="/uiux" element={<UIUXApp />} />
    </Routes>
  </BrowserRouter>
)
