import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer';
import animalReducer from './animalReducer';

export default combineReducers({
  user: userReducer,
  animal: animalReducer,
})
