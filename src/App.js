import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "./services/apollo"; 
import TodoList from "./TodoList";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={ApolloClient}>
          <TodoList />
      </ApolloProvider>
    );
  }
}

export default App;
