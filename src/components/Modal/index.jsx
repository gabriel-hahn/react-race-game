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
          <InputTitle>Name</InputTitle>
          <InputDescription placeholder="E.g: Airton Senna" />
          <StartButton onClick={handleStartGame}>Start</StartButton>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default Modal;
