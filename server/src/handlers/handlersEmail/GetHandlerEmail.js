import GetControllerEmail from '../../controllers/controllerEmail/GetControllerEmail';

const GetHandlerEmail = async (req, res) => {
	try {
		const { tipo, estado, obtenerTipo, obtenerEstado } = req.query;

		const mensajes = await GetControllerEmail(
			tipo,
			estado,
			obtenerTipo,
			obtenerEstado
		);

		return res.status(200).json(mensajes);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default GetHandlerEmail;
