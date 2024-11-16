import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import app component to be rendered here
import App from './App.jsx'
// use the imported App component containing the Greet component to be rendered in the below code
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// get the access to root element of index.html, then render the component
// described within - here we render our App.jsx