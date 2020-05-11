import React from 'react';
import { render } from '@testing-library/react';

import Alert from '../../components/Alert';

describe('Alert component', () => {
  it('Should render Alert component as snapshot', () => {
    const component = render(<Alert content="Content test" />);

    expect(component).toMatchSnapshot();
  });

  it('Should render Alert component with content prop provided', async () => {
    const component = render(<Alert content="Content test" />);
    const alertMessage = await component.findByText('Content test');

    expect(alertMessage).toBeInTheDocument();
  });
});
