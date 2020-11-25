import React from 'react';
import ReactDOM from 'react-dom';
import './modules/styles/index.css';
import Board from './modules/Board';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.querySelector('.root'),
);
