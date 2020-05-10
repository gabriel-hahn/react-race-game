import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { GameplayProvider } from '../../context/gameplay';
import Main from '../../pages/Main';

let component;

function renderComponent(state = null) {
  component = render(
    <GameplayProvider value={state}>
      <Main />
    </GameplayProvider>,
  );
}

describe('Main page', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('Should render Main page as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render Main page with Modal component openned as default', async () => {
    const modalTitle = await component.findByText('Nome');

    expect(modalTitle).toBeTruthy();
  });
});
