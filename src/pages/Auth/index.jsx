import React from 'react';
import {Route} from 'react-router-dom';

import {LoginFormCont as Login} from "./components/LoginForm/containers/LoginForm"
import {RegisterFormCont as Register} from "./components/RegisterForm/containers/RegisterForm"
import "./Auth.scss";
import CheckInfo from './components/ChekInfo/CheckInfo'



const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/signIn" component={Login} />
            <Route exact path="/signUp" component={Register} />
            <Route exact path="/signUp/verify" component={CheckInfo} />
        </div>
    </section>
);


export default Auth;