import Mensajes from './../../models/Mensajes';

const DeleteControllerEmail = async (id) => {
	try {
		const mensajeEliminado = await Mensajes.findById(id);

		await Mensajes.findByIdAndDelete(id);

		return mensajeEliminado;
	} catch (error) {
		return error;
	}
};

export default DeleteControllerEmail;
