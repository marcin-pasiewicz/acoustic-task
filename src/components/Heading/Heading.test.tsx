import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('<Heading/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Heading value="Awesome heading" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
