
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { SignUp } from '../components/signup/index';
import { Login } from '../components/Login/index';
import { Posts, PostDetail }  from '../components/Posts/index';
import TestComponent from '../components/test';
import isAuthenticated from '../isAuthenticated';
import NoMatchComponent from '../common/NoMatch';

const Logout = () => {
    localStorage.removeItem("postsToken")
    return <Redirect to="/login" />
}


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest} render={
        (props) => (
            isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
        )
    }>
    </Route>
)

export default [
    <Route exact path="/" component={TestComponent} />,
    <Route exact path="/login" component={Login} />,
    <PrivateRoute exact path="/posts" component={Posts} />,
    <PrivateRoute path="/posts/:id" component={PostDetail} />,
    <Route path="/signup" component={SignUp} />,
    <Route component={NoMatchComponent}/>
]

