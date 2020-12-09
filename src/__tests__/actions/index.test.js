import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('help queue action', () => {
  it('toggelForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  
});