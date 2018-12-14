import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const apiAddress = 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages'





class App extends Component {
  state = {
    messages: [],
    intervalId: null
  }

  componentDidMount() {
    fetch(apiAddress).then(r => r.json()).then(messages => {
      this.setState({ messages })
    })
    let n = 0
    let intervalId = setInterval(() => {
      console.log(`Hi ${++n}`)
    }, 500)
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const { state: { messages } } = this
    return (
      <>
        <h1>Messages</h1>
        {messages.map(({ message }) => <p>{message}</p>)}
      </>
    );
  }


}

class Container extends Component {
  state = {
    renderMessages: false
  }

  render() {
    return (<>
      <h1 onClick={() => this.setState({ renderMessages: !this.state.renderMessages })}>Show messages?</h1>
      {this.state.renderMessages ? <App /> : null}
    </>)
  }
}

export default Container;
