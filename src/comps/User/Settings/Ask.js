import React, { useEffect, useState } from "react";
import { BotonCheck } from "../../Botones/botones";
import Auth from "../../Tokens/Auth";
import axios from "../../../api/axios";

//const ASK_URL = process.env.API_URL + "/askChange"
const ASK_URL = "https://securitypassword.cyclic.app/askChange"
//const GET_ASK_URL = process.env.API_URL + "/getAsk"
const GET_ASK_URL = "https://securitypassword.cyclic.app/getAsk"
//const SET_ASK_URL = process.env.API_URL + "/setAsk"
const SET_ASK_URL = "https://securitypassword.cyclic.app/setAsk"

const setAskApi = async (quest,ans,setError) => {
    let resp = ""
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token,
        question:quest,
        ans:ans
    }
    const queryresp = await axios.post(SET_ASK_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(queryresp.data.data=="error"){
        setError(queryresp.data.msg)
    }
    if(queryresp.data.data=="success"){
        const msg = "security question set " + queryresp.data.msg
        resp=queryresp.data.msg
        setError(msg)
    }
    return resp
}
const changeAskApi = async (setError) => {
    let resp = ""
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const queryresp = await axios.post(ASK_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(queryresp.data.data=="error"){
        setError(queryresp.data.msg)
    }
    if(queryresp.data.data=="success"){
        const msg = "question set to " + queryresp.data.msg
        resp=queryresp.data.msg
        setError(msg)
    }
    return resp
}
const getAsk = async (setError) => {
    let resp = ""
    let token = window.sessionStorage.getItem("token")
    const query = {
        token:token
    }
    const queryresp = await axios.post(GET_ASK_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
    if(queryresp.data.data=="error"){
        setError(resp.data.msg)
    }
    if(queryresp.data.data=="success"){
        const msg = "security question is " + queryresp.data.msg
        resp=queryresp.data.msg
        setError(msg)
    }
    return resp
}

const Ask = () => {
    const [ask, setAsk] = useState(false)
    const [error, setError] = useState("")
    const [quest, setQuest] = useState("")
    const [ans, setAns] = useState("")
    const act = () => {
        const resp = setAskApi(quest,ans,setError).then(function(resp){return resp})
    }
    const changeAsk = () => {
        changeAskApi(setError).then(function(resp){
            setAsk(resp)
        })
    }
    useEffect(() => {
        changeAskApi(setError).then(function(resp){
            setAsk(resp)
        })
    },[setAsk])
    return(
        <>
        <Auth></Auth>
        <br></br>
        <p>{error}</p>
        <BotonCheck seleccionado={ask} click={changeAsk}></BotonCheck>
        <input
                    type="text"
                    id="question"
                    onChange={(e) => setQuest(e.target.value)}
                    value={quest}
                    required
        />
        <input
                    type="text"
                    id="answer"
                    onChange={(e) => setAns(e.target.value)}
                    value={ans}
                    required
        />
        <button onClick={act}></button>
        </>
    )
}

export default Ask