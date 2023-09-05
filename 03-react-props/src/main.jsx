import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App saludo='Hi' nombre='Delfines'/>
    <App saludo='Hola' nombre='Profesores'/>
  </React.StrictMode>,
)
