import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import {Provider} from "react-redux";

import App from './App';
import {userActions} from "./pages/Chat/redux/actions";

import store from "./pages/Chat/redux/store"
import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css'
import "./pages/Chat/core/socket"
import { createBrowserHistory } from "history"
store.dispatch(userActions.fetchUserData());
export const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router history={history}>
          <App />
          </Router>
          </Provider>
        </React.StrictMode>,
  document.getElementById('root')
);


