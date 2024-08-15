import Notificaciones from "./../../models/Notificaciones";
import Usuarios from "../../models/Usuarios";

const PostControllerNotificaciones = async (nuevaNotificacion) => {
  try {
    const notificacionNueva = await Notificaciones.create(nuevaNotificacion);

    if (nuevaNotificacion.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        nuevaNotificacion.idUsuario,
        { $push: { notificaciones: notificacionNueva._id } },
        { new: true }
      );
    }

    return notificacionNueva;
  } catch (error) {
    return error;
  }
};

export default PostControllerNotificaciones;
