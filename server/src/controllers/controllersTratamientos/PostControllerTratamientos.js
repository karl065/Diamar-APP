import Tratamientos from "./../../models/Tratamientos";
const PostControllerTratamientos = async (tratamiento) => {
  try {
    const tratamientoNuevo = await Tratamientos.create(tratamiento);

    return tratamientoNuevo;
  } catch (error) {
    return error;
  }
};

export default PostControllerTratamientos;
