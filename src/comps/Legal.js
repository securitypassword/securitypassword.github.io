import { useNavigate } from "react-router-dom";
const Legal = () => {
    const navigate = useNavigate()
    const action = () => {
        navigate("/");
    }
    return(
        <>
        aviso legal aviso legal
        <button onClick={action}>Volver</button>
        </>
    )
}

export default Legal