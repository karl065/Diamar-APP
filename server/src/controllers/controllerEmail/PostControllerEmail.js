import Mensajes from './../../models/Mensajes';

const PostControllerEmail = async (nuevoEmail) => {
	try {
		const emailNuevo = await Mensajes.create(nuevoEmail);

		return emailNuevo;
	} catch (error) {
		return error;
	}
};

export default PostControllerEmail;
