import React, { useContext } from 'react';

import GameplayContext from '../../context/gameplay';

import { Container, InfoText } from './styles';

const GameInfo = () => {
  const { lifes, laps } = useContext(GameplayContext);

  return (
    <Container>
      <InfoText>{lifes} {+lifes === 1 ? 'vida' : 'vidas'}</InfoText>
      <InfoText>{laps} {+laps > 1 ? 'voltas' : 'volta'}</InfoText>
    </Container>
  );
};

export default GameInfo;
