import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, description, url } = action;
  switch (action.type) {
  case c.ADD_WORK:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        url: url,
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