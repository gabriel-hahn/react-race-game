import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent, wait } from '@testing-library/react';

import { GameplayProvider, initialState } from '../../context/gameplay';
import Main from '../../pages/Main';

let component;

const contextState = {
  ...initialState,
  dispatch: jest.fn(),
};

function renderComponent(state = contextState) {
  component = render(
    <MockedProvider addTypename={false}>
      <GameplayProvider value={state}>
        <Main />
      </GameplayProvider>
    </MockedProvider>
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

  it('Should show counter when fill username and press the start game button', () => {
    const { container } = component;
    const inputUsername = container.querySelector('input');
    const startButton = container.querySelector('button');

    fireEvent.change(inputUsername, { target: { value: 'Gabriel' } });
    fireEvent.click(startButton);

    expect(component.getByTestId('alert')).toBeTruthy();
  });

  it('Should render Gameplay component after 4 seconds (counter from 3)', async () => {
    const { container } = component;
    const inputUsername = container.querySelector('input');
    const startButton = container.querySelector('button');

    fireEvent.change(inputUsername, { target: { value: 'Gabriel' } });
    fireEvent.click(startButton);

    await wait(() => expect(component.getByTestId('gameplay')).toBeTruthy(), { timeout: 3000 });
  });
});
