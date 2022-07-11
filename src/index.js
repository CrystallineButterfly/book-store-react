import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import configureStore from './redux/configureStore';
import './index.css';
import BookStore from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <provider store={configureStore}>
      <BrowserRouter>
        <BookStore />
      </BrowserRouter>
    </provider>
  </React.StrictMode>,
);
