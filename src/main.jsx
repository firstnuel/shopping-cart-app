import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store.js'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById('root')).render (
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>
)
