import React from 'react';
import ReactDOM from 'react-dom/client';

import { HandballApp } from './HandballApp';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
        <BrowserRouter>
          <HandballApp />
      </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
