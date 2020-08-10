import React from 'react';
import { render } from '@testing-library/react';
import Author from './Author';

describe('<Author/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Author value="Joe Doe" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
