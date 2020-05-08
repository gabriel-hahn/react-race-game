import React, { useEffect, useState, useContext } from 'react';

import GameplayContext from '../../context/gameplay';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import Car from '../../components/Car';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';
import GameInfo from '../../components/GameInfo';
import ObstaclesContainer from '../../components/ObstaclesContainer';

import { Container, BackgroundContainer, GameContainer } from './styles';

const hittedObstacles = new Set();
let carPosition = controls.middle;
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
    handleLostLife,
  } = useContext(GameplayContext);

  const handleStartGameplay = () => {
    setIsCounterToStart(false);
    setStartCounter(3);
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

  const checkCarPositioning = (position) => {
    carPosition = position;
  };

  const checkObstaclesPositioning = (obstacles) => {
    obstacles.forEach(({ id, roadPosition }) => {
      const obstaclePosition = roadPosition === -1
        ? controls.left
        : (roadPosition === 0
          ? controls.middle
          : controls.right);

      if (obstaclePosition === carPosition) {
        hittedObstacles.add(id);

        handleLostLife();
      }
    });
  };

  return (
    <Container>
      <BackgroundContainer />
      {(!startGame && !isCounterToStart) && <Modal onStartGame={handleStartCounter} />}
      {(!!paused || !!isCounterToStart) && <Alert content={paused ? 'Pausado' : startCounter} />}
      {!!startGame && (
        <GameContainer>
          <GameInfo />
          <ObstaclesContainer
            hittedObstacles={hittedObstacles}
            checkObstaclesPositioning={checkObstaclesPositioning}
          />
          <Car checkCarPositioning={checkCarPositioning} />
        </GameContainer>
      )}
    </Container>
  );
};

export default Main;
