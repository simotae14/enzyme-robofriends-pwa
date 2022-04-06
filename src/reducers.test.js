import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
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

  it('should handle CHANGE_SEARCHFIELD action', () => {
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


describe('requestRobots', () => {
  // define the initial state
  const initialStateSearch = {
    robots: [],
    isPending: false,
  };
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      isPending: false,
    });
  });
  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(
      initialStateSearch,
      {
        type: REQUEST_ROBOTS_PENDING,
      }
    )).toEqual({
      robots: [],
      isPending: true,
    });
  });
  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(
      initialStateSearch,
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: '123',
          name: 'test',
          email: 'test@gmail.com',
        }],
      }
    )).toEqual({
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com',
      }],
      isPending: false,
    });
  });
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(
      initialStateSearch,
      {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'NOOOOOOOO!!!!!!!',
      }
    )).toEqual({
      error: 'NOOOOOOOO!!!!!!!',
      robots: [],
      isPending: false,
    });
  });
});
