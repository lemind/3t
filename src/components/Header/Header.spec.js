import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header.component';

describe('Header', () => {

  beforeEach(() => {
  })

  test('should render HeaderComponent', () => {
    expect(shallow(<HeaderComponent />)).toMatchSnapshot();
  })
})
