import React, { useContext } from 'react';

import GameplayContext from '../../context/gameplay';

import { Container, BackgroundContainer, InputTitle } from './styles';

const FinishedModal = () => {
  const { lifes, laps, username } = useContext(GameplayContext);

  return (
    <>
      <BackgroundContainer />
      <Container>
        <InputTitle>{username} - {lifes <= 0 ? 'You lose' : 'You win'}</InputTitle>
        <InputTitle>{laps} Laps</InputTitle>
        <InputTitle>{lifes} Lifes</InputTitle>
      </Container>
    </>
  );
};

export default FinishedModal;
