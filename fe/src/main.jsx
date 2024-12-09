import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import '../i18n.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
