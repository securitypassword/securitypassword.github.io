import React, {useState, useEffect} from 'react';
import './Generator.css';
import styled from 'styled-components';
import axios from "../../api/axios"
import { BotonIncrementar, BotonDisminuir, BotonCheck, BotonGenerar } from '../Botones/botones';

//const GEN_URL = process.env.API_URL + "/generate"
const GEN_URL = "https://securitypassword.cyclic.app/generate"

//solicitar a la api una contraseña aleatoria
const generarPassword = async (config) => {
	let resp = "a"
	console.log(config)
	//parametros para la generación
	const query = {
		len:config.numeroDeCaracteres,
		up:config.mayusculas.toString(),
		low:config.minusculas.toString(),
		num:config.numeros.toString(),
		char:config.simbolos.toString()
	}
	resp = await axios.post(GEN_URL,
        JSON.stringify(query),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
    );
	resp = resp.data.data
	console.log(resp)
	return resp
}

const Generator = (parms) => {
	const [configuracion, cambiarConfiguracion] = useState({
		numeroDeCaracteres: 7,
		simbolos: true,
		numeros: true,
		mayusculas: true,
		minusculas: true
	});

	const [passwordGenerada, cambiarPasswordGenerada] = useState('');
	//generar una contraseña al iniciar
	useEffect(() => {
		parms.setValue(passwordGenerada)
		async function gen(){
			return generarPassword(configuracion)
		}
		const generated = gen().then(function(resp){
			parms.setValue(resp)
			cambiarPasswordGenerada(resp);
			return resp
		})
	}, [configuracion]);

	//comandos para los botones
	const incrementarNumeroCaracteres = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.numeroDeCaracteres += 1;
			return nuevaConfiguracion; 
		});
	}

	const disminuirNumeroCaracteres = () => {
		if(configuracion.numeroDeCaracteres > 1){
			cambiarConfiguracion((configuracionAnterior) => {
				const nuevaConfiguracion = {...configuracionAnterior};
				nuevaConfiguracion.numeroDeCaracteres -= 1;
				return nuevaConfiguracion; 
			});
		}
	}

	const toggleSimbolos = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;
			return nuevaConfiguracion; 
		});
	}

	const toggleNumeros = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;
			return nuevaConfiguracion; 
		});
	}

	const toggleMayusculas = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;
			return nuevaConfiguracion; 
		});
	}

	const toggleMinusculas = () => {
		cambiarConfiguracion((configuracionAnterior) => {
			const nuevaConfiguracion = {...configuracionAnterior};
			nuevaConfiguracion.minusculas = !nuevaConfiguracion.minusculas;
			return nuevaConfiguracion; 
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();
		async function gen(){
			return generarPassword(configuracion)
		}
		const generated = gen().then(function(resp){
			parms.setValue(resp)
			cambiarPasswordGenerada(resp);
			return resp
		})
	}
	//formulario para la generacion de una contraseña
	return (
		<div className="contenedor">
			<form onSubmit={onSubmit}>
				<Fila>
					<label>Numero de caracteres:</label>
					<Controles>
						<BotonDisminuir click={disminuirNumeroCaracteres} />
						<span>{configuracion.numeroDeCaracteres}</span>
						<BotonIncrementar click={incrementarNumeroCaracteres} />
					</Controles>
				</Fila>
				<Fila>
					<label>¿Incluir Mayusculas?</label>
					<BotonCheck seleccionado={configuracion.mayusculas} click={toggleMayusculas} />
				</Fila>
				<Fila>
					<label>¿Incluir Minusculas?</label>
					<BotonCheck seleccionado={configuracion.minusculas} click={toggleMinusculas} />
				</Fila>
				<Fila>
					<label>¿Incluir Numeros?</label>
					<BotonCheck seleccionado={configuracion.numeros} click={toggleNumeros} />
				</Fila>
				<Fila>
					<label>¿Incluir Simbolos?</label>
					<BotonCheck seleccionado={configuracion.simbolos} click={toggleSimbolos} />
				</Fila>
				<Fila>
					<BotonGenerar />
					<Input type="text" readOnly={true} value={passwordGenerada} />
				</Fila>
			</form>
		</div>
	);
}
 
export default Generator;

const Fila = styled.div`
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
`;

const Controles = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;

	& > * {
		flex: 1;
	}

	span {
		line-height: 40px;
		background: #33257E;
	}
`;

const Input = styled.input`
	width: 100%;
	background: none;
	border-radius: 4px;
	border: 1px solid rgba(255,255,255, .25);
	color: #fff;
	height: 40px;
	line-height: 40px;
	cursor: pointer;
	transition: all .3s ease;

	&:hover {
		border: 1px solid rgba(255,255,255, .50);
	}

	&::selection {
		background: #212139;
	}

	&::-moz-selection {
		background: #212139;
	}
`;