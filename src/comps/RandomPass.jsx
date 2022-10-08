import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

var low=false;

export default class RandomPass extends Component {
  render() {
    return (
      <div className="RandomPass">
        <Switch  id="low"
                  value={low}  
                  onValueChange ={low=!low}></Switch> 
        <input type="numbre" id="genNum" placeholder="length" ></input>
        <br></br>
        <input type="text" id="genPass"></input>
        <Button title="generate" onPress={gen}></Button>
      </div>
    )
  }
}
function gen(){
  var low="true"
  var up=$("#genUp").getVal()
  console.log(up)
  var n="false"
  var num="false"
  var char="false"
  var len=$("#genNum").val()
  fetch("https://perfect-cream-wound.glitch.me/generate/?low="+low+"&up="+up+"&n="+n+"&num="+num+"&char="+char+"&len="+len, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      $("#genPass").val(de(json.data))
      console.log(de(json.data))
    });
}