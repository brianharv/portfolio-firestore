import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, description } = action;
  switch (action.type) {
  case c.ADD_WORK:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        id: id
      }
    });
  case c.DELETE_WORK:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};