import DeleteControllerEmail from '../../controllers/controllerEmail/DeleteControllerEmail';

const DeleteHandlerEmail = async (req, res) => {
	try {
		const { id } = req.params;

		const emailEliminado = await DeleteControllerEmail(id);

		return res.status(200).json(emailEliminado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default DeleteHandlerEmail;
