import React from 'react';
import { render } from '@testing-library/react';

import { GameplayProvider, initialState } from '../../context/gameplay';
import FinishedModal from '../../components/FinishedModal';

let component;

const contextState = {
  ...initialState,
  username: 'Gabriel',
  lifes: 2,
  laps: 10,
};

function renderComponent(state = contextState) {
  component = render(
    <GameplayProvider value={state}>
      <FinishedModal />
    </GameplayProvider>,
  );
}

describe('FinishedModal component', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('Should render FinishedModal component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render component with win information', async () => {
    const username = await component.findByText('Gabriel - Você ganhou!');
    const lifes = await component.findByText('2 Vida(s)');
    const laps = await component.findByText('10 Volta(s)');

    expect(username).toBeTruthy();
    expect(lifes).toBeTruthy();
    expect(laps).toBeTruthy();
  });

  it('Should render component with lose information', async () => {
    const state = {
      ...contextState,
      lifes: 0,
      laps: 3,
    };

    renderComponent(state);

    const username = await component.findByText('Gabriel - Você perdeu :/');
    const lifes = await component.findByText('0 Vida(s)');
    const laps = await component.findByText('3 Volta(s)');

    expect(username).toBeTruthy();
    expect(lifes).toBeTruthy();
    expect(laps).toBeTruthy();
  });
});
