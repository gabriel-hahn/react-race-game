import React, { useEffect, useContext } from 'react';

import GameplayContext from '../../context/gameplay';
import { controls } from '../../enums/CarControls';

import Car from '../Car';
import GameInfo from '../GameInfo';
import FinishedModal from '../FinishedModal';
import ObstaclesContainer from '../ObstaclesContainer';

import { Container } from './styles';

const LAP_INTERVAL = 20000;
const hittedObstacles = new Set();
let carPosition = controls.middle;

const Gameplay = () => {
  const { handleLostLife, handleIncrementLap, finished } = useContext(GameplayContext);

  useEffect(() => {
    const lapInterval = setInterval(() => {
      handleIncrementLap();
    }, LAP_INTERVAL);

    return () => {
      clearInterval(lapInterval);
    };
  }, []);

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
    <>
      {finished ? <FinishedModal /> : (
        <Container>
          <GameInfo />
          <ObstaclesContainer
            hittedObstacles={hittedObstacles}
            checkObstaclesPositioning={checkObstaclesPositioning}
          />
          <Car checkCarPositioning={checkCarPositioning} />
        </Container>
      )}
    </>
  );
};

export default Gameplay;
