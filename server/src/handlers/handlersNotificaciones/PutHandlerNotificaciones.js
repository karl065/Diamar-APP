import PutControllerNotificaciones from "../../controllers/controllerNotificaciones/PutControllerNotificaciones";

const PutHandlerNotificaciones = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const notificacionActualizada = await PutControllerNotificaciones(
      dataUpdate,
      id
    );

    return res.status(200).json(notificacionActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerNotificaciones;
