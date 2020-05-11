import React from 'react';
import { render } from '@testing-library/react';

import { GameplayProvider, initialState } from '../../context/gameplay';
import ObstaclesContainer from '../../components/ObstaclesContainer';

let component;

const contextState = {
  ...initialState,
  dispatch: jest.fn(),
};

const props = {
  checkObstaclesPositioning: jest.fn(),
  hittedObstacles: new Set([
    {
      id: 1,
      imageIndex: 2,
      position: 3,
      roadPosition: 1,
    },
  ]),
};

function renderComponent(state = contextState) {
  component = render(
    <GameplayProvider value={state}>
      <ObstaclesContainer {...props} />
    </GameplayProvider>,
  );
}

describe('ObstaclesContainer component', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('Should render ObstaclesContainer component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
