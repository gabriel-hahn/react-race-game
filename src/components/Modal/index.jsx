import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import GameplayContext from '../../context/gameplay';

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
  const { handleUsernameAdd } = useContext(GameplayContext);

  const handleStartGame = (event) => {
    event.preventDefault();

    handleUsernameAdd(username);

    onStartGame();
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
