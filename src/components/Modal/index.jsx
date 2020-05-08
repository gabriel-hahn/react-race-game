import React, { useState, useContext } from 'react';

import GameplayContext, { Actions as GameplayActions } from '../../context/gameplay';

import {
  FormContainer,
  BackgroundContainer,
  InputTitle,
  StartButton,
  ModalContainer,
  InputDescription,
} from './styles';

const Modal = () => {
  const [username, setUsername] = useState('');
  const { dispatch } = useContext(GameplayContext);

  const handleStartGame = (event) => {
    event.preventDefault();

    dispatch({ type: GameplayActions.START_GAME, payload: username });
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

export default Modal;
