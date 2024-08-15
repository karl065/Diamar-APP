import Reservas from "./../../models/Reservas";
import Usuarios from "../../models/Usuarios";

const deleteControllerReservas = async (id) => {
  try {
    const reservaEliminada = await Reservas.findById(id);

    await Reservas.findByIdAndDelete(id);

    await Usuarios.updateMany({ reservas: id }, { $pull: { reservas: id } });

    return reservaEliminada;
  } catch (error) {
    return error;
  }
};

export default deleteControllerReservas;
