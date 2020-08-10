import React from 'react';
import { render } from '@testing-library/react';
import { NoDataWrapper } from './NoDataWrapper';

describe('<NoDataWrapper/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<NoDataWrapper/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
