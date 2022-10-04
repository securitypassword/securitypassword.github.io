import React, { Component } from 'react'
import $ from 'jquery'

export default class Login extends Component {
  render() {
    codes()
    return (
      <div className="App">
        
        <input type="text" id="user" />
        <br></br>
        <input type="button" id="send" value="action" />
        <p id="log"></p>
      </div>
    )
  }
}

function codes(){
  fetch("https://perfect-cream-wound.glitch.me/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.message)
    $("#log").innerHTML=data.message
  });
}