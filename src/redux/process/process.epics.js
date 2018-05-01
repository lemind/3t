import { from } from 'rxjs/observable/from';

export const processEpics = {};

processEpics.updateBoardEpic = action$ => 
{
  action$.ofType('UPDATE_BOARD')
    .subscribe(res => {
      console.log(res)
    });

  return from([])
}