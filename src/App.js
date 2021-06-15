import React from 'react';
import {connect} from "react-redux";
import {Route, Redirect, Switch} from 'react-router-dom';

import {Auth, Home} from './pages';



const App = props => {
    const { isAuth } = props;
    return (
        <div className="wrapper">
            <Switch>
                <Route
                    exact
                    path={["/signIn", "/signUp", "/signUp/verify"]}
                    component={Auth} />
                <Route
                    path={["/", "/dialog:id"]}
                    render={() => (  <Home /> )}
                    render={() => ( isAuth ? <Home /> : <Redirect to="/signIn" />)}
                />
            </Switch>
        </div>
    );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);

// export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
//
// const App = props => {
//     const { isAuth } = props;
//     return (
//         <div className="wrapper">
//             <Switch>
//                 <Route
//                     exact
//                     path={["/signIn", "/signUp", "/signUp/verify"]}
//                     component={Auth} />
//                 <Route
//                     path={["/", "/dialog:id"]}
//                     render={() => (  <Home /> )}
//                     render={() => ( isAuth ? <Home /> : <Redirect to="/signIn" />)}
//                 />
//             </Switch>
//         </div>
//     );
// };
//
// export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);