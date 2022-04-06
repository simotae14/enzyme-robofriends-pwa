import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './types';

import * as actions from './actions';

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
