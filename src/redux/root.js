import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { movesReducer, movesEpics } from './moves/index';

export const rootReducer = combineReducers({
  moves: movesReducer
});

export const rootEpic = combineEpics(
  ...movesEpics
);
