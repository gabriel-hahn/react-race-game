import React from 'react';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default Modal;
