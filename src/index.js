import React from 'react';
import ReactDOM from 'react-dom';

import InitialRoutes from './view/initialRoutes.js';
import "./Reset.css"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <InitialRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
