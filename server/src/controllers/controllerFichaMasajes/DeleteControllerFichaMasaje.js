import FichaMasaje from "./../../models/FichaMasajes";
const DeleteControllerFichaMasajes = async (id) => {
  try {
    const fichaEliminada = await FichaMasaje.findById(id);

    await FichaMasaje.findByIdAndDelete(id);

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaMasajes;
