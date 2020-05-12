import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';

import Scores from '../Scores';

import { getUsersQuery } from '../../graphql/queries/users';

import {
  FormContainer,
  BackgroundContainer,
  InputTitle,
  ModalContainer,
  InputDescription,
  ButtonsContainer,
  Button,
} from './styles';

const Modal = ({ onStartGame }) => {
  const [username, setUsername] = useState('');
  const [showScores, setShowScores] = useState(false);

  const [getUsers, { data: usersData }] = useLazyQuery(getUsersQuery);

  const handleStartGame = (event) => {
    event.preventDefault();

    onStartGame(username);
  };

  const handleInputNameChanged = (event) => {
    setUsername(event.target.value);
  };

  const toggleShowScores = async (event) => {
    event.preventDefault();

    setShowScores(!showScores);

    getUsers();
  };

  return (
    <>
      <BackgroundContainer />
      <ModalContainer>
        <FormContainer>
        <InputTitle>{showScores ? 'Pontuações' : 'Nome'}</InputTitle>
          {showScores ? (
            <Scores scores={usersData} />
          ) : (
            <InputDescription
              data-testid="username"
              maxLength="12"
              value={username}
              onChange={handleInputNameChanged}
              placeholder="Ex: Airton Senna"
            />
          )}
          <ButtonsContainer>
            {!showScores && <Button disabled={!username} onClick={handleStartGame}>Iniciar Corrida</Button>}
            <Button onClick={toggleShowScores}>{showScores ? 'Voltar' : 'Pontuações'}</Button>
          </ButtonsContainer>
        </FormContainer>
      </ModalContainer>
    </>
  );
};

Modal.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default Modal;
