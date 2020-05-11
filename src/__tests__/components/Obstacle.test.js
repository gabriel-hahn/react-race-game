import React from 'react';
import { render } from '@testing-library/react';

import Obstacle from '../../components/Obstacle';

const props = {
  imageIndex: 1,
  position: 2,
  roadPosition: 3,
};

let component;

describe('Obstacle component', () => {
  beforeEach(() => {
    component = render(<Obstacle {...props} />);
  });

  it('Should render Obstacle component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
