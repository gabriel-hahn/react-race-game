import React from 'react';

import Car from '../../components/Car';

import { BackgroundContainer, GameContainer } from './styles';

const Main = () => {
  return (
    <>
      <BackgroundContainer />
      <GameContainer>
        {/* Car components and the rest here */}
        <Car />
      </GameContainer>
    </>
  );
};

export default Main;
