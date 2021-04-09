import React from 'react';
import {Route} from 'react-router-dom';

import {Home} from './pages';

import './App.css';
import {LoginForm} from "./modules";


function App() {
    return (
        <div className="wrapper">
            <Route exact path={["/", "/login"]} component={LoginForm} />
            <Route exact path={["/im"]} component={Home} />
        </div>
    );
}

export default App;
