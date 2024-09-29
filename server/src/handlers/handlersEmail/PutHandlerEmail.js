import PutControllerEmail from '../../controllers/controllerEmail/PutControllerEmail';

const PutHandlerEmail = async (req, res) => {
	try {
		const { id } = req.params;

		const dataUpdate = req.body;

		const emailActualizado = await PutControllerEmail(dataUpdate, id);

		return res.status(200).json(emailActualizado);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default PutHandlerEmail;
