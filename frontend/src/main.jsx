import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Baris ini SANGAT PENTING untuk menghubungkan CSS ke program
import './cek transaksi/cek_transaksi.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)