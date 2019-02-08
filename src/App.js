import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo';
import clientGraphql from './Graphql';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import './App.css';
import TestComponent from './components/test';
import { Navbar as NavBarComponent } from './common/Navbar';
import NoMatch from './common/NoMatch';
import RegisterForm from './components/FormRegister';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={clientGraphql}>
        <Router>
          <React.Fragment>
            <NavBarComponent />
            <Switch>
              <Route exact path="/" component={TestComponent} />
              <Route path="/singup" component={RegisterForm} />
              <Route component={NoMatch} />
            </Switch>
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
