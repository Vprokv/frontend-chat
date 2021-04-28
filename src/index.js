import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";

import App from './App';

import store from "../src/redux/store"
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
        <App />
    </Router>
        </React.StrictMode>,
  document.getElementById('root')
);


