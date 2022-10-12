import React, { Component} from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

export default class GetPass extends Component {

  render() {
    return (
      <div className="App">
        <Button id="getPassBtn" title="get password" onPress={getPass}></Button>
        <table id="getPassTable"></table>
      </div>
    )
  }
}
function getPass(){
  var usu_id=parseInt($("#logId").text())
  var resJson=""
  fetch("https://securitypassword.cyclic.app/getRegisters/?usu_id="+usu_id, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      var data=de(json.data)
      console.log(data)
      if(data!=""){
        var changeTable=""
        resJson=JSON.parse(data)

        for(var r in resJson){
          changeTable+="<tr>"
          changeTable+="<td>"+de(resJson[r].reg_name)+"</td>"
          changeTable+="<td>"+de(resJson[r].reg_pass)+"</td>"
          changeTable+="</tr>"
        }
        $("#getPassTable").html(changeTable)
      }
    });
}