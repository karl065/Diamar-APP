import Mensajes from './../../models/Mensajes';

const GetControllerEmail = async (tipo, estado, obtenerTipo, obtenerEstado) => {
	try {
		if (obtenerTipo) {
			const tipoEnum = await Mensajes.schema.path('tipo').enumValues;
			return tipoEnum;
		}
		if (obtenerEstado) {
			const estadoEnum = await Mensajes.schema.path('estado').enumValues;
			return estadoEnum;
		}

		const whereConditions = {
			...(tipo > 0 && { tipo }),
			...(estado > 0 && { estado }),
		};

		const mensajes = await Mensajes.find(
			Object.keys(whereConditions).length > 0 ? whereConditions : {}
		);
		return mensajes;
	} catch (error) {
		return error;
	}
};

export default GetControllerEmail;
