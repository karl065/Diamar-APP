import FichaFacial from "./../../models/FichaFacial";
import Usuarios from "../../models/Usuarios";

const PostControllerFichasFaciales = async (nuevaFicha) => {
  try {
    const fichaNueva = await FichaFacial.create(nuevaFicha);

    if (nuevaFicha.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        nuevaFicha.idUsuario,
        { $push: { fichasFaciales: fichaNueva._id } },
        { new: true }
      );
    }

    return fichaNueva;
  } catch (error) {
    return error;
  }
};

export default PostControllerFichasFaciales;
