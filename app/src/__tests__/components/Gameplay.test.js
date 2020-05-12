import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { addUserMutation } from '../../graphql/mutations/users';
import { GameplayProvider, initialState } from '../../context/gameplay';
import Gameplay from '../../components/Gameplay';

let component;

const contextState = {
  ...initialState,
  dispatch: jest.fn(),
};

const mocks = [
  {
    request: {
      query: addUserMutation,
    },
    result: { data: { id: '1' } },
  },
];

function renderComponent(state = contextState) {
  component = render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <GameplayProvider value={state}>
        <Gameplay />
      </GameplayProvider>
    </MockedProvider>,
  );
}

describe('Gameplay component', () => {
  it('Should render Gameplay component as snapshot', () => {
    renderComponent();
    expect(component).toMatchSnapshot();
  });

  it('Should not show gameplay component if game is over', () => {
    const state = {
      ...contextState,
      finished: true,
    };

    renderComponent(state);

    const gameplayContainer = component.getByTestId('finish-modal-container');

    expect(gameplayContainer).toBeTruthy();
  });
});
