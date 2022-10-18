import React, { Component} from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

var varsGet=""
function GetBin(vars){
  varsGet=vars
    return (
      <div className="App">
        <Button id="getBinBtn" title="get deleted password" onPress={getBin}></Button>
        <table id="getBinTable"></table>
      </div>
    )
  
}
function getBin(){
  var usu_id=de(varsGet.vars.usu_id)
  usu_id=parseInt(usu_id)  
  var resJson=""
  fetch("https://securitypassword.cyclic.app/getPaperBin/?usu_id="+usu_id, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      var data=de(json.data)
      console.log(data)
      if(data!=""){
        var changeTable=""
        resJson=JSON.parse(data)

        var table=document.getElementById("getBinTable")
        table.innerHTML=""
        for(var r in resJson){
          var regId=de(resJson[r].reg_id)
          var row = table.insertRow(r);
          var cellName = row.insertCell(0);
          var cellPass = row.insertCell(1);
          var cellDel = row.insertCell(2);
          cellName.append(de(resJson[r].reg_name))
          cellPass.append(de(resJson[r].reg_pass))
          var command= 'fetch("https://securitypassword.cyclic.app/delRegister/?reg_id='+regId+'", {method : "GET",}).then()'
          cellDel.innerHTML="<input type='button' value='delete' onclick='"+command+"' id='delBtn"+r+"' ></Button>"
          console.log("key "+r+" "+regId)
        }
      }
    });
}
export default GetBin;