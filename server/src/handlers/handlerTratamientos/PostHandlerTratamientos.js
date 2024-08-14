import PostControllerTratamientos from "./../../controllers/controllersTratamientos/PostControllerTratamientos";

const PostHandlerTratamientos = async (req, res) => {
  try {
    const tratamiento = req.body;

    const nuevoTratamiento = await PostControllerTratamientos(tratamiento);

    return res.status(200).json(nuevoTratamiento);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerTratamientos;
