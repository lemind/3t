import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResultsComponent as Results } from './Results.component';

describe('Results', () => {

  beforeEach(() => {
  })

  test('should render Results', () => {
    expect(shallow(<Results process={ {} } />)).toMatchSnapshot();
  })

  test('should render appropriate status when game is new', () => {
    const props = {
      process: {
        started: false,
        winner: null
      }
    }

    const component = mount(<Results {...props} />);

    const res = component.find('.results__status').text();

    expect(res).toBe('Ready to start')
  })

  test('should render appropriate status when game in progress', () => {
    const props = {
      process: {
        started: true,
        winner: null
      }
    }

    const component = mount(<Results {...props} />);

    const res = component.find('.results__status').text();

    expect(res).toBe('In progress')
  })

  test('should render appropriate status when score is draw', () => {
    const props = {
      process: {
        started: true,
        winner: 'draw'
      }
    }

    const component = mount(<Results {...props} />);

    const res = component.find('.results__status').text();

    expect(res).toBe('Draw')
  })

  test('should render appropriate status when you are winner', () => {
    const props = {
      process: {
        started: true,
        winner: 'X'
      }
    }

    const component = mount(<Results {...props} />);

    const res = component.find('.results__status').text();

    expect(res).toBe('You win!')
  })

  test('should render appropriate status when you are winner', () => {
    const props = {
      process: {
        started: true,
        winner: 'O'
      }
    }

    const component = mount(<Results {...props} />);

    const res = component.find('.results__status').text();

    expect(res).toBe('You lose')
  })

})
