import PostControllerFichaMasajes from "./../../controllers/controllerFichaMasajes/PostControllerFichasMasajes";

const PostHandlerFichaMasajes = async (req, res) => {
  try {
    const nuevaFicha = req.body;

    const fichaNueva = await PostControllerFichaMasajes(nuevaFicha);

    return res.status(200).json(fichaNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerFichaMasajes;
