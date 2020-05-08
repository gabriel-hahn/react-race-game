import React, { useContext } from 'react';

import GameplayContext from '../../context/gameplay';
import { controls } from '../../enums/CarControls';

import Car from '../Car';
import GameInfo from '../GameInfo';
import ObstaclesContainer from '../ObstaclesContainer';

import { Container } from './styles';

const hittedObstacles = new Set();
let carPosition = controls.middle;

const Gameplay = () => {
  const { handleLostLife } = useContext(GameplayContext);

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
      <GameInfo />
      <ObstaclesContainer
        hittedObstacles={hittedObstacles}
        checkObstaclesPositioning={checkObstaclesPositioning}
      />
      <Car checkCarPositioning={checkCarPositioning} />
    </Container>
  );
};

export default Gameplay;
