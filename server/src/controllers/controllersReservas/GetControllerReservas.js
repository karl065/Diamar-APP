import Reservas from "./../../models/Reservas";

const getControllerReservas = async (tratamiento, estado) => {
  try {
    const tratamientoArray =
      typeof tratamiento === "string" ? [tratamiento] : tratamiento || [];

    const regexPatterns = tratamientoArray.map((str) => new RegExp(str, "i"));

    const whereConditions = {
      ...(tratamientoArray.length > 0 && {
        tratamiento: {
          $elemMatch: {
            $in: regexPatterns,
          },
        },
      }),
      ...(estado && {
        estado: new RegExp(`^${estado}`, "i"),
      }),
    };

    const reservas = await Reservas.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    ).populate("usuario");

    return reservas;
  } catch (error) {
    return error;
  }
};

export default getControllerReservas;
