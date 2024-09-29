import Mensajes from '../../models/Mensajes';

const PutControllerEmail = async (dataUpdate, id) => {
	try {
		await Mensajes.findByIdAndUpdate(id, dataUpdate);
		const mensajeActualizado = await Mensajes.findById(id);
		return mensajeActualizado;
	} catch (error) {
		return error;
	}
};

export default PutControllerEmail;
