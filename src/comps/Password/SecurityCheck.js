import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var zxcvbn = require("zxcvbn");

const SecurityCheck = (parms) => {
    const [level, setLevel] = useState("");
    useEffect(() => {
        if (parms.text != undefined && parms.text != "") {
            const resp = zxcvbn(parms.text);
            console.log(resp);
            setLevel(resp.score);
        } else {
            setLevel(0);
        }
    });
    return (
        <>
            <p>Nivel : {level}</p>
        </>
    );
};

export default SecurityCheck;
