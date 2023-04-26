
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
                <br></br>
                <center>
                    <h2>Terminos de uso y condiciones</h2>
                </center>
            </div>
            <br/>
            <div style={{margin: "25px", textAlign: 'justify'}}>
                <div>
                    1.-Quienes somos<br/>
                    2.- Cómo ponerte en contacto con nosotros<br/>
                    3.- Condiciones del Servicio<br/>
                    3.1.- Tu cuenta<br/>
                    3.2.- Restricciones<br/>
                    3.3.- Cancelación<br/>
                    4.- Privacidad<br/>
                    4.1.- Información que recogemos<br/>
                    4.1.1.- Información de cuenta<br/>
                    4.1.2.- Información que agregas<br/>
                    4.2.- Cómo usamos tu información<br/>
                    4.2.1.- Para prestar el servicio<br/>
                    4.2.2.- Ponernos en contacto contigo<br/>
                    4.4.3.- Para atención al cliente<br/>
                    4.4.4.- Para proteger nuestro servicio<br/>
                    4.3.- Cómo protegemos tu información<br/>
                </div>
                
                <br/><br/>

                <h2>1.-Quienes somos</h2>
                <br/>
                <p>Prestamos este servicio para facilitar la gestión de las contraseñas, mediante el almacenamiento de estas en la nube, este software es de uso gratuito para todos los usuarios.</p>
                <br/><br/>
                <h2>2.- Cómo ponerte en contacto con nosotros</h2>
                <br/>
                <p>Escribe un correo a : sec.tech.contact@gmail.com</p>
                <br/><br/>
                <h2>3.- Condiciones del Servicio</h2>
                <br/>
                <h3>3.1.- Tu cuenta</h3>
                <br/>
                <p>
                    Puedes acceder a nuestro servicio de manera continua únicamente si posees cuenta, la cual se crea con un correo, un nombre de usuario y una contraseña.
                    <br/>
                    Eres responsable de la seguridad de tu cuenta, lo que incluye no compartir los datos de esta misma, si crees que esta se ha visto comprometida debes notificarnos inmediatamente.
                    <br/>
                    La información que nos proporciones debe ser veraz y precisa, es tu responsabilidad que lo siga siendo en todo momento.
                </p>
                <br/><br/>
                <h3>3.2.- Restricciones</h3>
                <br/>
                <p>
                    El usuario no utilizará el servicio para dañar a la empresa o a terceros.
                    <br/>
                    Queda prohibido el uso con fines ilícitos.
                </p>
                <br/><br/>
                <h3>3.3.- Cancelación</h3>
                <br/>
                <p>
                    El usuario tiene el derecho de dejar de usar el servicio en el momento que decidas y por cualquier motivo.
                    <br/>
                    Para poner fin con este acuerdo debes eliminar tu cuenta manualmente lo que eliminara tu cuenta y los datos almacenados ligados a tu cuenta.
                    <br/>
                    Tu cuenta también puede ser eliminada por parte de los administradores, con un aviso a tu correo en el caso del incumplimiento de los términos establecidos, en este caso puedes apelar a la recuperación de tu cuenta sin embargo no podemos garantizar la recuperación de esta.
                </p>
                <br/>
                <h2>4.- Privacidad:</h2>
                <br/>
                <h3>4.1.- Información que recogemos:</h3>
                <br/>
                <h4>4.1.1.- Información de cuenta:</h4>
                <br/>
                <p>Al crear la cuenta únicamente guardamos los datos que tú como usuario agregaste manualmente a la hora de crear la cuenta los cuales consta de correo electrónico, nombre y contraseña maestra.</p>
                <br/><br/>
                <h4>4.1.2.- Información que agregas:</h4>
                <br/>
                <p>
                    Otra información que también se guarda son las contraseñas, que se agregan manualmente el usuario, que se refiere a las contraseñas, se guardan los datos correspondientes a estas; contraseña, nombre, url.
                    <br/>
                    Así como la información de las contraseñas que se encuentran en la papelera.
                </p>
                <br/><br/>
                <h3>4.2.- Cómo usamos tu información</h3>
                <br/>
                <h4>4.2.1.- Para prestar el servicio:</h4>
                <br/>
                <p>Se usa principalmente para la autenticación y que la información que guarde se ligue únicamente a tu cuenta.</p>
                <br/><br/>
                <h4>4.2.2.- Ponernos en contacto contigo:</h4>
                <br/>
                <p>Usamos tus datos para ponernos en contacto contigo para abordar temas relacionados con tu cuenta.</p>
                <br/><br/>
                <h4>4.4.3.- Para atención al cliente:</h4>
                <br/>
                <p>Usamos tu información para responder a tus preguntas acerca de nuestro producto y servicio y para investigar sobre errores u otros asuntos.</p>
                <br/><br/>
                <h4>4.4.4.- Para proteger nuestro servicio:</h4>
                <br/>
                <p>Se usa para hacer nuestro servicio seguro e impedir el uso indebido de este, asi como para hacer cumplir nuestras condiciones de uso.</p>
                <br/><br/>
                <h3>4.3.- Cómo protegemos tu información:</h3>
                <br/>
                <p>Nuestras medidas de seguridad consisten principalmente en la gestión por medio de tokens de validación, impidiendo a un usuario a acceder a información que no le corresponda, también se usa cifrado a la hora del transporte así como directamente en la base de datos, toda la información se encuentra cifrada.</p>
            </div>
        </>
    )
}

export default Legal