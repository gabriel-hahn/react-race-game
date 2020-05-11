/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { GameplayProvider, initialState } from '../../context/gameplay';
import Car from '../../components/Car';

let component;

const contextState = {
  ...initialState,
  dispatch: jest.fn(),
};

let props;

function renderComponent(state = contextState) {
  props = {
    checkCarPositioning: jest.fn(),
  };

  component = render(
    <GameplayProvider value={state}>
      <Car {...props} />
    </GameplayProvider>,
  );
}

describe('Car component', () => {
  beforeEach(() => {
    renderComponent();
  });

  it('Should render Car component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should invoke "checkCarPositioning" function when positioning is changed', () => {
    fireEvent.keyDown(document, { key: 'A' });

    expect(props.checkCarPositioning).toHaveBeenCalledTimes(1);
  });

  it('Should not change car position when an invalid key is pressed', () => {
    fireEvent.keyDown(document, { key: 'K' });

    expect(props.checkCarPositioning).toHaveBeenCalledTimes(0);
  });

  it('Should not change car position when game is paused', async () => {
    const state = { ...contextState, paused: true };

    renderComponent(state);

    fireEvent.keyDown(document, { key: 'A' });

    expect(props.checkCarPositioning).toHaveBeenCalledTimes(0);
  });
});
