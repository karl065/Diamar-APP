import Tratamientos from "../../models/Tratamientos";

const PutControllerTratamiento = async (dataUpdate, id) => {
  try {
    await Tratamientos.findByIdAndUpdate(id, dataUpdate);
    const tratamientoActualizado = await Tratamientos.findById(id);
    return tratamientoActualizado;
  } catch (error) {
    return error;
  }
};

export default PutControllerTratamiento;
