import GetControllerTratamientos from "./../../controllers/controllersTratamientos/GetControllerTratamientos";

const GetHandlerTratamientos = async (req, res) => {
  try {
    const { tratamiento, tiemposEstimado, precio } = req.query;

    const tratamientos = await GetControllerTratamientos(
      tratamiento,
      tiemposEstimado,
      precio
    );

    return res.status(200).json(tratamientos);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default GetHandlerTratamientos;
