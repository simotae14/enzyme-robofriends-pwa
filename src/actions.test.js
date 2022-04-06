import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './types';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

// test the first action
describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'wooo'; // searchTearm
    expect(actions.setSearchField(text)).toEqual({
      type: CHANGE_SEARCHFIELD,
      payload: 'wooo',
    });
  });
});

describe('requestRobots', () => {
  it('handle requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: REQUEST_ROBOTS_PENDING,
    });
  });
});
