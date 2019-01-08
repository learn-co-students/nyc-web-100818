import React from "react";
import { connect } from "react-redux";

const EchoInput = ({ value }) => <p>From Echo: {value}</p>;

const mapStateToProps = state => {
  debugger;
  return { value: state };
};
const ConnectedEchoInput = connect(mapStateToProps)(EchoInput);

export default ConnectedEchoInput;
