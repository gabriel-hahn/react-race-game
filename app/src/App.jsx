import React from 'react';

import GlobalStyle from './styles/global';

import { GameplayProvider } from './context/gameplay';

import Main from './pages/Main';

const App = () => (
  <>
    <GlobalStyle />
    <GameplayProvider>
      <Main />
    </GameplayProvider>
  </>
);

export default App;
