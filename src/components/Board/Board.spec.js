import React from 'react';
import { shallow } from 'enzyme';
import { BoardComponent as Board } from './Board.component';

describe('Board', () => {

  beforeEach(() => {
  })

  test('should render Board', () => {
    const squares = []
    expect(shallow(<Board process={ { squares } } />)).toMatchSnapshot();
  })
})
