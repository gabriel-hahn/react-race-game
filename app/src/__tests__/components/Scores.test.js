import React from 'react';
import { render } from '@testing-library/react';

import Scores from '../../components/Scores';

let component;

const scores = {
  users: [
    {
      id: 1,
      name: 'Gabriel',
      laps: 3,
      lifes: 0
    },
    {
      id: 2,
      name: 'Ana',
      laps: 10,
      lifes: 2,
    }
  ]
};

function renderComponent(props) {
  component = render(<Scores scores={props} />);
}

describe('Scores component', () => {
  beforeEach(() => {
    renderComponent(scores);
  });

  it('Should render Scores component as snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render Scores component with scores prop provided (3 children - 1 Header and 2 results)', async () => {
    const scoresContainerEl = component.getByTestId('scores-container');

    expect(scoresContainerEl.children.length).toEqual(3);
  });

  it('Should render Loading component if scores is not provided', () => {
    renderComponent();

    const loadingContainerEl = component.getByTestId('loading-container');

    expect(loadingContainerEl).toBeTruthy();
  });
});
