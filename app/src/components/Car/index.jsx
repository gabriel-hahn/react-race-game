import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import GameplayContext from '../../context/gameplay';

import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import { Container, CarImage } from './styles';

const Car = ({ checkCarPositioning }) => {
  const [carDirection, setCarDirection] = useState('');
  const { paused } = useContext(GameplayContext);
  const action = useKeyboardControls();

  useEffect(() => {
    if (paused) {
      return;
    }

    if (action === controls.left || action === controls.middle || action === controls.right) {
      setCarDirection(action);
      checkCarPositioning(action);
    }
  }, [action]);

  return (
    <Container>
      <CarImage data-testid="car-image" carDirection={carDirection} />
    </Container>
  );
};

Car.propTypes = {
  checkCarPositioning: PropTypes.func.isRequired,
};

export default Car;
