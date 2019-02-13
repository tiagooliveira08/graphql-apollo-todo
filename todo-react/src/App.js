import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "./services/apollo"; 
import TodoList from "./TodoList";
import Hook from "./Hook";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
          <Hook />
      </ApolloProvider>
    );
  }
}

export default App;
