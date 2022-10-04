import React, { Component, startTransition } from 'react'
import { TextInput, Button, Text, View } from 'react-native'
import $ from 'jquery'

export default class Login extends Component {



  render() {
    codes()
    return (
      <div className="App">
        
        <TextInput id="user"></TextInput>
        <br></br>
        <Button title="fissh" onPress={send}></Button>
        <p id="log"></p>
      </div>
    )
  }
}
function send(){
  codes()
  console.log("iwi")
}

function codes(){
  fetch("https://perfect-cream-wound.glitch.me/" , {method : 'GET'})
  .then(function(response) { return response.json(); })
    .then(function(json) {
      $("#log").text(json.data)
      $("#log").value=json.data
      console.log(json.data)
      console.log("uwu")
});
}