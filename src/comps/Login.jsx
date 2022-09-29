import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" id="user" />
        <input type="button" id="send" />
      </div>
    )
  }
}
