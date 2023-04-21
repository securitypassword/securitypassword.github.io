import React, {Fragment} from 'react';
import {authquery} from '../Tokens/Auth';
import axios from "../../api/axios"
import Password from './Password';
import {  useState, useEffect } from 'react';
import {from64} from "../../api/sec"
import EditButton from './EditButton';
import { useNavigate } from 'react-router-dom';
import './Password.css';

//const GET_REGS_URL = process.env.API_URL + "/getActiveRegs"
const GET_REGS_URL = "https://securitypassword.cyclic.app/getActiveRegs"

//solicitar a la api las contraseñas del usuario
export const getpass = async () => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const resp = await axios.post(GET_REGS_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    return resp.data
}

//principal
const GetPasswords = () => {
    const navigate = useNavigate();
    let ramPass= []
    const [pass, setPass] = useState(ramPass)
    const [error, setError] = useState("")
    //obtener contraseñas
    const getPass = async () => {
        const valid = await authquery().then(function(valid){
            return valid
        })
        let resp = ""
        if(valid){
            const passwords = await getpass().then(function(passwords){
                return passwords.data
            })
            //console.log("pass",passwords)
            for(let i in passwords){
                let pwd=passwords[i]
                ramPass[i]={key:i, id: pwd.id, name:from64(pwd.name).toString(), username:from64(pwd.username).toString(), url:from64(pwd.url).toString(), value:from64(pwd.value).toString()}
                //console.log(ramPass[i])
            }
            resp=ramPass
            setPass(ramPass)
            setError(" ")
        }else{
            navigate("/logout");
        }
        return resp
    }
    //obtener y guardar contraseñas al iniciar
	useEffect(() => {
        const resp = getPass().then(function(resp){
            setPass(resp)
            return resp
        })

    }, [])
    //por cada elemento en la lista de contraseñas mostrar un elemento password
    return(
        <>
            <p>{error}</p>
            <Fragment>
                {
                    pass.map((password) =>
                    <>
                        <table className='tabla'>
                            <tr>
                                <th>
                                <Password key={password.key} name={password.name} username={password.username}
                                    url={password.url} value={password.value}
                                    id={password.id} >
                                </Password>
                        
                                </th>
                                <th>
                                    <EditButton id={password.id}></EditButton>
                                </th>
                            </tr>
                        </table>
                    </>
                    )
                }
            </Fragment>
        </>
    )
}

export default GetPasswords