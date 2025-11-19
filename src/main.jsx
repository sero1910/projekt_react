
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importy Bootstrap, AOS, Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

// Import Twojego pliku CSS
import './styles/style.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);