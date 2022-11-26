import React, { Component, startTransition } from 'react'
import {Button} from 'react-native'
import RandomPass from './RandomPass';
import $ from 'jquery'
import InputGroup from 'react-bootstrap/InputGroup';
import {en,de} from "./sec"
import './GetPass.css'

var varsGet=""

function NewPass(vars) {
  varsGet=vars
      return (
        <center>
        <section className="NewPass">
          <RandomPass></RandomPass>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Titulo</InputGroup.Text>
            <input type="text" id="logUser" /> 
          </InputGroup>      
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Contraseña</InputGroup.Text>
            <input type="text" id="logPass" /> 
          </InputGroup>    
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">URL</InputGroup.Text>
            <input type="text" id="url" /> 
          </InputGroup>  
          <Button title="save" onPress={savePass}></Button>
        </section>          
        </center>

      )
    
  }
  function savePass(){
    var usu_id=de(varsGet.vars.usu_id)
    var pass=$("#genPass").val()
    var name=$("#newPassName").val()
    if(pass!=""&&usu_id!=""){
      usu_id=parseInt(usu_id)
      console.log(pass+" "+name)
      pass=en(pass)
      name=en(name)
      fetch("https://securitypassword.cyclic.app/savePass/?usu_id="+usu_id+"&pass="+pass+"&name="+name, {method : 'GET',})
      .then(function(response) {
        return response.json(); })
        .then(function(json) {
          if(json.data!=""){
            console.log(de(json.data))
          }
      })
    }
  }

  export default NewPass;