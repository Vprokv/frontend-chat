import React from 'react';
import {Route} from 'react-router-dom';
import {
    LoginForm,
    RegisterForm} from './components';
// import LoginForm from './components/LoginForm/components/LoginForm';
// import RegisterForm from './components/RegisterForm/components/RegisterForm';
import "./Auth.scss";
import CheckInfo from './components/ChekInfo/CheckInfo'

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path="/signIn" component={LoginForm} />
            <Route exact path="/signUp" component={RegisterForm} />
            <Route exact path="/signUp/verify" component={CheckInfo} />
        </div>
    </section>
);


export default Auth;