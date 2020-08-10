import React from 'react';
import { render } from '@testing-library/react';
import { NoData } from './NoData';

describe('<NoData/>', () => {
  it('renders correctly with text props', () => {
    const { asFragment } = render(<NoData text="Some text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly without text props', () => {
    const { asFragment } = render(<NoData />);
    expect(asFragment()).toMatchSnapshot();
  });
});
