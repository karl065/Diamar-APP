import Reservas from "./../../models/Reservas";

const deleteControllerReservas = async (id) => {
  try {
    const reservaEliminada = await Reservas.findById(id);

    await Reservas.findByIdAndDelete(id);

    return reservaEliminada;
  } catch (error) {
    return error;
  }
};

export default deleteControllerReservas;
