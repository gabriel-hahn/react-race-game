import React from 'react';

import { contentCdn } from '../../styles/content';

import { Container, ObstacleImage } from './styles';

const Obstacle = ({ imageIndex, position, roadPosition }) => {
  const imagemPath = contentCdn[`obstacle_${imageIndex}`];

  return (
    <Container>
      <ObstacleImage src={imagemPath} position={position} roadPosition={roadPosition} />
    </Container>
  );
};

export default Obstacle;
