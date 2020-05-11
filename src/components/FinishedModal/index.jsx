import React, { useContext } from 'react';

import GameplayContext from '../../context/gameplay';

import { Container, BackgroundContainer, InputTitle } from './styles';

const FinishedModal = () => {
  const { lifes, laps, username } = useContext(GameplayContext);

  return (
    <>
      <BackgroundContainer />
      <Container data-testid="finish-modal-container">
        <InputTitle>{username} - {lifes <= 0 ? 'Você perdeu :/' : 'Você ganhou!'}</InputTitle>
        <InputTitle>{laps} Volta(s)</InputTitle>
        <InputTitle>{lifes} Vida(s)</InputTitle>
      </Container>
    </>
  );
};

export default FinishedModal;
