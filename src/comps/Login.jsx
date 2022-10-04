import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    codes()
    return (
      <div className="App">
        
        <input type="text" id="user" />
        <br></br>
        <input type="button" id="send" value="action" />
      </div>
    )
  }
}

function codes(){
  fetch("https://glitch.com/~perfect-cream-wound")
  .then((response) => response.json())  
	.then((message) => console.log(message));
  console.log("owo")
  fetch("https://glitch.com/~perfect-cream-wound")
  .then((response) => console.log(response));
  console.log("ewe")
  fetch("https://perfect-cream-wound.glitch.me/")
  .then((response) => console.log(response));
  console.log("iwi");
}