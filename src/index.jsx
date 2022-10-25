import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Globalstyle from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>
);
