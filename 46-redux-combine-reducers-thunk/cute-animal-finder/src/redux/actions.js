import UUID from 'uuid';
import { ADD_USER, UPDATE_ANIMAL } from './types';
import AnimalAdapter from '../apis/AnimalAdapter';

// universal unique identifier U U ID

export function addUserAction(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimalAction(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchAnimalAction() {
  return (dispatch) => {
    dispatch({ type: "FETCHING_ANIMAL" })
    AnimalAdapter.getDog()
      .then(url => {
        // this.setState({ url })
        // this.props.updateAnimal(url);
        dispatch(updateAnimalAction(url))
        dispatch({ type: "FETCHED_ANIMAL" })
        // how do i get that url???
        // return url
      })
    // await
  }
}


export function addUser(name, email, animalPreference) {
  return {
    type: ADD_USER,
    payload: { id: UUID(), name, email, animalPreference }
  }
}

export function updateAnimal(src) {
  return {
    type: UPDATE_ANIMAL,
    payload: src,
  }
}

export function fetchAnimal() {
  return (dispatch) => {
    dispatch({ type: "FETCHING_ANIMAL" })
    AnimalAdapter.getDog()
      .then(url => {
        dispatch(updateAnimalAction(url))
        dispatch({ type: "FETCHED_ANIMAL" })
      })
    // await
  }
}
