import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// how to set state
// 1
// state update not computed on prev state
// this.setSTate({...obj that describes the new state. This will be merged with the old state})
// 1
// state update computed based prev state
// const cb = (currentState,currentProps)=> {return obj describing the new state}
// this.setSTate(cb)
// 3
// Do something after that was updated
// const cb = () => {run after state was updated}
// this.setState({use case 1 or 2}, cb)

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { n: 1 }
  // }

  // constructor(props) {
  //   super(props)
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  state = { n: 1 }

  // componentDidMount() {
  //   setTimeout(() => {
  //     // code to update state
  //     // no, no, no
  //     //this.state = { n: 2 }
  //     this.setState({ n: this.state.n + 1 })
  //   }, 1000)
  // }

  handleIncrement = () => {
    // setTimeout(() => {
    //   for (let i = 0; i < 100; i++) {
    //     this.setState({ n: this.state.n + 1 })
    //   }
    // }, 1000)
    console.log("Before the update", this.state)
    this.setState((currentState) => ({ n: currentState.n + 1 }), () => {
      console.log("After the state update ", this.state)
    })

  }

  // handleIncrement() {
  //   this.setState({ n: this.state.n + 1 })
  // }

  render() {
    //const { state: { n } } = this
    return (
      <h1 onClick={this.handleIncrement}>{this.state.n}</h1>
    );
  }
}

export default App;
