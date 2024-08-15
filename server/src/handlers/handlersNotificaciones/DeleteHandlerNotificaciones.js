import DeleteControllerNotificaciones from "../../controllers/controllerNotificaciones/DeleteControllerNotificaciones";

const DeleteHandlerNotificaciones = async (req, res) => {
  try {
    const { id } = req.params;

    const notificacionEliminada = await DeleteControllerNotificaciones(id);

    return res.status(200).json(notificacionEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default DeleteHandlerNotificaciones;
