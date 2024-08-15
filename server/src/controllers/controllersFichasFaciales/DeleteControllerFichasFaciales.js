import FichaFacial from "./../../models/FichaFacial";
import Usuarios from "../../models/Usuarios";

const DeleteControllerFichaFacial = async (id) => {
  try {
    const fichaEliminada = await FichaFacial.findById(id);

    await FichaFacial.findByIdAndDelete(id);

    await Usuarios.updateMany(
      { fichasFaciales: id },
      { $pull: { fichasFaciales: id } }
    );

    return fichaEliminada;
  } catch (error) {
    return error;
  }
};

export default DeleteControllerFichaFacial;
