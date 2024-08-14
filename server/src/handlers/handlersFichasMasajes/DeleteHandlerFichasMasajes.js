import DeleteControllerFichaMasajes from "./../../controllers/controllerFichaMasajes/DeleteControllerFichaMasaje";

const DeleteHandlerFichaMasajes = async (req, res) => {
  try {
    const { id } = req.params;

    const fichaEliminada = await DeleteControllerFichaMasajes(id);

    return res.status(200).json(fichaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerFichaMasajes;
