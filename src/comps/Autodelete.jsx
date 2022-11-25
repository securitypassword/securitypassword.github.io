import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

var varsGet=""
function Autodelete(vars){
    varsGet=vars
    return(
        <div>
            <Button id="autoDelBtn" title="auto del" onPress={autodel}></Button>
            <p id="autoDelRes"></p>
        </div>
    )
}

function autodel(){
    var usu_id=de(varsGet.vars.usu_id)
    if(usu_id!=""){
        fetch("https://securitypassword.cyclic.app/changeAutoDel/?usu_id="+usu_id, {method : 'GET',})
        .then(function(response) {
        return response.json(); })
        .then(function(json) {
        if(json.data!=""){
            console.log(json.data)
            $("#autoDelRes").text(json.data)
        }
        })
    }
}

export default Autodelete;