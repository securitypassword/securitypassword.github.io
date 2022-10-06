import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
export default class Switch extends Component {
    render() {
      return (
      <Button title={this.title} onPress={press} id={this.id+"button"}></Button>
      )
    }
}
var pressed=false;
function press(){
    this.pressed=!this.pressed
    if(pressed){
        
    }
}