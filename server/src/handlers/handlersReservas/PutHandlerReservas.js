import putControllerReservas from "./../../controllers/controllersReservas/PutControllerReservas";
const PutHandlerReservas = async (req, res) => {
  try {
    const { id } = req.params;

    const dataUpdate = req.body;

    const reservaActualizada = await putControllerReservas(dataUpdate, id);

    return res.status(200).json(reservaActualizada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PutHandlerReservas;
