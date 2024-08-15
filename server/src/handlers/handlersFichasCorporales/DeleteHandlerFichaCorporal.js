import DeleteControllerFichaCorporal from "../../controllers/controllerFichasCorporales/DeleteControllerFichaCorporal";

const DeleteHandlerFichaCorporal = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaEliminada = await DeleteControllerFichaCorporal(id);

    return res.status(200).json(fichaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerFichaCorporal;
