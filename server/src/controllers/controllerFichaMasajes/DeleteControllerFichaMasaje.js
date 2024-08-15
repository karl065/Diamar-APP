import FichaMasaje from "./../../models/FichaMasajes";
import Usuarios from "../../models/Usuarios";

const DeleteControllerFichaMasajes = async (id) => {
  try {
    const fichaEliminada = await FichaMasaje.findById(id);

    await FichaMasaje.findByIdAndDelete(id);

    await Usuarios.updateMany(
      { fichasMasajes: id },
      { $pull: { fichasMasajes: id } }
    );

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaMasajes;
