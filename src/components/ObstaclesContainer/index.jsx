import React, { useState, useEffect } from 'react';

import Obstacle from '../Obstacle';

import { Container } from './styles';

const OBSTACLES_LOOP_FRAME = 130;
const OBSTACLES_CREATION_FRAME = 800;
const HIT_POSITION = 7;
const LAST_OBSTACLE_POSITION = 12;
const NEXT_OBSTACLE_POSITION_MULT = 1.3;

const ObstaclesContainer = ({ checkObstaclesPositioning, hittedObstacles }) => {
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    setObstacles((previousObstacles) => previousObstacles
      .filter((obstacle) => !hittedObstacles.has(obstacle.id)));
  }, [hittedObstacles.size]);

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
    const imageIndex = randomNumber % 2 === 0 ? 1 : 2;

    return {
      id: +randomNumber,
      roadPosition,
      imageIndex,
      position: 1,
    };
  };

  const filterHitCheckObstacles = (previousObstacles) => (
    previousObstacles.filter((obstacle) => obstacle.position >= HIT_POSITION)
  );

  useEffect(() => {
    const obstaclesLoop = setInterval(() => {
      setObstacles((previousObstacles) => {
        const obstaclesUpdated = updateObstaclesPosition(previousObstacles);

        checkObstaclesPositioning(filterHitCheckObstacles(obstaclesUpdated));

        return obstaclesUpdated;
      });
    }, OBSTACLES_LOOP_FRAME);

    const obstaclesCreation = setInterval(() => {
      const newObstacle = createNewRandomObstacle();

      setObstacles((previousObstacles) => [...previousObstacles, newObstacle]);
    }, OBSTACLES_CREATION_FRAME);

    return () => {
      clearInterval(obstaclesLoop);
      clearInterval(obstaclesCreation);
    };
  }, []);

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

export default ObstaclesContainer;
