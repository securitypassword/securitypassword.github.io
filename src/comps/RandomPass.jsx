import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
import Switcher from './Switcher'
import $ from 'jquery'
import {en,de} from "./sec"

export default class RandomPass extends Component {
  render() {
    return (
      <div className="RandomPass">
        <Switcher></Switcher>
        <p id="pass"></p>
        <Button title="generate" onPress={gen}></Button>
      </div>
    )
  }
}
function gen(){
  var low="true"
  var up="false"
  var n="false"
  var num="false"
  var char="false"
  var len=9
  fetch("https://perfect-cream-wound.glitch.me/generate/?low="+low+"&up="+up+"&n="+n+"&num="+num+"&char="+char+"&len="+len, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      $("#pass").text(de(json.data))
      console.log(de(json.data))
    });
}