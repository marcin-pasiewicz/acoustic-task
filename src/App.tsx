import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent } from './actions';
import { NoData } from './components/NoData/NoData'
import { getContentData, getContentError, isFetchingContent } from './selectors/content';
import Elements from './components/Elements/Elements';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { isEmpty } from './helpers/objectHelpers';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContentData);
  const error = useSelector(getContentError);
  const isFetching = useSelector(isFetchingContent);
  const { elements = {} } = content;

  useEffect(() => {
    dispatch(fetchContent('fa9519d5-0363-4b8d-8e1f-627d802c08a8'))
  }, [dispatch])

  if (error) {
    return <NoData text="Ooops. That is not good" />
  }

  if (isFetching) {
    return <Loader />
  }

  return (
    <ErrorBoundary>
      {isEmpty(elements)
        ? <NoData text="Ooops. No data to show" />
        : <Elements elements={elements} />
      }
    </ErrorBoundary>
  );
}
