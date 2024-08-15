import PostControllerNotificaciones from "../../controllers/controllerNotificaciones/PostControllerNotificiones";

const PostHandlerNotificaciones = async (req, res) => {
  try {
    const nuevaNotificacion = req.body;

    const notificacionNueva = await PostControllerNotificaciones(
      nuevaNotificacion
    );

    return res.status(200).json(notificacionNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerNotificaciones;
