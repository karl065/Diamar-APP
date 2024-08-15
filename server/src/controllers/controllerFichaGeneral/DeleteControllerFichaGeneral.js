import FichaGeneral from "./../../models/FichaGeneral";
import Usuarios from "../../models/Usuarios";

const DeleteControllerFichaGeneral = async (id) => {
  try {
    const fichaEliminada = await FichaGeneral.findById(id);

    await FichaGeneral.findByIdAndDelete(id);

    await Usuarios.updateMany(
      { fichaGeneral: id },
      { $pull: { fichaGeneral: id } }
    );

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaGeneral;
