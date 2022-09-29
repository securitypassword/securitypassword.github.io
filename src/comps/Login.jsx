import React, { Component } from 'react'
import { TextInput, Button, Text, View } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" id="user" />
        <br></br>
        <input type="button" id="send" />
      </div>
    )
  }
}
