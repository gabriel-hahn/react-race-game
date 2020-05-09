import React, { useEffect, useState, useContext } from 'react';

import GameplayContext, { Actions as GameplayActions } from '../../context/gameplay';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Gameplay from '../../components/Gameplay';

import { Container, BackgroundContainer } from './styles';

let startGameInterval;
let username;

const Main = () => {
  const [isCounterToStart, setIsCounterToStart] = useState(false);
  const [startCounter, setStartCounter] = useState(3);
  const { paused, startGame, dispatch } = useContext(GameplayContext);

  const action = useKeyboardControls();

  const handleStartGameplay = () => {
    setStartCounter(3);
    setIsCounterToStart(false);
    clearInterval(startGameInterval);

    dispatch({ type: GameplayActions.START_GAME, payload: username });
  };

  useEffect(() => {
    if (action === controls.pause && startGame) {
      dispatch({ type: GameplayActions.PAUSE_CONTINUE });
    }
  }, [action]);

  useEffect(() => {
    if (startCounter === 0) {
      handleStartGameplay();
    }
  }, [startCounter]);

  const handleStartCounter = (name) => {
    setIsCounterToStart(true);

    username = name;

    startGameInterval = setInterval(() => {
      setStartCounter((previousState) => previousState - 1);
    }, 1000);
  };

  return (
    <Container>
      <BackgroundContainer />
      {(!startGame && !isCounterToStart) && <Modal onStartGame={handleStartCounter} />}
      {(!!paused || !!isCounterToStart) && <Alert content={paused ? 'Pausado' : startCounter.toString()} />}
      {!!startGame && <Gameplay />}
    </Container>
  );
};

export default Main;
