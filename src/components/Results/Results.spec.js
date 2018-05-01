import React from 'react';
import { shallow } from 'enzyme';
import { ResultsComponent as Results } from './Results.component';

describe('Results', () => {

  beforeEach(() => {
  })

  test('should render Results', () => {
    expect(shallow(<Results process={ {} } />)).toMatchSnapshot();
  })
})
