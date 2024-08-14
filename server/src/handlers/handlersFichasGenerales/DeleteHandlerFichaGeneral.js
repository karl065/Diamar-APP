import DeleteControllerFichaGeneral from "./../../controllers/controllerFichaGeneral/DeleteControllerFichaGeneral";

const DeleteHandlerFichaGeneral = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaEliminada = await DeleteControllerFichaGeneral(id);

    return res.status(200).json(fichaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerFichaGeneral;
