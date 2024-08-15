import PostControllerFichasFaciales from "./../../controllers/controllersFichasFaciales/PostControllerFichasFaciales";

const PostHandlerFichaFaciales = async (req, res) => {
  try {
    const nuevaFicha = req.body;

    const fichaNueva = await PostControllerFichasFaciales(nuevaFicha);

    return res.status(200).json(fichaNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerFichaFaciales;
