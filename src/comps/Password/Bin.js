import React, {Fragment} from 'react';
import axios from "../../api/axios"
import Password from './Password';
import Auth from "../Tokens/Auth"
import NavbarPass from "./NavbarPass"
import ResPassword from './ResPassword';
import TerPassword from './TerPassword';
import {  useState, useEffect } from 'react';
import {from64} from "../../api/sec"

//const GET_BIN_URL = process.env.API_URL + "/getBinRegs"
const GET_BIN_URL = "https://securitypassword.cyclic.app/getBinRegs"

//solicitar a la api las contraseñas de la papelera del usuario
export const getpass = async () => {
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const resp = await axios.post(GET_BIN_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    return resp.data
}

//principal
const Bin = () => {
    let ramPass= []
    const [pass, setPass] = useState(ramPass)
    const [error, setError] = useState("")

    //obtener la papelera y regresarla
    const getBin = async () => {
        let resp = []
            const passwords = await getpass().then(function(passwords){
                return passwords.data
            })
            for(let i in passwords){
                let pwd=passwords[i]
                ramPass[i]={key:i, id: pwd.id, name:from64(pwd.name).toString(), url:from64(pwd.url).toString(), value:from64(pwd.value).toString()}
                console.log(ramPass[i])
            }
            resp=ramPass
            setError(" ")
        return resp
    }
    //obtener y guardar la papelera al iniciar
	useEffect(() => {
        const resp = getBin().then(function(resp){
            setPass(resp)
            return resp
        })

    }, [getBin, setPass])
    //por cada elemento en la papelera renderizar 1 elemento de contraseña
    return(
        <>
            <Auth></Auth>
            <NavbarPass></NavbarPass>
            <p>{error}</p>
            <Fragment>
                {
                    pass.map((password) =>
                    <>
                        <Password key={password.key} name={password.name}
                        url={password.url} value={password.value}
                        id={password.id} ></Password>
                        <ResPassword id={password.id}></ResPassword>
                        <TerPassword id={password.id}></TerPassword>
                    </>
                    )
                }
            </Fragment>
        </>
    )
}

export default Bin