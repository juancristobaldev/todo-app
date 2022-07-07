import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React from 'react';
import {render} from 'react-dom';
import { App } from './App.js';
import { TodoProvider } from './context/TodoContext/TodoContext.js';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query test {
      testField 
    }
  `
}).then(result => console.log(result));


const container = document.getElementById('root');
render(
  <ApolloProvider client={client}>
    <TodoProvider>
      <App/>
    </TodoProvider>
  </ApolloProvider>
  , container, () => {
  console.log('rendered');
});