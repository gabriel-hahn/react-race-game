import React from 'react';
import PropTypes from 'prop-types';

import Obstacle1 from '../../assets/images/obstacle_1.png';
import Obstacle2 from '../../assets/images/obstacle_2.png';

import { Container, ObstacleImage } from './styles';

const Obstacle = ({ imageIndex, position, roadPosition }) => {
  const image = imageIndex === 1 ? Obstacle1 : Obstacle2;

  return (
    <Container>
      <ObstacleImage src={image} position={position} roadPosition={roadPosition} />
    </Container>
  );
};

Obstacle.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  roadPosition: PropTypes.number.isRequired,
};

export default Obstacle;
