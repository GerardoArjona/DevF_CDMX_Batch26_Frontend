import React, { Component } from 'react';
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo';
import clientGraphql from './Graphql';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TestComponent from './components/test';
import { Navbar as NavBarComponent } from './common/Navbar';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={clientGraphql}>
        <NavBarComponent />
        <div><h1>hola</h1></div>
        <TestComponent />
      </ApolloProvider>
    );
  }
}

export default App;
