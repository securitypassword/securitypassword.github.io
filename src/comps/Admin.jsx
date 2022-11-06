
import {
    useParams
  } from "react-router-dom";
  
function Admin(vars){
    var parms=useParams()
    return(
        <div>
            <input type="button" value="access" onclick="admin()"></input>
            <p id="adminP"></p>
        </div>
    )
}
function admin(){
    var token=parms
    console.log(token)
    //fetch("https://securitypassword.cyclic.app/loginAdmin/?token="+token)
}
export default Admin;