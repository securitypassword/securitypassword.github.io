import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        
        <input type="text" id="user" />
        <br></br>
        <input type="button" id="send" value="actions" />
      </div>
    )
  }
}
