import React, { useEffect, useState, useContext } from 'react';

import GameplayContext from '../../context/gameplay';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import Gameplay from '../../components/Gameplay';

import { Container, BackgroundContainer } from './styles';

let startGameInterval;

const Main = () => {
  const [isCounterToStart, setIsCounterToStart] = useState(false);
  const [startCounter, setStartCounter] = useState(3);
  const action = useKeyboardControls();
  const {
    paused,
    startGame,
    handlePauseGame,
    handleStartGame,
  } = useContext(GameplayContext);

  const handleStartGameplay = () => {
    setStartCounter(3);
    setIsCounterToStart(false);
    clearInterval(startGameInterval);

    handleStartGame();
  };

  useEffect(() => {
    if (action === controls.pause && startGame) {
      handlePauseGame();
    }
  }, [action]);

  useEffect(() => {
    if (startCounter === 0) {
      handleStartGameplay();
    }
  }, [startCounter]);

  const handleStartCounter = () => {
    setIsCounterToStart(true);

    startGameInterval = setInterval(() => {
      setStartCounter((previousState) => previousState - 1);
    }, 1000);
  };

  return (
    <Container>
      <BackgroundContainer />
      {(!startGame && !isCounterToStart) && <Modal onStartGame={handleStartCounter} />}
      {(!!paused || !!isCounterToStart) && <Alert content={paused ? 'Pausado' : startCounter} />}
      {!!startGame && <Gameplay />}
    </Container>
  );
};

export default Main;
