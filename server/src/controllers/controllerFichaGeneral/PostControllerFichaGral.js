import FichaGeneral from "./../../models/FichaGeneral";
import Usuarios from "../../models/Usuarios";

const PostControllerFichaGeneral = async (nuevaFicha) => {
  try {
    const fichaNueva = await FichaGeneral.create(nuevaFicha);

    if (nuevaFicha.idUsuario) {
      await Usuarios.findByIdAndUpdate(
        nuevaFicha.idUsuario,
        { $push: { fichaGeneral: fichaNueva._id } },
        { new: true }
      );
    }

    return fichaNueva;
  } catch (error) {
    return error;
  }
};

export default PostControllerFichaGeneral;
