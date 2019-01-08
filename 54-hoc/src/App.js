import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const ListItem = props => {
  return <li>{props.item}</li>;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const withRelaxation = Component => {
  class Relax extends React.Component {
    state = {
      count: 0
    };

    render() {
      //debugger;
      return (
        <div
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.state.count > 3 ? (
            <li>Relax</li>
          ) : (
            <Component {...this.props} />
          )}
        </div>
      );
    }
  }
  Relax.displayName = `WithRelaxation(${getDisplayName(Component)})`;
  return Relax;
};

const HocListItem = withRelaxation(ListItem);

class App extends React.Component {
  state = {
    lists: ["a", "b", "c"]
  };

  render() {
    return (
      <>
        <h1>Your List</h1>
        <ul>
          {this.state.lists.map((lI, i) => (
            <HocListItem key={i} item={lI} />
          ))}
        </ul>
      </>
    );
  }
}

const MyComponent = props => {
  debugger;
  return <h1>{props.message}</h1>;
};

const ParentComponent = props => <MyComponent {...props} />;

export default ParentComponent;
