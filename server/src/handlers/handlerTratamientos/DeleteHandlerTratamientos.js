import DeleteControllerTratamiento from "./../../controllers/controllersTratamientos/DeleteControllerTratamientos";

const DeleteHandlerTratamientos = async (req, res) => {
  try {
    const { id } = req.params;

    const tratamientoEliminado = await DeleteControllerTratamiento(id);

    return res.status(200).json(tratamientoEliminado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerTratamientos;
