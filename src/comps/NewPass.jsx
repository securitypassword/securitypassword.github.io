import React, { Component, startTransition } from 'react'
import RandomPass from './RandomPass';
import $ from 'jquery'
import {en,de} from "./sec"

export default class NewPass extends Component {



    render() {
      return (
        <div className="NewPass">
          <RandomPass></RandomPass>
        </div>
      )
    }
  }