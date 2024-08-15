import Notificaciones from "./../../models/Notificaciones";
import Usuarios from "../../models/Usuarios";

const DeleteControllerNotificaciones = async (id) => {
  try {
    const notificacionEliminada = await Notificaciones.findById(id);

    await Notificaciones.findByIdAndDelete(id);

    await Usuarios.updateMany(
      { notificaciones: id },
      { $pull: { notificaciones: id } }
    );

    return notificacionEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerNotificaciones;
