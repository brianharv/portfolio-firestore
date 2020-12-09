import * as c from './ActionTypes';

export const deleteWork = id => ({
  type: c.DELETE_WORK,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addWork = (work) => {
  const { name, description, id} = work;
  return {
    type: c.ADD_WORK,
    name: name,
    description: description,
    id: id
  }
}