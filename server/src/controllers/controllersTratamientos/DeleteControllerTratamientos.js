import Tratamientos from "./../../models/Tratamientos";

const DeleteControllerTratamiento = async (id) => {
  try {
    const tratamientoEliminado = await Tratamientos.findById(id);

    await Tratamientos.findByIdAndDelete(id);

    return tratamientoEliminado;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerTratamiento;
