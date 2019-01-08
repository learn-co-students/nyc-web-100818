import { ADD_USER, UPDATE_ANIMAL } from './types';

const initialState = {
  users: [],
  animalSrc: null,
};

// Pure Function => very very pure function => same input, same output, no side effects
// don't do a fetch in here
                                // the current state in your store
export default function reducer(state = initialState, action) { // { object with a type and payload }
  switch(action.type) { // "ADD_USERR" // ADD_USERR
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    // case 0: // so not descrip[tive]
    //   return {...state}
    // case UPDATE_USER_EMAIL
    // case LIKE_ANIMAL
    // case DISLIKE_ANIMAL
    // case EDIT
    // case DELETE

    default:
      return state;
  }
}

export function userReducer(state = initialState, action) {
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

export function animalReducer(state = initialState, action) {
  console.log('%c animalReducer', 'color: pink', state, action);
  switch(action.type) { // "ADD_USERR" // ADD_USERR
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    // case 0: // so not descrip[tive]
    //   return {...state}
    // case LIKE_ANIMAL
    // case DISLIKE_ANIMAL
    case "RESET":
      return initialState
    default:
      return state;
  }
}
