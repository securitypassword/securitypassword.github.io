import React, { Component, startTransition } from 'react'
import $ from 'jquery'
import {en,de} from "./sec"

export default class RandomPass extends Component {



    render() {
      return (
        <div className="RandomPass">
          <input type="text" id="pass" placeholder="password"></input>
          <input type="button" value="generate"></input>
        </div>
      )
    }
  }