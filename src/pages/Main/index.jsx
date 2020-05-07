import React, { useEffect, useContext } from 'react';

import GameplayContext from '../../context/gameplay';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import Car from '../../components/Car';
import Modal from '../../components/Modal';
import Paused from '../../components/Paused';
import ObstaclesContainer from '../../components/ObstaclesContainer';

import { Container, BackgroundContainer, GameContainer } from './styles';

const Main = () => {
  const action = useKeyboardControls();
  const {
    paused,
    startGame,
    handlePauseGame,
    handleStartGame,
  } = useContext(GameplayContext);

  useEffect(() => {
    if (action === controls.pause && startGame) {
      handlePauseGame();
    }
  }, [action]);

  const handleStartGameplay = () => {
    handleStartGame();
  };

  return (
    <Container>
      <BackgroundContainer />
      {!startGame && <Modal onStartGame={handleStartGameplay} />}
      {!!paused && <Paused />}
      {!!startGame && (
        <GameContainer>
          <ObstaclesContainer />
          <Car />
        </GameContainer>
      )}
    </Container>
  );
};

export default Main;
