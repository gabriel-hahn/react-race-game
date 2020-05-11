import React, { useEffect, useContext, memo } from 'react';

import GameplayContext, { Actions as GameplayActions } from '../../context/gameplay';
import { controls } from '../../enums/CarControls';

import Car from '../Car';
import GameInfo from '../GameInfo';
import FinishedModal from '../FinishedModal';
import ObstaclesContainer from '../ObstaclesContainer';

import { Container } from './styles';

const LAP_INTERVAL = 20000;
const MAX_LAPS = 10;
const hittedObstacles = new Set();
let carPosition = controls.middle;
let lapInterval = null;

const Gameplay = () => {
  const {
    finished,
    lifes,
    laps,
    paused,
    dispatch,
  } = useContext(GameplayContext);

  useEffect(() => {
    if (paused || finished) {
      clearInterval(lapInterval);
    } else {
      lapInterval = setInterval(() => {
        dispatch({ type: GameplayActions.INCREASE_LAP });
      }, LAP_INTERVAL);
    }

    return () => {
      clearInterval(lapInterval);
    };
  }, [paused, finished]);

  useEffect(() => {
    if (laps === MAX_LAPS) {
      dispatch({ type: GameplayActions.FINISH_GAME });
    }
  }, [laps]);

  useEffect(() => {
    if (lifes <= 0) {
      dispatch({ type: GameplayActions.FINISH_GAME });

      setTimeout(() => {
        dispatch({ type: GameplayActions.RESTART });
      }, 4000);
    }
  }, [lifes]);

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

        dispatch({ type: GameplayActions.DECREASE_LIFE });
      }
    });
  };

  return (
    <>
      {finished ? <FinishedModal /> : (
        <Container data-testid="gameplay">
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

export default memo(Gameplay);
