import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducer
// create store
// provider
// pass store to provider
// connect
// define how to map state to component props using mapStateToProps
// connect the component to Redux
// if updates are required add the ability to use the dispatch function

function valueReducer(
  state = "Hi from Redux. Your first of impression of me might be negative. But I am pretty cool. In a nerdy way.",
  action
) {
  debugger;
  switch (action.type) {
    case "UPDATE_INPUT_VALUE":
      return action.payload;
    default:
      return state;
  }
}

// console.log(
//   "Test reducer",
//   valueReducer(undefined, { type: "UPDATE_INPUT_VALUE", payload: "Hi Hi Hi" })
// );

console.log("Create store is :", createStore);

const store = createStore(
  valueReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Store is :", store);
console.log("The current state is :", store.getState());

setTimeout(() => {
  store.dispatch({ type: "UPDATE_INPUT_VALUE", payload: "Ciao" });
}, 2000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
