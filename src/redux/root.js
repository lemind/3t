import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { processReducer, processEpics } from './process/index';

export const rootReducer = combineReducers({
  process: processReducer
});

export const rootEpic = combineEpics(
  processEpics.updateBoardEpic
);
