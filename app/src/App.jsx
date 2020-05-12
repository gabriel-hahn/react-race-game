import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle from './styles/global';

import { client } from './config/graphql';
import { GameplayProvider } from './context/gameplay';
import Main from './pages/Main';

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <GameplayProvider>
      <Main />
    </GameplayProvider>
  </ApolloProvider>
);

export default App;
