import React, { Component, startTransition } from 'react'
import { TextInput, Button, Text, View } from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

export default class Login extends Component {



  render() {
    return (
      <div className="App">
        
        <input type="text" id="user" />
        <br></br>
        <input type="text" id="pass" />
        <br></br>
        <Button title="log" onPress={log}></Button>
        <p id="log"></p>
      </div>
    )
  }
}
function log(){
  var usu=en($("#user").val())
  fetch("https://perfect-cream-wound.glitch.me/login/?user="+usu, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      $("#log").text(json.data)
      console.log(json.data)
    });
  }
