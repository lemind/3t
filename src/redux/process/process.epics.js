
export const processEpics = {};

processEpics.updateBoardEpic = action$ =>
  action$.ofType('UPDATE_BOARD')
    .map(action => {
      console.log('do update board epic');
    });