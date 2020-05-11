import React from 'react';
import { render } from '@testing-library/react';

import { GameplayProvider, initialState } from '../../context/gameplay';
import GameInfo from '../../components/GameInfo';

let component;

const contextState = {
  ...initialState,
  lifes: 2,
  laps: 3,
};

function renderComponent(state = contextState) {
  component = render(
    <GameplayProvider value={state}>
      <GameInfo />
    </GameplayProvider>,
  );
}

describe('GameInfo component', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('Should render GameInfo component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render component with plural form information', async () => {
    const lifes = await component.findByText('2 vidas');
    const laps = await component.findByText('3 voltas');

    expect(lifes).toBeTruthy();
    expect(laps).toBeTruthy();
  });

  it('Should render component with singular form information', async () => {
    const state = {
      ...contextState,
      lifes: 1,
      laps: 1,
    };

    renderComponent(state);

    const lifes = await component.findByText('1 vida');
    const laps = await component.findByText('1 volta');

    expect(lifes).toBeTruthy();
    expect(laps).toBeTruthy();
  });
});
