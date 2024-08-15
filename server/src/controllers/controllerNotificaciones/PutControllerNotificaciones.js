import Notificaciones from "../../models/Notificaciones";

const PutControllerNotificaciones = async (dataUpdate, id) => {
  try {
    await Notificaciones.findByIdAndUpdate(id, dataUpdate);
    const notificacionActualizada = await Notificaciones.findById(id);
    return notificacionActualizada;
  } catch (error) {
    return error;
  }
};

export default PutControllerNotificaciones;
