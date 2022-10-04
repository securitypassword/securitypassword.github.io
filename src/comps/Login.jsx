import React, { Component, startTransition } from 'react'
import $ from 'jquery'

export default class Login extends Component {
  render() {
    start()
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

function start(){
  $("#send").click(function(){
    codes()
    console.log("iwi")
  })
}

function codes(){
  fetch("https://perfect-cream-wound.glitch.me/" , {method : 'GET'})
  .then(function(response) { return response.json(); })
    .then(function(json) {
      $("#log").innerHTML=json.data
      $("#log").value=json.data
      console.log("uwu")
});
}