import { UPDATE_ANIMAL } from '../types';

const initialState = {
  animalSrc: null,
  isLoaded: false
};


export default function animalReducer(state = initialState, action) {
  console.log('%c animalReducer', 'color: pink', state, action);
  switch(action.type) { // "ADD_USERR" // ADD_USERR
    case UPDATE_ANIMAL:
      return { ...state, animalSrc: action.payload };
    // case 0: // so not descrip[tive]
    //   return {...state}
    // case LIKE_ANIMAL
    // case DISLIKE_ANIMAL
    case "FETCHING_ANIMAL":
      return { ...state, isLoaded: false }
    case "FETCHED_ANIMAL":
      return { ...state, isLoaded: true }
    case "RESET":
      return initialState
    default:
      return state;
  }
}
