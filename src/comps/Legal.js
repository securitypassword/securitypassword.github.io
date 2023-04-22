import { useNavigate } from "react-router-dom";
const Legal = () => {
    const act = () => {
        useNavigate("/");
    }
    return(
        <>
        aviso legal aviso legal
        <button onClick={act}></button>
        </>
    )
}

export default Legal