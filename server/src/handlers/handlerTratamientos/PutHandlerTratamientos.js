import PutControllerTratamiento from "./../../controllers/controllersTratamientos/PutControllerTratamientos";

const PutHandlerTratamientos = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const tratamientoActualizado = await PutControllerTratamiento(
      dataUpdate,
      id
    );

    return res.status(200).json(tratamientoActualizado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerTratamientos;
