import getControllerReservas from "./../../controllers/controllersReservas/GetControllerReservas";
const GetHandlerReservas = async (req, res) => {
  try {
    const { tratamiento, estado } = req.query;

    const reservas = await getControllerReservas(tratamiento, estado);

    return res.status(200).json(reservas);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerReservas;
