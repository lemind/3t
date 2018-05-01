import { actions } from './process.actions';
import { reducer, initialState } from './process.reducer';
import { processEpics } from './process.epics';

export {
  actions as processActions,
  reducer as processReducer,
  processEpics,
}
