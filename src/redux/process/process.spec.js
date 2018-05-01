import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './../../redux/root';
import { reducer, initialState } from './../../redux/process/process.reducer';
import { processActions } from '../../redux/process/index';

const store = createStore(
  rootReducer
);

describe('Licenses', () => {

  beforeEach(() => {
  })

  test('should return initial state', () => {
    const res = reducer(undefined, {
      type: 'TEST'
    });

    expect(res).toEqual(initialState)
  })

  test('should set approptiate data for StartGame action', () => {
    store.dispatch(processActions.startGame())
    const res = store.getState();
    expect(res.process.started).toBe(true)
  })

  test('should set approptiate data for setWinner action', () => {
    const winner = 'X'
    store.dispatch(processActions.setWinner(winner))
    const res = store.getState();
    expect(res.process.winner).toBe(winner)
  })

  test('should set approptiate data for updateBoard action', () => {
    const board = ['X',1,3,4,5,6,7,8]
    store.dispatch(processActions.updateBoard(board))
    const res = store.getState();
    expect(res.process.squares).toEqual(board)
  })

  test('should set approptiate data for resetGame action', () => {
    store.dispatch(processActions.resetGame())
    const res = store.getState();
    expect(res.process).toEqual(initialState)
  })
})
