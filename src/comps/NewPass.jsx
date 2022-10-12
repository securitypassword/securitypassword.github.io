import React, { Component, startTransition } from 'react'
import RandomPass from './RandomPass';
import $ from 'jquery'
import {en,de} from "./sec"

export default class NewPass extends Component {



    render() {
      return (
        <div className="NewPass">
          <RandomPass></RandomPass>
          <input type="text" id="newPassName" placeholder='name'></input> 
          <Button title="save" onPress={savePass}></Button>
        </div>
      )
    }
  }
  function savePass(){
    var pass=$("#genPass")
    var name=$("#newPassName")
    console.log(pass+" "+name)
  }