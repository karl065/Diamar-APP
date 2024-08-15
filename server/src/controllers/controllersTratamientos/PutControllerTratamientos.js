import Tratamientos from "../../models/Tratamientos";

const PutControllerTratamiento = async (dataUpdate, id) => {
  try {
    if (dataUpdate.imagen) {
      await Tratamientos.findByIdAndUpdate(id, {
        $push: { imagen: dataUpdate.imagen },
      });
    } else if (dataUpdate.video) {
      await Tratamientos.findByIdAndUpdate(id, {
        $push: { video: dataUpdate.video },
      });
    } else {
      await Tratamientos.findByIdAndUpdate(id, dataUpdate);
    }
    const tratamientoActualizado = await Tratamientos.findById(id);
    return tratamientoActualizado;
  } catch (error) {
    return error;
  }
};

export default PutControllerTratamiento;
