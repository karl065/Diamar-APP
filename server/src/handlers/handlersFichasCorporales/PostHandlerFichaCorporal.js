import PostControllerFichaCorporal from "../../controllers/controllerFichasCorporales/PostControllerFichaCorporal";

const PostHandlerFichaCorporal = async (req, res) => {
  try {
    const nuevaFicha = req.body;

    const fichaNueva = await PostControllerFichaCorporal(nuevaFicha);

    return res.status(200).json(fichaNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerFichaCorporal;
