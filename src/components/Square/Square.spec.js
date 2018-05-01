import React from 'react';
import { shallow } from 'enzyme';
import { SquareComponent } from './Square.component';

describe('Square', () => {

  beforeEach(() => {
  })

  test('should render SquareComponent', () => {
    expect(shallow(<SquareComponent />)).toMatchSnapshot();
  })
})
