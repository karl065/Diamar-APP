import GetControllerNotificaciones from "../../controllers/controllerNotificaciones/GetControllerNotificaciones";

const GetHandlerNotificaciones = async (req, res) => {
  try {
    const notificaciones = await GetControllerNotificaciones();

    return res.status(200).json(notificaciones);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerNotificaciones;
