import DeleteControllerFichaFacial from "./../../controllers/controllersFichasFaciales/DeleteControllerFichasFaciales";

const DeleteHandlerFichaFaciales = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaEliminada = await DeleteControllerFichaFacial(id);

    return res.status(200).json(fichaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerFichaFaciales;
