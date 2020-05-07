import React from 'react';

import Car from '../../components/Car';

import { Container, BackgroundContainer, GameContainer } from './styles';

const Main = () => {
  return (
    <Container>
      <BackgroundContainer />
      <GameContainer>
        <Car />
      </GameContainer>
    </Container>
  );
};

export default Main;
