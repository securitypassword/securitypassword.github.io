import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
import Switch from './Switch';
import $ from 'jquery'
import {en,de} from "./sec"

export default class RandomPass extends Component {
  render() {
    return (
      <div className="RandomPass">
        <Switch title="a"></Switch>
        <input type="text" id="pass" placeholder="password"></input>
        <Button title="generate" onPress={gen}></Button>
      </div>
    )
  }
}
  function gen(){

  }