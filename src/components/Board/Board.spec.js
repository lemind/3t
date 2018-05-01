import React from 'react';
import { shallow, mount } from 'enzyme';
import { BoardComponent as Board } from './Board.component';

describe('Board', () => {

  beforeEach(() => {
  })

  test('should render Board', () => {
    const squares = []
    expect(shallow(<Board process={ { squares } } />)).toMatchSnapshot();
  })

  test('should call appropriate action when game started', () => {
    const startGame = jest.fn();
    const setWinner = jest.fn();
    const updateBoard = jest.fn();
    const squares = [0,1,2,3,4,5,6,7,8];
    const props = {
      process: {
        squares,
        winner: null
      },
      startGame,
      setWinner,
      updateBoard
    }

    const component = mount(<Board {...props} />);

    component.find('[data-id=0] button').simulate('click');

    expect(startGame).toBeCalled();
    squares[0] = 'X';
    expect(updateBoard).toHaveBeenCalledWith(squares);
  })

  test('should call appropriate action when game finished', () => {
    const startGame = jest.fn();
    const setWinner = jest.fn();
    const updateBoard = jest.fn();
    const squares = ["X", "O", "X", 3, "O", 5, 6, 7, 8];
    const props = {
      process: {
        squares,
        winner: null
      },
      startGame,
      setWinner,
      updateBoard
    }

    const component = mount(<Board {...props} />);

    component.find('[data-id=3] button').simulate('click');

    expect(setWinner).toHaveBeenCalledWith('O');
  })

})
