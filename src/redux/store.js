import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import sagas from '../sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const reduxDevTool = () => {
  return typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;
};

const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    ),
    reduxDevTool()
  )
);

sagaMiddleware.run(sagas);

export { history };
export { store };
export default store;
