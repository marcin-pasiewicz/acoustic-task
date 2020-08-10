import React from 'react';
import { render } from '@testing-library/react';
import MainImage from './MainImage';

describe('<MainImager/>', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MainImage
      value={{
        leadImage: {
          url: 'some url',
          asset: {
            altText: 'altText',
            fileName: 'fileName',
          }
        }}
      } />);
    expect(asFragment()).toMatchSnapshot();
  });
});
