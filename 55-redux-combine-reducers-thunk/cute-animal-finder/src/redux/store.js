import { createStore, applyMiddleware } from 'redux'; // Pure JavaScript
import reducer from './reducers';
import thunk from 'redux-thunk';

// In order to create a store, I need a reducer
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
