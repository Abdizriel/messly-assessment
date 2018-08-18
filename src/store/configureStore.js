import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import rootEpic from './epics';

export const history = createHistory();
function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [
    thunk,
    reactRouterMiddleware,
    epicMiddleware,
  ];

  epicMiddleware.run(rootEpic);

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [
    thunk,
    reactRouterMiddleware,
    epicMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  epicMiddleware.run(rootEpic);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;