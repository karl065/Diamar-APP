import PostControllerFichaGeneral from "./../../controllers/controllerFichaGeneral/PostControllerFichaGral";

const PostHandlerFichaGeneral = async (req, res) => {
  try {
    const nuevaFicha = req.body;

    const fichaNueva = await PostControllerFichaGeneral(nuevaFicha);

    return res.status(200).json(fichaNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerFichaGeneral;
