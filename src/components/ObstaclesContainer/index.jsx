import React, { useState, useEffect } from 'react';

import Obstacle from '../Obstacle';

import { Container } from './styles';

const OBSTACLES_LOOP_FRAME = 130;

const ObstaclesContainer = () => {
  const [obstacles, setObstacles] = useState([]);

  const updateObstaclesPosition = (previousObstacles) => (
    previousObstacles
      .filter((obstacle) => obstacle.position <= 12)
      .map((obstacle) => ({ ...obstacle, position: obstacle.position + 1.3 }))
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

  useEffect(() => {
    const obstaclesLoop = setInterval(() => {
      setObstacles((previousObstacles) => {
        const obstaclesUpdated = updateObstaclesPosition(previousObstacles);

        return obstaclesUpdated;
      });
    }, OBSTACLES_LOOP_FRAME);

    const obstaclesCreation = setInterval(() => {
      const newObstacle = createNewRandomObstacle();

      setObstacles((previousObstacles) => [...previousObstacles, newObstacle]);
    }, 800);

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
