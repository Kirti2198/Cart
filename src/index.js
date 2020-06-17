
import React , { StrictMode, useContext } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // whenever i use strict mode render will be printed two times
  // so don't use strict mode if you want the output as sir

  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);


