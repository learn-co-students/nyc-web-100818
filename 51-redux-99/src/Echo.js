import React from "react";
import MyInput from "./Input";
import EchoInput from "./EchoInput";

class Echo extends React.Component {
  render() {
    const { handleChange } = this;
    return (
      <>
        <MyInput />
        <EchoInput />
      </>
    );
  }
}

export default Echo;
