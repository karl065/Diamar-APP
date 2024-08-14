import Usuarios from "../../models/Usuarios";
import Reservas from "./../../models/Reservas";

const postControllerReservas = async (reserva) => {
  try {
    const reservaNueva = await Reservas.create(reserva);

    if (reserva.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        reserva.idUsuario,
        { $push: { reservas: reservaNueva._id } },
        { new: true }
      );
    }

    return reservaNueva;
  } catch (error) {
    return error;
  }
};

export default postControllerReservas;
