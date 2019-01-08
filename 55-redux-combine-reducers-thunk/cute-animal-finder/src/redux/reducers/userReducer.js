import { ADD_USER } from '../types';

const initialState = {
  users: [],
};


export default function userReducer(state = initialState, action) {
  console.log('%c userReducer', 'color: blue', state, action);
  switch(action.type) { // "ADD_USERR" // ADD_USERR
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    // case UPDATE_USER_EMAIL
    // case EDIT
    // case DELETE
    case "RESET":
      return initialState
    default:
      return state;
  }
}
