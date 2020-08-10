import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { content } from "./reducers/content";
import { fetchContentEpic } from './epics'
import { catchError } from "rxjs/operators";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware();
const rootEpic = (action$: any) =>
  combineEpics(
    fetchContentEpic,
  )(action$).pipe(
    catchError((error: any, source: any) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return source;
    })
  );

function configureStore() {
    // configure middlewares
    const middlewares = [
        epicMiddleware,
    ];
    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );
    // create store
    return createStore(
        content,
        enhancer
    );
}

export const store = configureStore();

epicMiddleware.run(rootEpic);
