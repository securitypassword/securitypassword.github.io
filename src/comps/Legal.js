
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
        <div 
            style={{background: `linear-gradient(to bottom right, #212139, #45189f, #212139)`}}>
            <div>
                <br></br>
                <center style={{marginTop: '150px'}}>
                    <h2>Terminos de uso y condiciones</h2>
                </center>
            </div>
            <br/>
            <div style={{margin: "25px", textAlign: 'justify'}}>
                <div>
                    <a href="#1">1.- ¿Quiénes somos?<br/></a>
                    <a href="#2">2.- ¿Cómo ponerte en contacto con nosotros?<br/></a>
                    <a href="#3">3.- Condiciones del Servicio<br/></a>
                    <a href="#3.1">3.1.- Tu cuenta<br/></a>
                    <a href="#3.2">3.2.- Restricciones<br/></a>
                    <a href="#3.3">3.3.- Cancelación<br/></a>
                    <a href="#4">4.- Privacidad<br/></a>
                    <a href="#4.1">4.1.- Información que recopilamos<br/></a>
                    <a href="#4.1.1">4.1.1.- Información de cuenta<br/></a>
                    <a href="#4.1.2">4.1.2.- Información que agregas<br/></a>
                    <a href="#4.2">4.2.- ¿Cómo usamos tu información?<br/></a>
                    <a href="#4.2.1">4.2.1.- Para prestar el servicio<br/></a>
                    <a href="#4.2.2">4.2.2.- Ponernos en contacto contigo<br/></a>
                    <a href="#4.2.3">4.2.3.- Para atención al cliente<br/></a>
                    <a href="#4.2.3">4.2.4.- Para proteger nuestro servicio<br/></a>
                    <a href="#4.3">4.3.- ¿Cómo protegemos tu información?<br/></a>
                </div>
                
                <br/><br/>

                <div id="1"></div>
                <h2>1.-¿Quiénes somos?</h2>
                <br/>
                <p>Prestamos este servicio para facilitar la gestión de las contraseñas, mediante el almacenamiento de estas en la nube, este software es de uso gratuito para todos los usuarios.</p>
                <br/><br/>
                <div id="2"></div>
                <h2>2.- ¿Cómo ponerte en contacto con nosotros?</h2>
                <br/>
                <p>Escribe un correo a : sec.tech.contact@gmail.com</p>
                <br/><br/>
                <div id="3"></div>
                <h2>3.- Condiciones del Servicio</h2>
                <br/>
                <div id="3.1"></div>
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
                <div id="3.2"></div>
                <h3>3.2.- Restricciones</h3>
                <br/>
                <p>
                    El usuario no utilizará el servicio para dañar a la empresa o a terceros.
                    <br/>
                    Queda prohibido el uso con fines ilícitos.
                </p>
                <br/><br/>
                <div id="3.3"></div>
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
                <div id="4"></div>
                <h2>4.- Privacidad:</h2>
                <br/>
                <div id="4.1"></div>
                <h3>4.1.- Información que recogemos:</h3>
                <br/>
                <div id="4.1.1"></div>
                <h4>4.1.1.- Información de cuenta:</h4>
                <br/>
                <p>Al crear la cuenta únicamente guardamos los datos que tú como usuario agregaste manualmente a la hora de crear la cuenta los cuales consta de correo electrónico, nombre y contraseña maestra.</p>
                <br/><br/>
                <div id="4.1.2"></div>
                <h4>4.1.2.- Información que agregas:</h4>
                <br/>
                <p>
                    Otra información que también se guarda son las contraseñas, que se agregan manualmente el usuario, que se refiere a las contraseñas, se guardan los datos correspondientes a estas; contraseña, nombre, url.
                    <br/>
                    Así como la información de las contraseñas que se encuentran en la papelera.
                </p>
                <br/><br/>
                <div id="4.2"></div>
                <h3>4.2.- ¿Cómo usamos tu información?</h3>
                <br/>
                <div id="4.2.1"></div>
                <h4>4.2.1.- Para prestar el servicio:</h4>
                <br/>
                <p>Se usa principalmente para la autenticación y que la información que guarde se ligue únicamente a tu cuenta.</p>
                <br/><br/>
                <div id="4.2.2"></div>
                <h4>4.2.2.- Ponernos en contacto contigo:</h4>
                <br/>
                <p>Usamos tus datos para ponernos en contacto contigo para abordar temas relacionados con tu cuenta.</p>
                <br/><br/>
                <div id="4.2.3"></div>
                <h4>4.2.3.- Para atención al cliente:</h4>
                <br/>
                <p>Usamos tu información para responder a tus preguntas acerca de nuestro producto y servicio y para investigar sobre errores u otros asuntos.</p>
                <br/><br/>
                <div id="4.2.4"></div>
                <h4>4.2.4.- Para proteger nuestro servicio:</h4>
                <br/>
                <p>Se usa para hacer nuestro servicio seguro e impedir el uso indebido de este, así como para hacer cumplir nuestras condiciones de uso.</p>
                <br/><br/>
                <div id="4.3"></div>
                <h3>4.3.- ¿Cómo protegemos tu información?:</h3>
                <br/>
                <p>Nuestras medidas de seguridad consisten principalmente en la gestión por medio de tokens de validación, impidiendo a un usuario a acceder a información que no le corresponda, también se usa cifrado a la hora del transporte así como directamente en la base de datos, toda la información se encuentra cifrada.</p>
            </div>

        </div>
        </>
    )
}

export default Legal
