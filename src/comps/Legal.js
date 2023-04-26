
import Navbar from "./Navbar/Navbar";

const Legal = () => {
    const styles = {
        main: {
            marginLeft: "100px",
          },
      
      };

    return(
        <>
        <Navbar />
            <div>
                <center>
                    Terminos de uso y condiciones
                </center>
            </div>
            <div className="main">
                <h3>1.-Quienes somos</h3>
                <br/>
                Prestamos este servicio para facilitar la gestión de las contraseñas, mediante el almacenamiento de estas en la nube, este software es de uso gratuito para todos los usuarios.
                <br/><br/>
                <h3>2.- Cómo ponerte en contacto con nosotros</h3>
                Escribe un correo a : sec.tech.contact@gmail.com

            </div>
        </>
    )
}

export default Legal