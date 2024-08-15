import Notificaciones from "./../../models/Notificaciones";

const GetControllerNotificaciones = async () => {
  try {
    const notificaciones = await Notificaciones.find();
    return notificaciones;
  } catch (error) {
    return error;
  }
};

export default GetControllerNotificaciones;
