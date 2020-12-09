import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux'; // takes object as argument
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer, // The key represents the state slice while the value represents the reducer
  firestore: firestoreReducer
});

export default rootReducer;