import FichaCorporal from "./../../models/FichaCorporal";
import Usuarios from "../../models/Usuarios";

const DeleteControllerFichaCorporal = async (id) => {
  try {
    const fichaEliminada = await FichaCorporal.findById(id);

    await FichaCorporal.findByIdAndDelete(id);

    await Usuarios.updateMany(
      { fichasCorporales: id },
      { $pull: { fichasCorporales: id } }
    );

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaCorporal;
