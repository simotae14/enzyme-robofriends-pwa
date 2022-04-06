import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './types';

import * as reducers from './reducers';

describe('searchRobots', () => {
  // define the initial state
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    // reducer takes as argument state and action
    // in our case state is undefined
    // and the action is empty
    // our ideal state is searchField like an empty string
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(
      initialStateSearch,
      {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc',
      }
    )).toEqual({
      searchField: 'abc',
    });
  });
});
