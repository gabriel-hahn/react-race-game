import React from 'react';

import {
  FormContainer,
  BackgroundContainer,
  InputTitle,
  StartButton,
  ModalContainer,
  InputDescription,
} from './styles';

const Modal = ({ onStartGame }) => {
  const handleStartGame = (event) => {
    event.preventDefault();

    onStartGame();
  };

  return (
    <>
      <BackgroundContainer />
      <ModalContainer>
        <FormContainer>
          <InputTitle>Nome</InputTitle>
          <InputDescription placeholder="Ex: Airton Senna" />
          <StartButton onClick={handleStartGame}>Iniciar Corrida</StartButton>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;
