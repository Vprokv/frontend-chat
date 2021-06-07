import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux";

import App from './App';
import {userActions} from "./pages/Chat/redux/actions";

import store from "./pages/Chat/redux/store"
import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css'
import "./pages/Chat/core/socket"

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
          <App />
          </Router>
          </Provider>
        </React.StrictMode>,
  document.getElementById('root')
);


