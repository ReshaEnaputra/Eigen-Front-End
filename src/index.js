import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { NewsContextProvider } from "./context/NewsContext";

ReactDOM.render(
  <React.StrictMode>
    <NewsContextProvider>
      <Router>
        <App />
      </Router>
    </NewsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
