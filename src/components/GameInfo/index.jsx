import React, { useContext } from 'react';

import GameplayContext from '../../context/gameplay';

import { Container, InfoText } from './styles';

const GameInfo = () => {
  const { lifes, laps } = useContext(GameplayContext);

  return (
    <Container>
      <InfoText>{lifes} Lifes</InfoText>
      <InfoText>Lap {laps}</InfoText>
    </Container>
  );
};

export default GameInfo;
