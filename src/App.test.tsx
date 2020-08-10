import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import * as contetnSelectors from './selectors/content';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn(),
}));

const testData = {
  elements: { "heading": { "elementType": "text", "value": "Staffordshire Terrier Pups" }}
}

const setup = ({ isFetching = false, data = testData, error = null } = {}) => {
  jest.spyOn(contetnSelectors, 'getContentData').mockReturnValue(data);
  jest.spyOn(contetnSelectors, 'getContentError').mockReturnValue(error);
  jest.spyOn(contetnSelectors, 'isFetchingContent').mockReturnValue(isFetching);
};

describe('<App/>', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly with data', () => {
    setup()
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly with error', () => {
    setup({error: 'error'})
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly with loader', () => {
    setup({isFetching: true})
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
