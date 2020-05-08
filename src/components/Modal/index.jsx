import React, { useState } from 'react';
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
  const [username, setUsername] = useState('');

  const handleStartGame = (event) => {
    event.preventDefault();

    onStartGame(username);
  };

  const handleInputNameChanged = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <BackgroundContainer />
      <ModalContainer>
        <FormContainer>
          <InputTitle>Nome</InputTitle>
          <InputDescription onChange={handleInputNameChanged} placeholder="Ex: Airton Senna" />
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
