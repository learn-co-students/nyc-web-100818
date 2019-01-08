import React from "react";
import { connect } from "react-redux";

const MyInput = ({ value, updateInputValue }) => (
  <input
    onChange={event => updateInputValue(event.target.value)}
    type="text"
    value={value}
  />
);

const mapStateToProps = state => {
  debugger;
  return { value: state };
};
const mapDispatchToProps = dispatch => {
  debugger;
  return {
    updateInputValue: value => {
      dispatch({ type: "UPDATE_INPUT_VALUE", payload: value });
    }
  };
};

const ConnectedMyInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyInput);

export default ConnectedMyInput;
