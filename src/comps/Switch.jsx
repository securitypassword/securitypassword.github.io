import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
export default class Switch extends Component {
    render() {
      return (
      <Button title={this.title} onPress={this.pressed=!this.pressed} id={this.id+"button"}></Button>
      )
    }
}
var pressed=false;