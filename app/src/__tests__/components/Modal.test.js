import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { getUsersQuery } from '../../graphql/queries/users';
import Modal from '../../components/Modal';

const props = {
  onStartGame: jest.fn(),
};

const mocks = [
  {
    request: {
      query: getUsersQuery,
    },
    result: { data: {
      users: [{ id: 1, name: 'Gabriel', laps: 2, lifes: 10 }],
    } },
  },
];

let component;

describe('GameInfo component', () => {
  beforeEach(() => {
    component = render((
      <MockedProvider addTypename={false} mocks={mocks}>
        <Modal {...props} />
      </MockedProvider>
    ));
  });

  it('Should render Modal component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render correct input username on change', () => {
    const usernameInput = component.getByTestId('username');

    fireEvent.change(usernameInput, { target: { value: 'A' } });

    expect(usernameInput.value).toEqual('A');
  });

  it('Should disable start game button when username is empty', () => {
    const { container } = component;
    const startGameButton = container.querySelector('button');

    expect(startGameButton).toHaveAttribute('disabled', '');
  });

  it('Should enable start game after username is filled', () => {
    const { container } = component;
    const usernameInput = component.getByTestId('username');
    const startGameButton = container.querySelector('button');

    fireEvent.change(usernameInput, { target: { value: 'A' } });

    expect(startGameButton).not.toHaveAttribute('disabled');
  });
});
