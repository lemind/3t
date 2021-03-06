import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';

import styles from './app.less';

import { rootReducer, rootEpic } from './redux/root';

import { HeaderContainer as Header } from './components/Header/Header.container';
import { BoardContainer as Board } from './components/Board/Board.container';
import { ResultsContainer as Results } from './components/Results/Results.container';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = process.env.NODE_ENV
  ? applyMiddleware(epicMiddleware)
  : composeWithDevTools(
    applyMiddleware(epicMiddleware)
  );

const store = createStore(
  rootReducer,
  middleware
);

const renderApp = () => (
  render(
    <Provider store={store}>
      <div className="container">
        <Header />
        <div className="board-block">
          <Board />
        </div>
        <div className="results-block">
          <Results />
        </div>
      </div>
    </Provider>,
    document.getElementById('app')
  )
);

renderApp();