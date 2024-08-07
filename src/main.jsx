import React from 'react';
import ReactDOM from 'react-dom/client';

import { HandballApp } from './HandballApp';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HandballApp />
    </BrowserRouter>
  </React.StrictMode>,
)
