import React, { Component, startTransition } from 'react'
import { TextInput, Button, Text, View } from 'react-native'
import $ from 'jquery'

export default class Login extends Component {



  render() {
    return (
      <div className="App">
        
        <TextInput id="user"></TextInput>
        <br></br>
        <Button title="data" onPress={data}></Button>
        <Button title="message" onPress={message}></Button>
        <p id="log"></p>
      </div>
    )
  }
}
function data(){
  fetch("https://perfect-cream-wound.glitch.me/" , {method : 'GET'})
  .then(function(response) { return response.json(); })
    .then(function(json) {
      $("#log").text(json.data)
      console.log(json.data)
    });
  }
  function message(){
    fetch("https://perfect-cream-wound.glitch.me/" , {method : 'GET'})
    .then(function(response) { return response.json(); })
      .then(function(json) {
        $("#log").text(json.message)
        console.log(json.message)
      });
    }