import React    from 'react'
import ReactDOM from 'react-dom/client'
import App      from './App/'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App saludo="Buenas!!!">
      <h1>Buenaaaaaaas</h1>
      </App>
  </React.StrictMode>
)

