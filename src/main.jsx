import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '200px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

createRoot(document.getElementById('root')).render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)
