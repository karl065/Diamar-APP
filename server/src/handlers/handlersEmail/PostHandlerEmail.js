import PostControllerEmail from '../../controllers/controllerEmail/PostControllerEmail';

const PostHandlerEmail = async (req, res) => {
	try {
		const nuevoEmail = req.body;

		const emailNuevo = await PostControllerEmail(nuevoEmail);

		return res.status(200).json(emailNuevo);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

export default PostHandlerEmail;
