
export const movesEpics = {};

movesEpics.doEpic = action$ =>
  action$.ofType('DO')
    .map(action => {
      console.log('do epic');
    });