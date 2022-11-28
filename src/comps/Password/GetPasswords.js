import React, {Fragment} from 'react';
import {authquery} from '../Tokens/Auth';
import axios from "../../api/axios"
import Password from './Password';
import {  useState, useEffect } from 'react';
import {from64} from "../../api/sec"
import EditButton from './EditButton';

//const GET_REGS_URL = process.env.API_URL + "/getActiveRegs"
const GET_REGS_URL = "https://securitypassword.cyclic.app/getActiveRegs"

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

const GetPasswords = () => {
    let ramPass= []
    const [pass, setPass] = useState(ramPass)
    const [error, setError] = useState("")
    const getPass = async () => {
        const valid = await authquery().then(function(valid){
            return valid
        })
        let resp = ""
        if(valid){
            const passwords = await getpass().then(function(passwords){
                return passwords.data
            })
            console.log("pass",passwords)
            for(let i in passwords){
                let pwd=passwords[i]
                ramPass[i]={key:i, id: pwd.id, name:from64(pwd.name).toString(), url:from64(pwd.url).toString(), value:from64(pwd.value).toString()}
                console.log(ramPass[i])
            }
            resp=ramPass
            setPass(ramPass)
            setError(" ")
        }else{
            window.location.href = "/#/logout"
        }
        return resp
    }
	useEffect(() => {
        const resp = getPass().then(function(resp){
            setPass(resp)
            return resp
        })

    }, [getPass])
    return(
        <>
            <p>{error}</p>
            <Fragment>
                {
                    pass.map((password) =>
                    <>
                        <Password key={password.key} name={password.name}
                        url={password.url} value={password.value}
                        id={password.id} ></Password>
                        <EditButton id={password.id}></EditButton>
                    </>
                    )
                }
            </Fragment>
        </>
    )
}

export default GetPasswords