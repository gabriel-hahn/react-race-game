import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import GameplayContext from '../../context/gameplay';

import Obstacle from '../Obstacle';

import { Container } from './styles';

const OBSTACLES_LOOP_FRAME = 130;
const OBSTACLES_CREATION_FRAME = 800;
const HIT_POSITION = 8;
const LAST_OBSTACLE_POSITION = 12;
const NEXT_OBSTACLE_POSITION_MULT = 1.3;

let obstaclesLoop = null;
let obstaclesCreation = null;

const ObstaclesContainer = ({ checkObstaclesPositioning, hittedObstacles }) => {
  const [obstacles, setObstacles] = useState([]);
  const { paused } = useContext(GameplayContext);

  const updateObstaclesPosition = (previousObstacles) => (
    previousObstacles
      .filter((obstacle) => obstacle.position <= LAST_OBSTACLE_POSITION)
      .map((obstacle) => ({
        ...obstacle,
        position: obstacle.position + NEXT_OBSTACLE_POSITION_MULT,
      }))
  );

  const createNewRandomObstacle = () => {
    const randomNumber = Math.random() * 10; // Between 0 and 10.
    const roadPosition = randomNumber <= 3.5 ? -1 : (randomNumber <= 6.5 ? 0 : 1);
    const imageIndex = randomNumber > 5 ? 1 : 2;

    return {
      id: +randomNumber,
      roadPosition,
      imageIndex,
      position: 1,
    };
  };

  useEffect(() => {
    setObstacles((previousObstacles) => previousObstacles
      .filter((obstacle) => !hittedObstacles.has(obstacle.id)));
  }, [hittedObstacles.size]);

  useEffect(() => {
    if (paused) {
      clearInterval(obstaclesLoop);
      clearInterval(obstaclesCreation);
    } else {
      obstaclesLoop = setInterval(() => {
        setObstacles((previousObstacles) => updateObstaclesPosition(previousObstacles));
      }, OBSTACLES_LOOP_FRAME);

      obstaclesCreation = setInterval(() => {
        const newObstacle = createNewRandomObstacle();

        setObstacles((previousObstacles) => [...previousObstacles, newObstacle]);
      }, OBSTACLES_CREATION_FRAME);
    }

    return () => {
      clearInterval(obstaclesLoop);
      clearInterval(obstaclesCreation);
    };
  }, [paused]);

  useEffect(() => {
    const mightHitObstacles = obstacles.filter((obstacle) => obstacle.position >= HIT_POSITION);

    if (mightHitObstacles.length > 0) {
      checkObstaclesPositioning(mightHitObstacles);
    }
  }, [obstacles]);

  return obstacles.length > 0 ? (
    <Container>
      {obstacles.map(({
        id,
        imageIndex,
        position,
        roadPosition,
      }) => (
        <Obstacle
          key={id}
          imageIndex={imageIndex}
          position={position}
          roadPosition={roadPosition}
        />
      ))}
    </Container>
  ) : null;
};

ObstaclesContainer.propTypes = {
  checkObstaclesPositioning: PropTypes.func.isRequired,
  hittedObstacles: PropTypes.instanceOf(Set).isRequired,
};

export default ObstaclesContainer;
