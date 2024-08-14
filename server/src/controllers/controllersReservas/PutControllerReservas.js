import Reservas from "../../models/Reservas";

const putControllerReservas = async (dataUpdate, id) => {
  try {
    await Reservas.findByIdAndUpdate(id, dataUpdate);
    const reservaActualizada = await Reservas.findById(id);
    return reservaActualizada;
  } catch (error) {
    return error;
  }
};

export default putControllerReservas;
