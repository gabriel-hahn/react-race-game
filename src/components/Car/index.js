import React, { useEffect, useState } from 'react';

import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { controls } from '../../enums/CarControls';

import { Container, CarImage } from './styles';

const Car = () => {
  const [carDirection, setCarDirection] = useState('');
  const action = useKeyboardControls();

  useEffect(() => {
    if (action === controls.left || action === controls.middle || action === controls.right) {
      setCarDirection(action);
    }
  }, [action]);

  return (
    <Container>
      <CarImage carDirection={carDirection} />
    </Container>
  );
};

export default Car;
