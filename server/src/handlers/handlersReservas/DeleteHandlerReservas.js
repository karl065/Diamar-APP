import deleteControllerReservas from "./../../controllers/controllersReservas/DeleteControllerReservas";
const DeleteHandlerReservas = async (req, res) => {
  try {
    const { id } = req.params;

    const reservaEliminada = await deleteControllerReservas(id);

    return res.status(200).json(reservaEliminada);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { DeleteHandlerReservas };
