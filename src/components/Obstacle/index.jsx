import React from 'react';
import PropTypes from 'prop-types';

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

Obstacle.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  roadPosition: PropTypes.number.isRequired,
};

export default Obstacle;
