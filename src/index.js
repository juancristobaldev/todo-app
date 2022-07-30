import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App.js';
import { SESSION_TOKEN } from './constants.js';
import { SessionProvider } from './context/SessionContext.js';
import { TodoProvider } from './context/TodoContext/TodoContext.js';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(SESSION_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? token : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    fetchOptions: {
      credentials: 'include',
    },
  }),
});

const container = document.getElementById('root');
render(
  <ApolloProvider client={client}>
    <SessionProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </SessionProvider>
  </ApolloProvider>,
  container,
  () => {
    console.log('rendered');
  }
);
