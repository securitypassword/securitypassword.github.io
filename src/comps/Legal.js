import { useNavigate } from "react-router-dom";
const Legal = () => {
    const navigate = useNavigate()
    const act = () => {
        navigate();
    }
    return(
        <>
        aviso legal aviso legal
        <button onClick={act}></button>
        </>
    )
}

export default Legal