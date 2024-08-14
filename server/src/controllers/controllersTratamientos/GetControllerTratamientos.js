import Tratamientos from "./../../models/Tratamientos";
const GetControllerTratamientos = async (
  tratamiento,
  tiempoEstimado,
  precio
) => {
  try {
    const whereConditions = {
      ...(tratamiento > 0 && { tratamiento }),
      ...(tiempoEstimado && { tiempoEstimado }),
      ...(precio && { precio }),
    };
    const tratamientos = await Tratamientos.find(
      Object.keys(whereConditions).length > 0 ? whereConditions : {}
    );
    return tratamientos;
  } catch (error) {
    return error;
  }
};

export default GetControllerTratamientos;
